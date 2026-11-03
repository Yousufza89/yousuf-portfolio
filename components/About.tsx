import { Section } from "./ui";
import { PROFILE } from "@/lib/data";

const FACTS = [
  { label: "Based in", value: PROFILE.location },
  { label: "Degree", value: "BS Computer Science, FAST-NUCES (June 2026)" },
  {
    label: "Open to",
    value: "Software engineering, full-stack, applied AI/ML and QA roles",
  },
  { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
];

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div className="max-w-2xl space-y-5 text-base leading-relaxed text-slate-300">
          <p>
            I’m a Computer Science graduate who likes work that crosses disciplines. At Swenta
            Globals I built multi-tenant features for a multi-branch inventory platform, connected
            a PyTorch forecasting service to its Next.js backend, and wrote Selenium automation to
            check access controls. Earlier, at Basil Innovations, I built REST APIs, designed MySQL
            schemas and kept CI/CD pipelines running for fintech-oriented internal products.
          </p>
          <p>
            I care about the whole path from a database policy to a button in the browser to the
            test that proves both still work. That is why my projects range from CNN interpretability
            and recommender systems to compilers and cloud-deployed web apps.
          </p>
        </div>

        <dl className="glass divide-y divide-white/10 self-start">
          {FACTS.map((f) => (
            <div key={f.label} className="px-5 py-4">
              <dt className="text-sm text-slate-500">{f.label}</dt>
              <dd className="mt-1 text-sm text-white">
                {f.href ? (
                  <a href={f.href} className="underline decoration-white/30 underline-offset-4 hover:decoration-indigo-400">
                    {f.value}
                  </a>
                ) : (
                  f.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
