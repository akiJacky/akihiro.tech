import { NextResponse } from 'next/server';

interface Blog {
    number: string;
    title: string;
    lastUpdate: string;
  }
  
  const blogs: Blog[] = [
    {
      number: "001",
      title: "Exploring New Digital Horizons",
      lastUpdate: "2024-11-10",
    },
    {
      number: "002",
      title: "Innovative Solutions for Tomorrow",
      lastUpdate: "2024-11-11",
    },
    {
      number: "003",
      title: "Creating Success Through Design",
      lastUpdate: "2024-11-12",
    },
    {
      number: "004",
      title: "Empowering Growth with Technology",
      lastUpdate: "2024-11-13",
    },
    {
      number: "005",
      title: "Transforming Ideas Into Reality",
      lastUpdate: "2024-11-14",
    },
    {
      number: "006",
      title: "Unlocking Potential Through Creativity",
      lastUpdate: "2024-11-15",
    },
    {
      number: "007",
      title: "Shaping the Future with Innovation",
      lastUpdate: "2024-11-16",
    },
  ];
  
  export async function GET() {
    return NextResponse.json(blogs);
  }
  