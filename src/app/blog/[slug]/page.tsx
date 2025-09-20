import { MDXRemote } from "next-mdx-remote-client/rsc";
import { ThemeToggleButton } from "@/components/ToggleButton";
import { API } from "@/lib/utils";
import rehypeShiki from '@shikijs/rehype'

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug.replace(/-/g, " ");

  const res = await fetch(`${API.backend.base_path}${API.backend.getBlog(slug)}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <div className="text-red-500 text-center mt-10">Failed to load content</div>;
  }

  const { content, data } = await res.json();

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-10">
      <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert mx-auto prose-a:text-primary prose-blockquote:text-muted-foreground max-w-none">
        <div className="flex justify-end mb-4">
          <ThemeToggleButton />
        </div>
        <h1 className="text-foreground text-xl sm:text-2xl lg:text-3xl">{data?.title ?? ""}</h1>
        <p className="text-xs sm:text-sm text-muted-foreground">{data?.date ?? ""}</p>
        <p className="italic text-sm sm:text-base text-muted-foreground">{data?.description ?? ""}</p>

        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              format: "md",
              rehypePlugins: [
                [rehypeShiki, {
                  themes: {
                    light: 'catppuccin-latte',
                    dark: 'catppuccin-mocha'
                  },
                  defaultLanguage: 'js',
                  defaultColor: false,
                }],
              ]
            }
          }}
        />
      </div>
    </div>
  );
}