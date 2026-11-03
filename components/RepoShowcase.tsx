"use client";

import { useMemo, useState } from "react";
import { ExternalLink, GitFork, Search, Star } from "lucide-react";
import { GithubIcon } from "./icons";
import { Section, Tag } from "./ui";
import { CATEGORIES, GITHUB_USER, type Category, type Repo } from "@/lib/repos";

type Filter = "All" | Category;
const FILTERS: Filter[] = ["All", ...CATEGORIES];

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  Python: "#3572a5",
  "C++": "#f34b7d",
  "C#": "#178600",
  CSS: "#7c5cbf",
  "Jupyter Notebook": "#da5b0b",
};

export default function RepoShowcase({ repos }: { repos: Repo[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const result: Record<string, number> = { All: repos.length };
    CATEGORIES.forEach((c) => {
      result[c] = repos.filter((r) => r.category === c).length;
    });
    return result;
  }, [repos]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return repos.filter((r) => {
      if (filter !== "All" && r.category !== filter) return false;
      if (!q) return true;
      return [r.name, r.description, r.language ?? "", r.category, ...r.tags]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [repos, filter, query]);

  const categoryIsEmpty = filter !== "All" && counts[filter] === 0;

  return (
    <Section
      id="repos"
      title="All GitHub repositories"
      intro="Every public repository, from coursework to production-style apps. Search by name, language or technology, or filter by area."
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label="Filter repositories by area" className="flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const selected = f === filter;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={selected}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  selected
                    ? "border-indigo-400/60 bg-indigo-500/20 text-white"
                    : "border-white/10 bg-white/5 text-slate-400 hover:text-white"
                }`}
              >
                {f}
                <span className={`ml-2 text-xs ${selected ? "text-indigo-200" : "text-slate-500"}`}>
                  {counts[f]}
                </span>
              </button>
            );
          })}
        </div>

        <label className="relative block w-full lg:w-72">
          <span className="sr-only">Search repositories</span>
          <Search
            size={16}
            aria-hidden="true"
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search repositories"
            className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-indigo-400/60 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
          />
        </label>
      </div>

      <p aria-live="polite" className="mt-6 text-sm text-slate-500">
        Showing {visible.length} of {repos.length} repositories
      </p>

      {visible.length > 0 ? (
        <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((r) => (
            <li key={r.name} className="glass glass-hover flex flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="break-words text-base font-semibold leading-snug">
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-300"
                  >
                    {r.name}
                  </a>
                </h3>
              </div>

              <p className="mt-1 text-xs text-slate-500">{r.category}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">{r.description}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {r.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                <div className="flex items-center gap-4 text-slate-400">
                  {r.language && (
                    <span className="flex items-center gap-1.5">
                      <span
                        aria-hidden="true"
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: LANGUAGE_COLORS[r.language] ?? "#64748b" }}
                      />
                      {r.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1" aria-label={`${r.stars} stars`}>
                    <Star size={14} aria-hidden="true" /> {r.stars}
                  </span>
                  <span className="flex items-center gap-1" aria-label={`${r.forks} forks`}>
                    <GitFork size={14} aria-hidden="true" /> {r.forks}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {r.demo && (
                    <a
                      href={r.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${r.name} live demo (opens in a new tab)`}
                      className="text-emerald-400 hover:text-emerald-300"
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                    </a>
                  )}
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${r.name} on GitHub (opens in a new tab)`}
                    className="text-white hover:text-indigo-300"
                  >
                    <GithubIcon width={18} height={18} />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="glass mt-4 px-6 py-12 text-center">
          <p className="text-base text-white">
            {categoryIsEmpty && !query
              ? `No public repositories in ${filter} yet.`
              : "No repositories match your search."}
          </p>
          <p className="mt-2 text-sm text-slate-400">
            {categoryIsEmpty && !query
              ? "Check the full profile on GitHub or pick another area."
              : "Try a different keyword, or clear the filter."}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setFilter("All");
                setQuery("");
              }}
              className="btn-ghost"
            >
              Show all repositories
            </button>
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <GithubIcon width={16} height={16} /> Open GitHub profile
            </a>
          </div>
        </div>
      )}
    </Section>
  );
}
