import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ContactPage = () => {
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
              <BreadcrumbPage>Contact</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="m-2 text-sm">
        <p>
          Email:{" "}
          <a
            href="mailto://atprimer.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-sky-500"
          >
            akihiro@atprimer.com
          </a>
        </p>
        <br />
      </div>
    </div>
  );
};

export default ContactPage;
