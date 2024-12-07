// app/api/blog/route.ts
import { NextResponse } from 'next/server';

const blogs = [
  { number: "001", title: "Exploring New Digital Horizons", lastUpdate: "2024-11-10" },
  { number: "002", title: "Innovative Solutions for Tomorrow", lastUpdate: "2024-11-11" },
  { number: "003", title: "Creating Success Through Design", lastUpdate: "2024-11-12" },
  { number: "004", title: "Empowering Growth with Technology", lastUpdate: "2024-11-13" },
  { number: "005", title: "Transforming Ideas Into Reality", lastUpdate: "2024-11-14" },
  { number: "006", title: "Unlocking Potential Through Creativity", lastUpdate: "2024-11-15" },
  { number: "007", title: "Shaping the Future with Innovation", lastUpdate: "2024-11-16" },
  { number: "008", title: "Redefining the Future of Business", lastUpdate: "2024-11-16" },
  { number: "009", title: "Elevating Ideas to New Heights", lastUpdate: "2024-11-17" },
  { number: "010", title: "Driving Change with Smart Solutions", lastUpdate: "2024-11-18" },
  { number: "011", title: "Crafting the Path to Success", lastUpdate: "2024-11-19" },
  { number: "012", title: "Innovating for a Better Tomorrow", lastUpdate: "2024-11-20" },
  { number: "013", title: "Building Tomorrow’s Digital World", lastUpdate: "2024-11-21" },
  { number: "014", title: "Unlocking the Power of Innovation", lastUpdate: "2024-11-22" },
  { number: "015", title: "Transforming Ideas Into Impact", lastUpdate: "2024-11-23" },
  { number: "016", title: "Empowering Businesses to Thrive", lastUpdate: "2024-11-24" },
  { number: "017", title: "Turning Vision Into Reality", lastUpdate: "2024-11-25" },
];

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get("page") || 1);
  const perPage = 8;
  const startIndex = (page - 1) * perPage;
  const selectedBlogs = blogs.slice(startIndex, startIndex + perPage);

  return NextResponse.json({ blogs: selectedBlogs, total: blogs.length });
}
