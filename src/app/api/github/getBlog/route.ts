import { NextResponse } from 'next/server';
import matter from 'gray-matter';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const RAW_URL =
  'https://raw.githubusercontent.com/vyvir/althea/main/README.md';

export async function GET() {
  try {
    const res = await fetch(RAW_URL, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3.raw'
      },
      cache: 'no-store'
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch markdown' }, { status: res.status });
    }

    const file = await res.text();
    const { content, data } = matter(file);

    return NextResponse.json({ content, data });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
