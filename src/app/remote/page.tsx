import { MDXRemote } from "next-mdx-remote-client/rsc";
import matter from "gray-matter";

export default async function RemoteMdxPage() {
  const url =
    "https://raw.githubusercontent.com/vyvir/althea/refs/heads/main/README.md";
  const res = await fetch(url, { cache: "no-store" });
  const file = await res.text();

  // parse frontmatter + content
  const { content, data } = matter(file);

  return (
    <div className="prose dark:prose-invert dark:prose-cyan mx-auto my-10">
      {/* use frontmatter data */}
      <h1>{data.title}</h1>
      <p className="text-gray-500">{data.date}</p>
      <p className="italic">{data.description}</p>

      {/* render markdown content */}
      <MDXRemote source={content} options={{ mdxOptions: { format: "md" } }} />
    </div>
  );
}
