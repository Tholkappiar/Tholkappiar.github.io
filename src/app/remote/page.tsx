import { MDXRemote } from "next-mdx-remote-client/rsc";
import { ThemeToggleButton } from "@/components/ToggleButton";

export default async function RemoteMdxPage() {
  const res = await fetch("http://localhost:3000/api/github/getBlog", {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div className="text-red-500 text-center mt-10">Failed to load content</div>;
  }

  const { content, data } = await res.json();

  return (
    <div className="prose dark:prose-invert mx-auto my-10 prose-a:text-primary prose-blockquote:text-muted-foreground">
      <div className="flex justify-end">
        <ThemeToggleButton />
      </div>
      <h1 className="text-foreground">{data?.title ?? "Untitled"}</h1>
      <p className="text-xs text-muted-foreground">{data?.date ?? ""}</p>
      <p className="italic text-muted-foreground">{data?.description ?? ""}</p>

      <MDXRemote source={content} options={{ mdxOptions: { format: "md" } }} />
    </div>
  );
}
