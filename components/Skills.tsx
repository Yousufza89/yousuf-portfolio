import { Section, Tag } from "./ui";
import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Technical skills"
      intro="The tools I use across engineering, machine learning, quality assurance and cloud work."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((group, i) => {
          const Icon = group.icon;
          const tone =
            i % 2 === 0
              ? "border-indigo-500/30 bg-indigo-500/10 text-indigo-300"
              : "border-emerald-500/30 bg-emerald-500/10 text-emerald-300";
          return (
            <article
              key={group.title}
              className={`glass glass-hover p-6 ${group.wide ? "md:col-span-2 lg:col-span-3" : ""}`}
            >
              <div className="flex items-center gap-3">
                <span className={`grid h-10 w-10 place-items-center rounded-xl border ${tone}`}>
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold">{group.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
