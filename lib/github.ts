import { GITHUB_USER, repos, type Repo } from "./repos";

interface ApiRepo {
  name: string;
  stargazers_count: number;
  forks_count: number;
}

/**
 * Returns the repo list with live star/fork counts merged in.
 * Revalidated hourly. Any failure (rate limit, offline build) falls back to the
 * static snapshot, so the build and the page never break on a GitHub hiccup.
 * Optional: set GITHUB_TOKEN in Vercel to lift the unauthenticated rate limit.
 */
export async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(5000),
      },
    );
    if (!res.ok) return repos;

    const live = (await res.json()) as ApiRepo[];
    const byName = new Map(live.map((r) => [r.name.toLowerCase(), r]));

    return repos.map((repo) => {
      const match = byName.get(repo.name.toLowerCase());
      return match
        ? { ...repo, stars: match.stargazers_count, forks: match.forks_count }
        : repo;
    });
  } catch {
    return repos;
  }
}
