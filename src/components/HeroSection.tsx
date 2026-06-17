"use client";

interface HeroSectionProps {
  onScrollToForm: () => void;
}

export default function HeroSection({ onScrollToForm }: HeroSectionProps) {
  return (
    <section className="text-center py-20 px-4 max-w-3xl mx-auto">
      {/* Badge */}
      <span className="inline-block bg-indigo-100 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
        🚀 Free Tool
      </span>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
        AI Project Idea Scorer
      </h1>

      {/* Subtitle */}
      <p className="text-xl text-slate-600 mb-3">
        Score your project idea before you build it
      </p>

      {/* Description */}
      <p className="text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed">
        Enter your project idea, rate it across 5 key criteria, and get an
        instant score to help you decide if it&apos;s worth building.
      </p>

      {/* CTA Button */}
      <button
        onClick={onScrollToForm}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-xl text-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
      >
        Score My Idea →
      </button>
    </section>
  );
}
