"use client";

import { useEffect, useState, useCallback } from "react";
import { weeks } from "./data";

const STORAGE_KEY = "go-ai-tracker-v1";

function loadChecked(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveChecked(state: Record<string, boolean>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

// ── Progress bar ──────────────────────────────────────────────────────────────
function ProgressBar({ value, max }: { value: number; max: number }) {
  const pct = max === 0 ? 0 : Math.round((value / max) * 100);
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-zinc-100 rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs tabular-nums text-zinc-500 w-10 text-right">
        {value}/{max}
      </span>
    </div>
  );
}

// ── Section card ──────────────────────────────────────────────────────────────
function SectionCard({
  section,
  checked,
  onToggle,
}: {
  section: (typeof weeks)[0]["sections"][0];
  checked: Record<string, boolean>;
  onToggle: (id: string) => void;
}) {
  const done = section.items.filter((i) => checked[i.id]).length;
  const total = section.items.length;
  const allDone = done === total;

  return (
    <div
      className={`rounded-xl border transition-colors duration-300 ${
        allDone
          ? "border-zinc-700 bg-zinc-900/60"
          : "border-zinc-800 bg-zinc-900/30"
      }`}
    >
      {/* Card header */}
      <div className="flex items-start justify-between gap-4 p-5 pb-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              {section.day}
            </span>
            <span className="text-xs text-zinc-600">·</span>
            <span className="text-xs text-zinc-600">{section.tag}</span>
          </div>
          <h3
            className={`text-sm font-semibold leading-snug ${
              allDone ? "text-zinc-400 line-through" : "text-zinc-100"
            }`}
          >
            {section.title}
          </h3>
        </div>
        {allDone && (
          <div className="shrink-0 w-5 h-5 rounded-full bg-zinc-700 flex items-center justify-center">
            <svg
              className="w-3 h-3 text-zinc-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Progress */}
      <div className="px-5 pb-3">
        <ProgressBar value={done} max={total} />
      </div>

      {/* Checklist */}
      <ul className="px-5 pb-5 space-y-2">
        {section.items.map((item) => (
          <li key={item.id}>
            <label className="flex items-start gap-3 cursor-pointer group">
              <span className="relative mt-0.5 shrink-0">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={!!checked[item.id]}
                  onChange={() => onToggle(item.id)}
                />
                <span className="block w-4 h-4 rounded border border-zinc-700 bg-zinc-900 peer-checked:bg-zinc-700 peer-checked:border-zinc-600 transition-colors group-hover:border-zinc-500" />
                <svg
                  className="absolute inset-0 w-4 h-4 text-zinc-300 opacity-0 peer-checked:opacity-100 transition-opacity"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span
                className={`text-xs leading-relaxed transition-colors ${
                  checked[item.id]
                    ? "text-zinc-600 line-through"
                    : "text-zinc-400 group-hover:text-zinc-300"
                }`}
              >
                {item.text}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Week block ────────────────────────────────────────────────────────────────
function WeekBlock({
  week,
  checked,
  onToggle,
}: {
  week: (typeof weeks)[0];
  checked: Record<string, boolean>;
  onToggle: (id: string) => void;
}) {
  const allItems = week.sections.flatMap((s) => s.items);
  const done = allItems.filter((i) => checked[i.id]).length;
  const total = allItems.length;

  const labels = ["I", "II", "III", "IV"];

  return (
    <section>
      {/* Week header */}
      <div className="sticky top-0 z-10 bg-zinc-950/90 backdrop-blur-sm py-4 mb-5 border-b border-zinc-800">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-1">
              Week {labels[week.week - 1]}
            </p>
            <h2 className="text-lg font-semibold text-zinc-100">
              {week.title}
            </h2>
            <p className="text-xs text-zinc-500 mt-1 max-w-xl leading-relaxed">
              {week.goal}
            </p>
          </div>
          <div className="shrink-0 text-right">
            <span className="text-2xl font-bold tabular-nums text-zinc-300">
              {Math.round((done / total) * 100)}
            </span>
            <span className="text-sm text-zinc-600">%</span>
          </div>
        </div>
        <div className="mt-3">
          <ProgressBar value={done} max={total} />
        </div>
      </div>

      {/* Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {week.sections.map((section) => (
          <SectionCard
            key={section.day}
            section={section}
            checked={checked}
            onToggle={onToggle}
          />
        ))}
      </div>
    </section>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────
export default function Home() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setChecked(loadChecked());
    setMounted(true);
  }, []);

  const toggle = useCallback((id: string) => {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      saveChecked(next);
      return next;
    });
  }, []);

  const allItems = weeks.flatMap((w) => w.sections.flatMap((s) => s.items));
  const totalDone = allItems.filter((i) => checked[i.id]).length;
  const totalItems = allItems.length;
  const overallPct = Math.round((totalDone / totalItems) * 100);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Top nav */}
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <div>
            <h1 className="text-sm font-semibold text-zinc-100 tracking-tight">
              30-Day Go + AI Tracker
            </h1>
            <p className="text-xs text-zinc-600 mt-0.5">
              Golang × Applied AI · Personal progress dashboard
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="text-right hidden sm:block">
              <p className="text-xs text-zinc-600">Overall</p>
              <p className="text-lg font-bold tabular-nums text-zinc-100">
                {overallPct}
                <span className="text-sm font-normal text-zinc-500">%</span>
              </p>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-zinc-800 relative flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
                <circle
                  cx="24" cy="24" r="20"
                  fill="none" stroke="currentColor"
                  strokeWidth="2"
                  className="text-zinc-800"
                />
                <circle
                  cx="24" cy="24" r="20"
                  fill="none" stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray={`${2 * Math.PI * 20}`}
                  strokeDashoffset={`${2 * Math.PI * 20 * (1 - overallPct / 100)}`}
                  strokeLinecap="round"
                  className="text-zinc-300 transition-all duration-500"
                />
              </svg>
              <span className="text-[9px] font-bold tabular-nums text-zinc-300 z-10">
                {overallPct}%
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Pre-start checklist */}
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-2">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              Day 0
            </span>
            <span className="text-xs text-zinc-600">·</span>
            <span className="text-xs text-zinc-600">Pre-start Checklist</span>
          </div>
          <h3 className="text-sm font-semibold text-zinc-100 mb-3">
            Environment Setup
          </h3>
          <ul className="space-y-2">
            {[
              { id: "pre-1", text: "Install Go 1.21+ — verify with go version" },
              { id: "pre-2", text: "VSCode with Go extension — formatting on save enabled" },
              { id: "pre-3", text: "Get API keys (OpenAI or Anthropic) — stored in env vars" },
              { id: "pre-4", text: "Create public GitHub repo for the 30-day journey" },
              { id: "pre-5", text: "Schedule 3–5 hr daily blocks (mornings preferred)" },
              { id: "pre-6", text: "Set up Notion/spreadsheet for daily progress tracking" },
            ].map((item) => (
              <li key={item.id}>
                <label className="flex items-start gap-3 cursor-pointer group">
                  <span className="relative mt-0.5 shrink-0">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={!!checked[item.id]}
                      onChange={() => toggle(item.id)}
                    />
                    <span className="block w-4 h-4 rounded border border-zinc-700 bg-zinc-900 peer-checked:bg-zinc-700 peer-checked:border-zinc-600 transition-colors group-hover:border-zinc-500" />
                    <svg
                      className="absolute inset-0 w-4 h-4 text-zinc-300 opacity-0 peer-checked:opacity-100 transition-opacity"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className={`text-xs leading-relaxed transition-colors ${
                    checked[item.id] ? "text-zinc-600 line-through" : "text-zinc-400 group-hover:text-zinc-300"
                  }`}>
                    {item.text}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Weeks */}
      <main className="max-w-4xl mx-auto px-6 pb-24 space-y-16">
        {weeks.map((week) => (
          <WeekBlock
            key={week.week}
            week={week}
            checked={checked}
            onToggle={toggle}
          />
        ))}

        {/* Footer */}
        <div className="pt-8 border-t border-zinc-800 text-center space-y-1">
          <p className="text-xs text-zinc-600">
            {totalDone} of {totalItems} tasks complete · {overallPct}% through the journey
          </p>
          <p className="text-xs text-zinc-700">Progress is saved automatically in your browser.</p>
        </div>
      </main>
    </div>
  );
}
