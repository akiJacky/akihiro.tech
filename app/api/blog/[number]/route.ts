// app/api/blog/[number]/route.ts
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// ダミーデータ（またはデータベースから取得する処理）を返す
const blogs = [
  { number: "001", title: "Exploring New Digital Horizons", lastUpdate: "2024-11-10", content: "As the digital landscape continues to evolve, businesses are exploring new opportunities for growth and innovation. Embracing new technologies is essential for staying ahead in a competitive market. This journey toward digital transformation opens up exciting possibilities for entrepreneurs and leaders alike." },
  { number: "002", title: "Innovative Solutions for Tomorrow", lastUpdate: "2024-11-11", content: "Innovation is the key to success in the modern world. By adopting creative solutions, businesses can address the challenges of today while preparing for the uncertainties of tomorrow. Leveraging new technologies and agile strategies will shape the future, bringing efficiency and improved outcomes for organizations across industries." },
  { number: "003", title: "Creating Success Through Design", lastUpdate: "2024-11-12", content: "Design plays a crucial role in business success, from user experience to brand identity. A well-crafted design strategy can help companies stand out, engage their audience, and drive growth. The intersection of creativity and strategy is where businesses can unlock their true potential and create lasting impressions in the market." },
  { number: "004", title: "Empowering Growth with Technology", lastUpdate: "2024-11-13", content: "Technology is a powerful enabler of growth, allowing businesses to streamline operations, enhance customer experiences, and create new revenue streams. By adopting the latest tools and platforms, companies can gain a competitive edge and accelerate their path to success, empowering teams to perform at their highest level." },
  { number: "005", title: "Transforming Ideas Into Reality", lastUpdate: "2024-11-14", content: "The ability to turn ideas into tangible outcomes is a cornerstone of entrepreneurship. Successful businesses understand the importance of translating innovative concepts into real-world solutions. This process involves collaboration, dedication, and the right resources to bring visionary ideas to life and make a meaningful impact in the world." },
  { number: "006", title: "Unlocking Potential Through Creativity", lastUpdate: "2024-11-15", content: "Creativity unlocks immense potential, offering fresh perspectives and innovative solutions to complex challenges. By fostering a culture of creativity within an organization, businesses can develop new products, services, and strategies that resonate with customers, driving growth and long-term success." },
  { number: "007", title: "Shaping the Future with Innovation", lastUpdate: "2024-11-16", content: "Innovation is at the heart of progress. By pushing boundaries and challenging traditional norms, businesses can redefine industries, create new markets, and deliver unparalleled value to their customers. The future belongs to those who embrace change and harness the power of innovation to drive meaningful transformation." },
  { number: "008", title: "Redefining the Future of Business", lastUpdate: "2024-11-16", content: "The future of business is being reshaped by new technologies, evolving customer expectations, and shifting market dynamics. To remain competitive, businesses must redefine their strategies, embrace digital transformation, and remain agile in the face of change. Those who adapt will thrive in a rapidly changing world." },
  { number: "009", title: "Elevating Ideas to New Heights", lastUpdate: "2024-11-17", content: "Great ideas have the potential to change the world, but they need the right environment to grow and succeed. By fostering a culture that encourages innovation and risk-taking, businesses can elevate their ideas to new heights. This journey involves constant learning, adapting, and embracing new possibilities to drive success." },
  { number: "010", title: "Driving Change with Smart Solutions", lastUpdate: "2024-11-18", content: "Smart solutions are the driving force behind change in today’s fast-paced world. By leveraging technology and data-driven strategies, businesses can make more informed decisions, improve efficiencies, and deliver enhanced value to their customers. Adopting smart solutions enables organizations to stay ahead of the competition and thrive in a dynamic marketplace." },
  { number: "011", title: "Crafting the Path to Success", lastUpdate: "2024-11-19", content: "Success doesn’t happen overnight; it requires careful planning, execution, and resilience. By crafting a clear path toward achieving goals, businesses can navigate challenges with confidence. A strategic approach to growth allows organizations to stay focused on their vision while adapting to changes in the market." },
  { number: "012", title: "Innovating for a Better Tomorrow", lastUpdate: "2024-11-20", content: "Innovation is the cornerstone of progress. By embracing new ideas, businesses can create solutions that improve lives, enhance productivity, and solve pressing global challenges. Through thoughtful innovation, organizations can contribute to a better tomorrow, making a lasting impact on the world and driving sustainable success." },
  { number: "013", title: "Building Tomorrow’s Digital World", lastUpdate: "2024-11-21", content: "The digital world of tomorrow will be shaped by emerging technologies such as AI, blockchain, and the Internet of Things. Businesses that invest in these technologies today will be well-positioned to lead in the future. By building a strong digital foundation, organizations can stay ahead of the curve and unlock new opportunities for growth." },
  { number: "014", title: "Unlocking the Power of Innovation", lastUpdate: "2024-11-22", content: "Innovation is a powerful tool for unlocking new opportunities and overcoming challenges. By fostering a culture that encourages creative thinking and problem-solving, businesses can develop groundbreaking solutions that not only improve their products and services but also create new value for customers." },
  { number: "015", title: "Transforming Ideas Into Impact", lastUpdate: "2024-11-23", content: "Turning ideas into impact requires a combination of creativity, resources, and execution. The most successful businesses are those that can take a visionary concept and transform it into a product or service that delivers real-world results. This process involves collaboration, iteration, and a commitment to making a difference." },
  { number: "016", title: "Empowering Businesses to Thrive", lastUpdate: "2024-11-24", content: "To thrive in today’s competitive landscape, businesses need the right tools, strategies, and mindset. By empowering their teams and fostering a culture of innovation, organizations can unlock their full potential and drive long-term success. The key to thriving is adaptability and continuous improvement in every aspect of the business." },
  { number: "017", title: "Turning Vision Into Reality", lastUpdate: "2024-11-25", content: "Vision without action is merely a dream. The most successful organizations are those that can take a clear vision and transform it into reality. This involves setting clear goals, executing with precision, and remaining focused on the long-term objectives. Turning vision into reality requires determination, collaboration, and a relentless pursuit of excellence." }
];

export async function GET(req: NextRequest) {
  // URLパラメータの `number` を取得
  const number = req.nextUrl.pathname.split("/").pop();

  if (!number) {
    return NextResponse.json({ error: "Blog number is missing" }, { status: 400 });
  }

  const blog = blogs.find((blog) => blog.number === number); // ダミーデータから一致するブログを取得

  if (!blog) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  return NextResponse.json(blog);
}