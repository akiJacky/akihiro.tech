import { Separator } from "@/components/ui/separator";
import "@/app/globals.css";

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
          Founder of <span className="underline">ATPrimer</span>. PdM of{" "}
          <span className="underline">xazoAI</span>.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Work</div>
        <Separator orientation="vertical" />
        <div>Contact</div>
      </div>
    </div>
  );
}
