import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const WorkPage = () => {
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
              <BreadcrumbPage>Work</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="mt-8">
        <div className="flex justify-start flex-col sm:flex-row">
          <div className="mb-14 mr-0 sm:mr-8 max-w-72">
            <h1 className="mb-2 italic text-base">Data Science / AI</h1>
            <Separator className="my-4" />
            <img className="float-right w-10" src="/python.png"></img>
            <img className="float-right w-10" src="/r.webp"></img>
            <div className="text-sm my-4">
              As a Data Scientist, I analyze and interpret complex data to
              provide actionable insights. My role involves building predictive
              models, performing statistical analysis, and utilizing machine
              learning techniques to optimize business processes. I work closely
              with stakeholders to identify key metrics and develop custom AI
              solutions tailored to business needs. My primary tools include
              Python, TensorFlow, Keras, and SQL, along with libraries like
              Pandas and Scikit-learn for data manipulation and model building.
            </div>
          </div>
          <div className="mb-14 mr-0 sm:mr-8 max-w-72">
            <h1 className="mb-2 italic text-base">Design Engineering</h1>
            <Separator className="my-4" />
            <img className="float-right w-10" src="/react.png"></img>
            <img className="float-right w-10" src="/shopify.png"></img>
            <div className="text-sm my-4">
              As a Design Engineer, I create and implement user-centric designs
              for web and mobile applications. My work involves prototyping,
              wireframing, and collaborating with developers to ensure seamless
              integration of designs. I focus on creating intuitive interfaces
              that enhance user experience while meeting technical requirements.
              I leverage design tools like Adobe XD, Figma, and Sketch, and work
              with front-end technologies including HTML, CSS, JavaScript, and
              React to bring designs to life.
            </div>
          </div>
          <div className="mb-14 mr-0 sm:mr-8 max-w-72">
            <h1 className="mb-2 italic text-base">Mobile App Development</h1>
            <Separator className="my-4" />
            <img className="float-right w-10" src="/flutter.png"></img>
            <img className="float-right w-10" src="/swift.png"></img>
            <div className="text-sm my-4">
              In my role as a Mobile App Developer, I build and maintain
              high-quality mobile applications for both iOS and Android
              platforms. I specialize in developing user-friendly and responsive
              apps, integrating backend APIs, and optimizing performance. I use
              Flutter for cross-platform development, along with Swift and
              Kotlin for native app development. My goal is to create apps that
              provide seamless, engaging experiences while adhering to best
              practices in mobile development.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
