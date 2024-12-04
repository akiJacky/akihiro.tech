import { Separator } from "@/components/ui/separator";
import "@/app/globals.css";
import Link from "next/link";

export function Introduction() {
  return (
    <div>
      <div className="space-y-1">
        <h4 className="text-base font-medium leading-none mb-4">
          Akihiro Nakano
        </h4>
        <p className="text-sm text-muted-foreground">
          Solution Architect, Data Scientist.
          <br />
          Founder of{" "}
          <a
            href="https://atprimer.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            ATPrimer
          </a>
          . PdM of <span className="underline">xazoAI</span>.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <Link href="/blog" className="block">
          Blog
        </Link>
        <Separator orientation="vertical" />
        <Link href="/work" className="block">
          Work
        </Link>
        <Separator orientation="vertical" />
        <Link href="/contact" className="block">
          Contact
        </Link>
      </div>
    </div>
  );
}
