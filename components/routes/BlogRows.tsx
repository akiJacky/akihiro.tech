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

const blogs = [
  {
    number: "001",
    title: "Exploring New Digital Horizons",
    lastUpdate: "2024-11-10",
  },
  {
    number: "002",
    title: "Innovative Solutions for Tomorrow",
    lastUpdate: "2024-11-10",
  },
  {
    number: "003",
    title: "Creating Success Through Design",
    lastUpdate: "2024-11-10",
  },
  {
    number: "004",
    title: "Empowering Growth with Technology",
    lastUpdate: "2024-11-10",
  },
  {
    number: "005",
    title: "Transforming Ideas Into Reality",
    lastUpdate: "2024-11-10",
  },
  {
    number: "006",
    title: "Unlocking Potential Through Creativity",
    lastUpdate: "2024-11-10",
  },
  {
    number: "007",
    title: "Shaping the Future with Innovation",
    lastUpdate: "2024-11-10",
  },
];

export default function BlogRows() {
  return (
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
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right"></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
