import { MDXRemote } from "next-mdx-remote-client/rsc";
import matter from "gray-matter";
import { ThemeToggleButton } from "@/components/ToggleButton";

export default async function RemoteMdxPage() {
  const url = "https://raw.githubusercontent.com/vyvir/althea/refs/heads/main/README.md";
  const res = await fetch(url, { cache: "no-store" });
  const file = await res.text();

  // parse frontmatter + content
  const { content, data } = matter(file);

  return (
    <div className="prose dark:prose-invert mx-auto my-10 prose-a:text-primary prose-blockquote:text-muted-foreground">
      <div className="flex justify-end">
        <ThemeToggleButton />
      </div>
      <h1 className="text-foreground">{data.title}</h1>
      <p className="text-xs text-muted-foreground">{data.date}</p>
      <p className="italic text-muted-foreground">{data.description}</p>

      {/* render markdown content */}
      <MDXRemote source={content} options={{ mdxOptions: { format: "md" } }} />
    </div>
  );
}