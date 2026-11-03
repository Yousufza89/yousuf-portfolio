import { Section, Tag } from "./ui";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Professional experience"
      intro="Production work across a multi-tenant SaaS platform and fintech-oriented internal products."
    >
      {/* A real timeline: entries are ordered by date, newest first. */}
      <ol className="relative ml-3 space-y-10 border-l border-white/10 pl-8">
        {EXPERIENCE.map((job) => (
          <li key={job.company} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[2.55rem] top-7 h-3 w-3 rounded-full border-2 border-indigo-400 bg-ink"
            />
            <article className="glass glass-hover p-6 sm:p-8">
              <header className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{job.role}</h3>
                  <p className="mt-1 text-emerald-400">
                    {job.company}
                    <span className="text-slate-500">
                      {" "}
                      | {job.type}
                      {job.place ? ` | ${job.place}` : ""}
                    </span>
                  </p>
                </div>
                <p className="text-sm text-slate-400 sm:pt-1">{job.period}</p>
              </header>

              <ul className="mt-5 list-disc space-y-3 pl-5 text-[15px] leading-relaxed text-slate-300 marker:text-indigo-400">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {job.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
