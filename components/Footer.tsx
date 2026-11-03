import { GithubIcon, LinkedinIcon } from "./icons";
import { PROFILE } from "@/lib/data";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 text-sm text-slate-500 sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </p>
        <p className="text-center">Built with Next.js, TypeScript and Tailwind CSS</p>
        <div className="flex items-center gap-4 text-slate-400">
          <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="hover:text-white">
            <Mail size={18} />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className="hover:text-white">
            <LinkedinIcon width={18} height={18} />
          </a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className="hover:text-white">
            <GithubIcon width={18} height={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
