import { MDXRemote } from "next-mdx-remote-client/rsc";
import { ThemeToggleButton } from "@/components/ToggleButton";
import { API } from "@/lib/utils";

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const res = await fetch(`${API.backend.base_path}${API.backend.getBlog(slug)}`, {
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
      <h1 className="text-foreground">{data?.title ?? ""}</h1>
      <p className="text-xs text-muted-foreground">{data?.date ?? ""}</p>
      <p className="italic text-muted-foreground">{data?.description ?? ""}</p>

      <MDXRemote source={content} options={{ mdxOptions: { format: "md" } }} />
    </div>
  );
}
