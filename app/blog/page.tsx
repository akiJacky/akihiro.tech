// app/blog/page.tsx
"use client"; // クライアントサイドコンポーネントとしてマーク

import { useEffect, useState } from "react";
import BlogRows from "@/components/routes/BlogRows";
import Pagination from "@/components/routes/Pagination";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
      <div className="mb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Blog</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
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
