// app/blog/page.tsx
"use client"; // クライアントサイドコンポーネントとしてマーク

import { useEffect, useState } from "react";
import BlogRows from "@/components/routes/BlogRows";
import Pagination from "@/components/routes/Pagination";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // APIからブログデータを取得
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch(`/api/blog?page=${currentPage}`);
      const data = await response.json();
      setBlogs(data.blogs);
      setTotalBlogs(data.total);
    };

    fetchBlogs();
  }, [currentPage]);

  // ページネーションのページ切り替え
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="m-8">
      <h1 className="mb-2">Blog</h1>
      <BlogRows blogs={blogs} />
      <div className="my-8">
        <Pagination
          currentPage={currentPage}
          totalBlogs={totalBlogs}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default BlogPage;
