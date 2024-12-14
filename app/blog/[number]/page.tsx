// app/blog/[number]/page.tsx
"use client"; // クライアントサイドコンポーネントとしてマーク

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // `useRouter`ではなく、これを使います
import { Separator } from "@/components/ui/separator";

// ブログの型を定義
interface Blog {
  number: string;
  title: string;
  lastUpdate: string;
  content: string;
}

const BlogDetailPage = () => {
  const pathname = usePathname(); // パス名を取得

  const number = pathname.split("/").pop(); // パス名から番号を抽出

  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    if (number) {
      const fetchBlogDetail = async () => {
        const response = await fetch(`/api/blog/${number}`);
        const data = await response.json();
        setBlog(data);
      };
      fetchBlogDetail();
    }
  }, [number]);

  if (!blog) return <div className="m-8 text-sm">Loading...</div>;

  return (
    <div className="m-8">
      <h1 className="mb-2 italic">{blog.title}</h1>
      <p className="text-xs text-muted-foreground">
        {new Date(blog.lastUpdate).toLocaleDateString()}
      </p>
      <Separator className="my-4" />
      <div className="text-sm my-4">{blog.content}</div>
    </div>
  );
};

export default BlogDetailPage;
