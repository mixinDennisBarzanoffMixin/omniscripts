import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

export type ProjectBrief = {
	name: string;
	email: string;
	company?: string;
	projectType?: string;
	budget?: string;
	timeline?: string;
	description: string;
};

function getEnvOrThrow(name: string): string {
	const value = process.env[name];
	if (!value) {
		throw new Error(`Missing required env var: ${name}`);
	}
	return value;
}

const sesClient = new SESv2Client({
	region: getEnvOrThrow("AWS_REGION"),
	credentials: {
		accessKeyId: getEnvOrThrow("AWS_ACCESS_KEY_ID"),
		secretAccessKey: getEnvOrThrow("AWS_SECRET_ACCESS_KEY"),
	},
});

export async function sendBriefProject(brief: ProjectBrief): Promise<void> {
	const fromEmail = getEnvOrThrow("SES_FROM_ADDRESS");
	const toEmail = process.env.SES_TO_ADDRESS || fromEmail;

	const subject = `New Project Brief from ${brief.name}`;

	const htmlBody = `
		<h2>New Project Brief</h2>
		<p><strong>Name:</strong> ${escapeHtml(brief.name)}</p>
		<p><strong>Email:</strong> ${escapeHtml(brief.email)}</p>
		<p><strong>Company:</strong> ${escapeHtml(brief.company || "-")}</p>
		<p><strong>Project Type:</strong> ${escapeHtml(brief.projectType || "-")}</p>
		<p><strong>Budget:</strong> ${escapeHtml(brief.budget || "-")}</p>
		<p><strong>Timeline:</strong> ${escapeHtml(brief.timeline || "-")}</p>
		<p><strong>Description:</strong></p>
		<p>${escapeHtml(brief.description).replace(/\n/g, "<br/>")}</p>
	`;

	const textBody = `New Project Brief\n\n` +
		`Name: ${brief.name}\n` +
		`Email: ${brief.email}\n` +
		`Company: ${brief.company || "-"}\n` +
		`Project Type: ${brief.projectType || "-"}\n` +
		`Budget: ${brief.budget || "-"}\n` +
		`Timeline: ${brief.timeline || "-"}\n\n` +
		`Description:\n${brief.description}`;

	const command = new SendEmailCommand({
		FromEmailAddress: fromEmail,
		Destination: {
			ToAddresses: [toEmail],
		},
		ReplyToAddresses: [brief.email],
		Content: {
			Simple: {
				Subject: { Data: subject, Charset: "UTF-8" },
				Body: {
					Text: { Data: textBody, Charset: "UTF-8" },
					Html: { Data: htmlBody, Charset: "UTF-8" },
				},
			},
		},
	});

	await sesClient.send(command);
}

function escapeHtml(input: string): string {
	return input
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}
