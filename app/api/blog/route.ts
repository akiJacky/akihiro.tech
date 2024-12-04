// app/api/blog/route.ts
import { NextResponse } from 'next/server';

const blogs = [
  { number: "001", title: "Exploring New Digital Horizons", lastUpdate: "2024-11-10" },
  { number: "002", title: "Innovative Solutions for Tomorrow", lastUpdate: "2024-11-10" },
  { number: "003", title: "Creating Success Through Design", lastUpdate: "2024-11-10" },
  { number: "004", title: "Empowering Growth with Technology", lastUpdate: "2024-11-10" },
  { number: "005", title: "Transforming Ideas Into Reality", lastUpdate: "2024-11-10" },
  { number: "006", title: "Unlocking Potential Through Creativity", lastUpdate: "2024-11-10" },
  { number: "007", title: "Shaping the Future with Innovation", lastUpdate: "2024-11-10" },
];

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get("page") || 1);
  const perPage = 5;
  const startIndex = (page - 1) * perPage;
  const selectedBlogs = blogs.slice(startIndex, startIndex + perPage);

  return NextResponse.json({ blogs: selectedBlogs, total: blogs.length });
}
