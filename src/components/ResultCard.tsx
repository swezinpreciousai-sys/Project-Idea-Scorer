"use client";

// Result level types
type ResultLevel = "excellent" | "good" | "needs-improvement" | "not-recommended";

interface ResultCardProps {
  ideaTitle: string;
  totalScore: number;
  scores: {
    realUserProblem: number;
    aiValue: number;
    scope: number;
    marketDemand: number;
    teamExcitement: number;
  };
}

// Determine result level based on total score
function getResultLevel(total: number): {
  level: ResultLevel;
  label: string;
  color: string;
  bg: string;
} {
  if (total >= 40) {
    return {
      level: "excellent",
      label: "Excellent Idea",
      color: "text-green-700",
      bg: "bg-green-100",
    };
  }
  if (total >= 30) {
    return {
      level: "good",
      label: "Good MVP Idea",
      color: "text-blue-700",
      bg: "bg-blue-100",
    };
  }
  if (total >= 20) {
    return {
      level: "needs-improvement",
      label: "Needs Improvement",
      color: "text-amber-700",
      bg: "bg-amber-100",
    };
  }
  return {
    level: "not-recommended",
    label: "Not Recommended Yet",
    color: "text-red-700",
    bg: "bg-red-100",
  };
}

// Scoring criteria labels
const criteriaLabels: { key: keyof ResultCardProps["scores"]; label: string }[] =
  [
    { key: "realUserProblem", label: "Real User Problem" },
    { key: "aiValue", label: "AI Value" },
    { key: "scope", label: "Scope" },
    { key: "marketDemand", label: "Market Demand" },
    { key: "teamExcitement", label: "Team Excitement" },
  ];

export default function ResultCard({ ideaTitle, totalScore, scores }: ResultCardProps) {
  const { label, color, bg } = getResultLevel(totalScore);

  // Get MVP suggestion based on score
  const getMvpSuggestion = (): string => {
    if (totalScore >= 40) {
      return "Build a full MVP with core features. Test with real users ASAP.";
    }
    if (totalScore >= 30) {
      return "Build a focused MVP. Start with one key feature and validate.";
    }
    if (totalScore >= 20) {
      return "Prototype a small experiment first. Get feedback before committing.";
    }
    return "Revisit the problem and scope. Consider a simpler idea to learn from.";
  };

  // Get risk warning based on score
  const getRiskWarning = (): string => {
    if (totalScore >= 40) {
      return "Execution risk — don't over-scope. Ship fast and iterate.";
    }
    if (totalScore >= 30) {
      return "Market validation risk — confirm real demand before going deep.";
    }
    if (totalScore >= 20) {
      return "Scope and AI value risk — narrow the problem and rethink AI usage.";
    }
    return "High risk across multiple criteria. Research and validate more.";
  };

  // Get next step based on score
  const getNextStep = (): string => {
    if (totalScore >= 40) {
      return "🚀 Start building! Define milestones and set a 2-week sprint.";
    }
    if (totalScore >= 30) {
      return "📋 Validate with 5 potential users this week. Then start building.";
    }
    if (totalScore >= 20) {
      return "🔍 Talk to users and refine the idea. Consider pivoting the scope.";
    }
    return "💡 Explore new angles. Look at sample ideas for inspiration.";
  };

  return (
    <section className="max-w-2xl mx-auto px-4 pb-16">
      <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
        📊 Score Result
      </h2>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 space-y-6">
        {/* Project title */}
        <div className="text-center">
          <p className="text-sm text-slate-500 mb-1">Project Idea</p>
          <h3 className="text-xl font-bold text-slate-900">
            {ideaTitle || "Untitled Project"}
          </h3>
        </div>

        {/* Total score */}
        <div className="text-center">
          <p className="text-5xl font-extrabold text-indigo-600">
            {totalScore}
            <span className="text-2xl text-slate-400 font-medium">/50</span>
          </p>
        </div>

        {/* Status badge */}
        <div className="text-center">
          <span
            className={`inline-block font-semibold px-5 py-1.5 rounded-full text-sm ${color} ${bg}`}
          >
            {label}
          </span>
        </div>

        {/* Score breakdown */}
        <div>
          <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">
            Score Breakdown
          </h4>
          <div className="space-y-2">
            {criteriaLabels.map(({ key, label: critLabel }) => (
              <div
                key={key}
                className="flex items-center justify-between"
              >
                <span className="text-slate-700 text-sm">{critLabel}</span>
                <div className="flex items-center gap-2">
                  {/* Mini progress bar */}
                  <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-500 rounded-full transition-all"
                      style={{ width: `${(scores[key] / 10) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 w-6 text-right">
                    {scores[key]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendation */}
        <div className="bg-slate-50 rounded-xl p-4 space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
              💡 MVP Suggestion
            </h4>
            <p className="text-slate-700 text-sm">{getMvpSuggestion()}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
              ⚠️ Risk Warning
            </h4>
            <p className="text-slate-700 text-sm">{getRiskWarning()}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
              🏁 Next Step
            </h4>
            <p className="text-slate-700 text-sm">{getNextStep()}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
