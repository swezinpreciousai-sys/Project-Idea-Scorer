"use client";

interface ScoreSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export default function ScoreSlider({ label, value, onChange }: ScoreSliderProps) {
  return (
    <div>
      {/* Label and score badge */}
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-semibold text-slate-700">
          {label}
        </label>
        <span className="bg-indigo-100 text-indigo-700 text-sm font-bold px-3 py-0.5 rounded-full">
          {value}/10
        </span>
      </div>

      {/* Slider input */}
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
      />

      {/* Min / Max labels */}
      <div className="flex justify-between text-xs text-slate-400 mt-1">
        <span>1 — Low</span>
        <span>10 — High</span>
      </div>
    </div>
  );
}
