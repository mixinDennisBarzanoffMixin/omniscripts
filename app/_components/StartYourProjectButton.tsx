"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import ProjectBriefForm from "./ProjectBriefForm";

export default function StartYourProjectButton() {
  const [isProjectFormOpen, setIsProjectFormOpen] = useState(false);

  return (
    <>
      <Button
        size="lg"
        onClick={() => setIsProjectFormOpen(true)}
        className="h-12 px-8 bg-linear-to-r from-brand-500 to-ocean-500 hover:from-brand-600 hover:to-ocean-600 transform hover:scale-110 transition-transform duration-500 shadow-xl hover:shadow-2xl motion-safe:animate-[glow-50-100_3s_ease-in-out_infinite] cursor-pointer"
      >
        Start Your Project
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
      
      <ProjectBriefForm 
        isOpen={isProjectFormOpen}
        onClose={() => setIsProjectFormOpen(false)}
      />
    </>
  );
}