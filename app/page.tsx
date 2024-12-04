import React from "react";
import { Introduction } from "@/components/common/Introduction";
// import { Introduction } from "@/features/common/Introduction";
// import { Separator } from "@/components/ui/separator";

const HomePage = () => {
  return (
    <div>
      <div className="my-10 mx-8 max-w-64">
        <Introduction />
      </div>
      {/* <div className="my-10 mx-8 max-w-64">
        <div className="space-y-1">
          <h4 className="text-base font-medium leading-none mb-3">
            Akihiro Nakano
          </h4>
          <p className="text-sm text-muted-foreground">
            Solution Architect, Data Scientist. Founder of ATPrimer. PdM of
            xazoAI.
          </p>
        </div>
        <Separator className="my-4" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
