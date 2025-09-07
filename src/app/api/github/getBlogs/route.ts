import { API } from "@/lib/utils";
import { NextResponse } from "next/server";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = API.github.github_repo + API.github.blogs_path

export async function GET() {
  try {
    const res = await fetch(GITHUB_REPO, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json"
      }
    });

    if (!res.ok) {
      return NextResponse.json({ error: "GitHub fetch failed" }, { status: res.status });
    }

    const data = await res.json();

    // Expecting GitHub content list
    const blogs = data
      .filter((file: any) => file.name.endsWith(".md") && file.name.includes("|"))
      .map((file: any) => {
        const [title, rawEpochWithExt] = file.name.split("|");
        const epoch = Number(rawEpochWithExt.replace(".md", "").trim());

        const date = new Date(epoch * 1000).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric"
        });

        return {
          file_name: file.name,
          post_name: title.trim(),
          date
        };
      });

    return NextResponse.json(blogs);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
