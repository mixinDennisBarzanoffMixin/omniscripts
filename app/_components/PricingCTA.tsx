"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import ProjectBriefForm from "./ProjectBriefForm";

interface PricingCTAProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "lg" | "default";
  variant?: "default" | "outline";
}

export default function PricingCTA({ 
  children, 
  className = "", 
  size = "lg",
  variant = "default" 
}: PricingCTAProps) {
  const [isProjectFormOpen, setIsProjectFormOpen] = useState(false);

  return (
    <>
      <Button
        size={size}
        variant={variant}
        onClick={() => setIsProjectFormOpen(true)}
        className={className}
      >
        {children}
      </Button>
      
      <ProjectBriefForm 
        isOpen={isProjectFormOpen}
        onClose={() => setIsProjectFormOpen(false)}
      />
    </>
  );
}
