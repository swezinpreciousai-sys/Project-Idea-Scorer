"use client";

interface IdeaData {
  projectIdea: string;
  targetUsers: string;
  problem: string;
  aiUsage: string;
  teamSize: string;
  buildTime: string;
}

interface IdeaFormProps {
  data: IdeaData;
  onChange: (data: IdeaData) => void;
}

export default function IdeaForm({ data, onChange }: IdeaFormProps) {
  // Update a single field in the form data
  const updateField = (field: keyof IdeaData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  // Reusable form field
  const fields: { key: keyof IdeaData; label: string; placeholder: string }[] =
    [
      {
        key: "projectIdea",
        label: "Project Idea",
        placeholder: "e.g. AI-powered meal planner",
      },
      {
        key: "targetUsers",
        label: "Target Users",
        placeholder: "e.g. Busy professionals",
      },
      {
        key: "problem",
        label: "Problem It Solves",
        placeholder: "e.g. People struggle to plan healthy meals",
      },
      {
        key: "aiUsage",
        label: "How AI Is Used",
        placeholder: "e.g. Analyze dietary preferences and generate plans",
      },
      {
        key: "teamSize",
        label: "Team Size",
        placeholder: "e.g. 2 developers, 1 designer",
      },
      {
        key: "buildTime",
        label: "Estimated Build Time",
        placeholder: "e.g. 4 weeks",
      },
    ];

  return (
    <section className="max-w-2xl mx-auto px-4 pb-12" id="idea-form">
      <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
        📝 Describe Your Project
      </h2>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 space-y-5">
        {fields.map((field) => (
          <div key={field.key}>
            <label
              htmlFor={field.key}
              className="block text-sm font-semibold text-slate-700 mb-1.5"
            >
              {field.label}
            </label>
            <input
              id={field.key}
              type="text"
              value={data[field.key]}
              onChange={(e) => updateField(field.key, e.target.value)}
              placeholder={field.placeholder}
              className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
