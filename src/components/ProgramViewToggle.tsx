"use client";

import { useState } from "react";
import { ProgramRundownVertical } from "./ProgramRundownVertical";
import { ProgramRundownHorizontal } from "./ProgramRundownHorizontal";

type View = "vertical" | "horizontal";

export function ProgramViewToggle() {
  const [view, setView] = useState<View>("vertical");

  function selectLayout(next: View) {
    setView(next);
    requestAnimationFrame(() => {
      document.getElementById(`schedule-content-${next}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  return (
    <div>
      <div className="relative z-10 mb-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
        <span className="text-sm font-medium text-zinc-600">Schedule layout:</span>
        <div
          role="tablist"
          aria-label="Schedule layout"
          className="inline-flex rounded-lg border border-zinc-200 bg-zinc-100 p-1 shadow-sm"
        >
          <button
            type="button"
            role="tab"
            aria-selected={view === "vertical"}
            onClick={() => selectLayout("vertical")}
            className={`rounded-md px-5 py-2 text-sm font-semibold transition-all ${
              view === "vertical"
                ? "bg-white text-[#34657B] shadow ring-1 ring-zinc-200"
                : "text-zinc-500 hover:text-zinc-800"
            }`}
          >
            Vertical
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={view === "horizontal"}
            onClick={() => selectLayout("horizontal")}
            className={`rounded-md px-5 py-2 text-sm font-semibold transition-all ${
              view === "horizontal"
                ? "bg-white text-[#34657B] shadow ring-1 ring-zinc-200"
                : "text-zinc-500 hover:text-zinc-800"
            }`}
          >
            Horizontal
          </button>
        </div>
      </div>

      <div
        role="tabpanel"
        aria-live="polite"
        className={`mb-6 rounded-xl border px-4 py-3 sm:px-5 sm:py-4 ${
          view === "horizontal"
            ? "border-teal-200 bg-teal-50 text-teal-900"
            : "border-violet-200 bg-violet-50 text-violet-900"
        }`}
      >
        <p className="text-sm font-semibold">
          {view === "horizontal"
            ? "Horizontal view — schedule table (scroll sideways on smaller screens)"
            : "Vertical view — card layout, best for reading on phone"}
        </p>
      </div>

      <div
        id={`schedule-content-${view}`}
        className="scroll-mt-28"
      >
        {view === "vertical" ? (
          <ProgramRundownVertical />
        ) : (
          <ProgramRundownHorizontal />
        )}
      </div>
    </div>
  );
}
