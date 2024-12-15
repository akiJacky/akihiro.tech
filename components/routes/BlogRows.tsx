// components/routes/BlogRows.tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link"; // Linkをインポート

interface Blog {
  number: string;
  title: string;
  author: string;
  lastUpdate: string;
}

interface BlogRowsProps {
  blogs: Blog[];
}

const BlogRows = ({ blogs }: BlogRowsProps) => {
  return (
    <Table>
      <TableCaption>Blogs</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">No.</TableHead>
          <TableHead>Title</TableHead>
          <TableHead className="w-[10px]">Author</TableHead>
          <TableHead className="text-right">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {blogs.map((blog) => (
          <TableRow key={blog.number}>
            <TableCell className="font-medium">{blog.number}</TableCell>
            {/* タイトルにLinkを追加 */}
            <TableCell>
              <Link href={`/blog/${blog.number}`}>{blog.title}</Link>
            </TableCell>
            <TableCell className="font-medium text-center">
              {blog.author}
            </TableCell>
            <TableCell className="text-right">{blog.lastUpdate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default BlogRows;
