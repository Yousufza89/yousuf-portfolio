import { ExternalLink } from "lucide-react";
import { Section, Tag } from "./ui";
import { GithubIcon } from "./icons";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Flagship projects"
      intro="Seven projects that show the range: machine learning, cloud, full-stack, compilers and testing."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
        {PROJECTS.map((p) => {
          const Icon = p.icon;
          return (
            <article
              key={p.title}
              className={`glass glass-hover flex flex-col p-6 ${
                p.featured ? "lg:col-span-6" : "lg:col-span-2"
              } ${p.featured ? "md:col-span-2" : ""}`}
            >
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-300">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{p.kind}</p>
                </div>
              </div>

              <p
                className={`mt-5 text-[15px] leading-relaxed text-slate-300 ${
                  p.featured ? "max-w-3xl" : ""
                }`}
              >
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>

              {(p.repo || p.demo) && (
                <div className="mt-6 flex flex-wrap gap-4 pt-1 text-sm font-medium">
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} on GitHub (opens in a new tab)`}
                      className="inline-flex items-center gap-2 text-white hover:text-indigo-300"
                    >
                      <GithubIcon width={16} height={16} /> Source on GitHub
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} live demo (opens in a new tab)`}
                      className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300"
                    >
                      <ExternalLink size={16} aria-hidden="true" /> Live demo
                    </a>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </Section>
  );
}
