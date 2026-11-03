import { GraduationCap, School, Trophy } from "lucide-react";
import { Section, Tag } from "./ui";
import { ACTIVITIES, COURSEWORK } from "@/lib/data";

export default function Education() {
  return (
    <Section id="education" title="Education & background">
      <div className="grid gap-5 lg:grid-cols-3">
        <article className="glass glass-hover p-6 sm:p-8 lg:col-span-2">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-300">
              <GraduationCap size={22} aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-lg font-semibold leading-snug">
                National University of Computer and Emerging Sciences (FAST-NUCES)
              </h3>
              <p className="mt-1 text-sm text-slate-400">Karachi, Pakistan</p>
            </div>
          </div>
          <p className="mt-5 text-emerald-400">
            Bachelor of Science in Computer Science (BS CS)
            <span className="text-slate-500"> | Graduated June 2026</span>
          </p>
          <h4 className="mt-6 text-sm font-semibold text-white">Relevant coursework</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {COURSEWORK.map((c) => (
              <li key={c}>
                <Tag>{c}</Tag>
              </li>
            ))}
          </ul>
        </article>

        <article className="glass glass-hover self-start p-6 sm:p-8">
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300">
            <School size={22} aria-hidden="true" />
          </span>
          <h3 className="mt-5 text-lg font-semibold leading-snug">BVS Parsi High School</h3>
          <p className="mt-1 text-sm text-slate-400">Matriculation, Computer Science | May 2020</p>
        </article>

        <article className="glass glass-hover flex items-start gap-4 p-6 sm:p-8 lg:col-span-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-300">
            <Trophy size={22} aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-lg font-semibold leading-snug">Activities</h3>
            <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-slate-300">{ACTIVITIES}</p>
          </div>
        </article>
      </div>
    </Section>
  );
}
