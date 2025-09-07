import { NextRequest, NextResponse } from "next/server";
import matter from "gray-matter";
import { API } from "@/lib/utils";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  const fileName = decodeURIComponent(slug) + ".md";

  const githubApiUrl = `${API.github.github_repo}${API.github.blogs_path}${fileName}`;

  try {
    const res = await fetch(githubApiUrl, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3.raw",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`GitHub fetch error (${res.status}): ${await res.text()}`);
      return NextResponse.json(
        { error: "Failed to fetch blog from GitHub", status: res.status },
        { status: res.status }
      );
    }

    const file = await res.text();
    const { content, data } = matter(file);

    return NextResponse.json({ content, data });
  } catch (err) {
    console.error("Error in getBlog API:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
