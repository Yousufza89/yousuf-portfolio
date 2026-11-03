"use client";

import { useEffect, useState, type KeyboardEvent } from "react";
import {
  ArrowDown,
  BrainCircuit,
  Briefcase,
  Download,
  FolderGit2,
  GraduationCap,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { GithubIcon } from "./icons";
import { PROFILE } from "@/lib/data";

/**
 * The hero's one memorable element: a three-lens panel showing the same
 * system from three disciplines. The snippets are simplified sketches of
 * patterns from my work, not production code.
 */
const LENSES = [
  {
    id: "build",
    label: "Build",
    icon: Layers,
    file: "lib/with-tenant.ts",
    title: "Tenant isolation enforced in the database",
    code: [
      "// Every query runs inside a tenant-scoped transaction",
      "export async function withTenant<T>(tenantId: string, run: (tx: Tx) => Promise<T>) {",
      "  return db.transaction(async (tx) => {",
      "    await tx.execute(sql`select set_config('app.tenant_id', ${tenantId}, true)`);",
      "    return run(tx); // Row-Level Security does the filtering",
      "  });",
      "}",
    ],
  },
  {
    id: "predict",
    label: "Predict",
    icon: BrainCircuit,
    file: "forecast/restock.py",
    title: "Per-branch restocking forecasts",
    code: [
      "# Forecast served to the Next.js backend for each branch",
      "model.eval()",
      "with torch.no_grad():",
      "    forecast = model(history_window)   # next-period demand",
      "",
      "reorder_qty = max(0, forecast - on_hand)",
    ],
  },
  {
    id: "verify",
    label: "Verify",
    icon: ShieldCheck,
    file: "tests/access.spec.ts",
    title: "Access rules checked end to end",
    code: [
      "// A branch admin must never reach another branch's data",
      'test("branch admin is blocked from another branch", async ({ page }) => {',
      '  await loginAs(page, "branch-admin");',
      '  await page.goto("/branches/other/orders");',
      '  await expect(page.getByText("Access denied")).toBeVisible();',
      "});",
    ],
  },
] as const;

export default function Hero({ repoCount }: { repoCount: number }) {
  const [greeting, setGreeting] = useState("Hello");
  const [lens, setLens] = useState(0);

  // Computed after mount so server and client markup always match.
  useEffect(() => {
    const hour = new Date().getHours();
    setGreeting(hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening");
  }, []);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" ? 1 : -1;
    const next = (lens + dir + LENSES.length) % LENSES.length;
    setLens(next);
    document.getElementById(`lens-tab-${LENSES[next].id}`)?.focus();
  };

  const current = LENSES[lens];
  const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-indigo-500/15 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="animate-rise text-base text-slate-400" style={delay(0)}>
            {greeting}, I’m {PROFILE.name}.
          </p>
          <h1
            className="animate-rise mt-4 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            style={delay(80)}
          >
            {PROFILE.headline}
          </h1>
          <p
            className="animate-rise mt-4 font-display text-lg text-emerald-400 sm:text-xl"
            style={delay(160)}
          >
            {PROFILE.subheadline}
          </p>
          <p
            className="animate-rise mt-6 max-w-xl text-base leading-relaxed text-slate-300"
            style={delay(240)}
          >
            A Computer Science graduate of FAST-NUCES (June 2026) who moves comfortably between
            shipping full-stack features, applying machine learning to real data, and writing the
            automated tests that keep both honest.
          </p>

          <div className="animate-rise mt-8 flex flex-wrap gap-3" style={delay(320)}>
            <a href="#projects" className="btn-primary">
              Explore Work <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href="#repos" className="btn-ghost">
              <GithubIcon width={16} height={16} /> View All Repos
            </a>
            <a href={PROFILE.resume} download className="btn-ghost">
              <Download size={16} aria-hidden="true" /> Download Resume
            </a>
          </div>

          <ul className="animate-rise mt-10 flex flex-wrap gap-3 text-sm" style={delay(400)}>
            <li className="glass flex items-center gap-3 px-4 py-3">
              <FolderGit2 size={18} className="text-indigo-400" aria-hidden="true" />
              <span>
                <b className="font-semibold text-white">{repoCount}</b> public GitHub repositories
              </span>
            </li>
            <li className="glass flex items-center gap-3 px-4 py-3">
              <Briefcase size={18} className="text-emerald-400" aria-hidden="true" />
              <span>Production experience at Swenta Globals &amp; Basil Innovations</span>
            </li>
            <li className="glass flex items-center gap-3 px-4 py-3">
              <GraduationCap size={18} className="text-indigo-400" aria-hidden="true" />
              <span>FAST-NUCES CS graduate</span>
            </li>
          </ul>
        </div>

        <div className="animate-rise" style={delay(280)}>
          <div className="glass overflow-hidden">
            <div
              role="tablist"
              aria-label="Three ways I work on the same system"
              onKeyDown={onKeyDown}
              className="flex border-b border-white/10"
            >
              {LENSES.map((l, i) => {
                const Icon = l.icon;
                const selected = i === lens;
                return (
                  <button
                    key={l.id}
                    id={`lens-tab-${l.id}`}
                    role="tab"
                    type="button"
                    aria-selected={selected}
                    aria-controls="lens-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setLens(i)}
                    className={`flex flex-1 items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition ${
                      selected
                        ? "bg-white/10 text-white shadow-[inset_0_-2px_0_#6366F1]"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Icon size={16} aria-hidden="true" />
                    {l.label}
                  </button>
                );
              })}
            </div>

            <div
              id="lens-panel"
              role="tabpanel"
              aria-labelledby={`lens-tab-${current.id}`}
              className="p-5"
            >
              <p className="font-display text-base font-medium text-white">{current.title}</p>
              <p className="mt-1 text-xs text-slate-500">{current.file}</p>
              <pre className="mt-4 overflow-x-auto rounded-xl bg-black/30 p-4 text-[13px] leading-6">
                <code>
                  {current.code.map((line, i) => (
                    <span
                      key={i}
                      className={`block whitespace-pre ${
                        line.trimStart().startsWith("//") || line.trimStart().startsWith("#")
                          ? "text-slate-500"
                          : "text-slate-200"
                      }`}
                    >
                      {line || " "}
                    </span>
                  ))}
                </code>
              </pre>
              <p className="mt-3 text-xs text-slate-500">
                Simplified sketch of a pattern from my work, not production code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
