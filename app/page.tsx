import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import RepoShowcase from "@/components/RepoShowcase";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { getRepos } from "@/lib/github";

// Rebuild the page at most once an hour so star/fork counts stay fresh.
export const revalidate = 3600;

export default async function Home() {
  const repos = await getRepos();

  return (
    <>
      <Hero repoCount={repos.length} />
      <About />
      <Experience />
      <Projects />
      <RepoShowcase repos={repos} />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
