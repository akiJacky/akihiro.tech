"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Blogの型定義
interface Blog {
  number: string;
  title: string;
  lastUpdate: string;
}

const fetchBlogs = async () => {
  const response = await fetch("/api/blog");
  const data = await response.json();
  return data;
};

const BlogPage = () => {
  // useStateに型を指定
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const getBlogs = async () => {
      const blogData = await fetchBlogs();
      setBlogs(blogData);
    };
    getBlogs();
  }, []);

  return (
    <div>
      <Table>
        <TableCaption>Blogs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No.</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-right">Update time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs.map((blog) => (
            <TableRow key={blog.number}>
              <TableCell className="font-medium">{blog.number}</TableCell>
              <TableCell>{blog.title}</TableCell>
              <TableCell className="text-right">{blog.lastUpdate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BlogPage;
