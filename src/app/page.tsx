"use client";

import { useState, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import IdeaForm from "@/components/IdeaForm";
import ScoreSlider from "@/components/ScoreSlider";
import ResultCard from "@/components/ResultCard";
import SampleIdeas from "@/components/SampleIdeas";
import Footer from "@/components/Footer";

// Form data shape
interface IdeaData {
  projectIdea: string;
  targetUsers: string;
  problem: string;
  aiUsage: string;
  teamSize: string;
  buildTime: string;
}

// Scoring data shape
interface Scores {
  realUserProblem: number;
  aiValue: number;
  scope: number;
  marketDemand: number;
  teamExcitement: number;
}

// Empty form defaults
const emptyForm: IdeaData = {
  projectIdea: "",
  targetUsers: "",
  problem: "",
  aiUsage: "",
  teamSize: "",
  buildTime: "",
};

// Default scores (all start at 5)
const defaultScores: Scores = {
  realUserProblem: 5,
  aiValue: 5,
  scope: 5,
  marketDemand: 5,
  teamExcitement: 5,
};

export default function Home() {
  // Form state
  const [formData, setFormData] = useState<IdeaData>(emptyForm);
  // Scoring state
  const [scores, setScores] = useState<Scores>(defaultScores);
  // Has the user scored yet?
  const [hasScored, setHasScored] = useState(false);

  // Ref for scrolling to the form
  const formRef = useRef<HTMLDivElement>(null);

  // Scroll to the idea form section
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Handle score calculation
  const handleScore = () => {
    setHasScored(true);
    // Scroll to result after a short delay to let the result render
    setTimeout(() => {
      document.getElementById("result-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Calculate total score
  const totalScore =
    scores.realUserProblem +
    scores.aiValue +
    scores.scope +
    scores.marketDemand +
    scores.teamExcitement;

  return (
    <main className="flex-1">
      {/* Hero */}
      <HeroSection onScrollToForm={scrollToForm} />

      {/* Sample Ideas */}
      <SampleIdeas onSelect={setFormData} />

      {/* Idea Form */}
      <div ref={formRef}>
        <IdeaForm data={formData} onChange={setFormData} />
      </div>

      {/* Scoring Section */}
      <section className="max-w-2xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
          🎯 Score Your Idea
        </h2>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 space-y-6">
          {/* Criteria sliders */}
          <ScoreSlider
            label="1. Real User Problem"
            value={scores.realUserProblem}
            onChange={(val) => setScores({ ...scores, realUserProblem: val })}
          />
          <ScoreSlider
            label="2. AI Value"
            value={scores.aiValue}
            onChange={(val) => setScores({ ...scores, aiValue: val })}
          />
          <ScoreSlider
            label="3. Scope"
            value={scores.scope}
            onChange={(val) => setScores({ ...scores, scope: val })}
          />
          <ScoreSlider
            label="4. Market Demand"
            value={scores.marketDemand}
            onChange={(val) => setScores({ ...scores, marketDemand: val })}
          />
          <ScoreSlider
            label="5. Team Excitement"
            value={scores.teamExcitement}
            onChange={(val) => setScores({ ...scores, teamExcitement: val })}
          />

          {/* Score button */}
          <button
            onClick={handleScore}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl text-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            Score My Idea
          </button>
        </div>
      </section>

      {/* Result Section */}
      {hasScored && (
        <div id="result-section">
          <ResultCard
            ideaTitle={formData.projectIdea}
            totalScore={totalScore}
            scores={scores}
          />
        </div>
      )}

      {/* Footer */}
      <Footer />
    </main>
  );
}
