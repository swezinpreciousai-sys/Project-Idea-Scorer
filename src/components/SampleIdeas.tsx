"use client";

interface IdeaData {
  projectIdea: string;
  targetUsers: string;
  problem: string;
  aiUsage: string;
  teamSize: string;
  buildTime: string;
}

interface SampleIdeasProps {
  onSelect: (data: IdeaData) => void;
}

// Pre-built sample project ideas
const samples: { name: string; data: IdeaData }[] = [
  {
    name: "AI Resume Checker for Job Seekers",
    data: {
      projectIdea: "AI Resume Checker for Job Seekers",
      targetUsers: "Job seekers and career changers",
      problem: "Resumes get rejected without actionable feedback",
      aiUsage: "Analyze resume content and suggest improvements using NLP",
      teamSize: "2 developers",
      buildTime: "4 weeks",
    },
  },
  {
    name: "Hospital Visitor Appointment Guide",
    data: {
      projectIdea: "Hospital Visitor Appointment Guide",
      targetUsers: "Hospital visitors and patients",
      problem: "Visitors get lost and struggle to find departments",
      aiUsage: "Provide turn-by-turn guidance and appointment reminders",
      teamSize: "2 developers, 1 designer",
      buildTime: "6 weeks",
    },
  },
  {
    name: "Yangon Delivery Assistant",
    data: {
      projectIdea: "Yangon Delivery Assistant",
      targetUsers: "Residents and small businesses in Yangon",
      problem: "Delivery logistics in Yangon are unreliable and confusing",
      aiUsage: "Optimize delivery routes and estimate ETAs based on traffic",
      teamSize: "3 developers",
      buildTime: "8 weeks",
    },
  },
  {
    name: "AI Interview Practice App",
    data: {
      projectIdea: "AI Interview Practice App",
      targetUsers: "Fresh graduates and entry-level job seekers",
      problem: "People lack realistic interview practice and feedback",
      aiUsage: "Simulate interview questions and score responses",
      teamSize: "2 developers, 1 designer",
      buildTime: "6 weeks",
    },
  },
  {
    name: "Waste Collection Mapping System",
    data: {
      projectIdea: "Waste Collection Mapping System",
      targetUsers: "City residents and waste management teams",
      problem: "Inconsistent waste collection schedules confuse residents",
      aiUsage: "Predict collection times and optimize pickup routes",
      teamSize: "2 developers",
      buildTime: "5 weeks",
    },
  },
];

export default function SampleIdeas({ onSelect }: SampleIdeasProps) {
  return (
    <section className="max-w-3xl mx-auto px-4 pb-12">
      <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
        💡 Sample Ideas
      </h2>
      <p className="text-slate-500 text-center mb-6">
        Click a sample idea to auto-fill the form
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {samples.map((sample) => (
          <button
            key={sample.name}
            onClick={() => onSelect(sample.data)}
            className="text-left bg-white border border-slate-200 rounded-xl px-4 py-3.5 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-200 cursor-pointer group"
          >
            <span className="text-sm font-semibold text-slate-800 group-hover:text-indigo-700 transition-colors">
              {sample.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
