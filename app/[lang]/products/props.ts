import { GetStaticProps } from "next";

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getStaticProps = (async (context) => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();
  return { props: { repo } };
}) satisfies GetStaticProps<{
  repo: Repo;
}>;
