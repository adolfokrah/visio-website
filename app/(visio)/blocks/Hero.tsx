import { Block } from "visio-cms-lib/types";
// import Text from "visio-cms-lib/Text";
import BlurIn from "@/components/magicui/blur-in";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import ProductVideo from "@/components/ui/product-video";
import UsedTools from "@/components/ui/usedTools.svg";
import Image from "next/image";
import QuickStartCode from "@/components/ui/quick-start-code";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ProjectTypes } from "@/components/ui/project-types";

interface HeroProps {
  title: string;
  pageBlockId?: string;
}

const Hero: Block<HeroProps> = () => {
  return (
    <div
      className=" py-40 
     bg-gradient-to-b from-dark-900 via-[#121F1E] to-dark-900
    "
    >
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-3">
        <div className="max-w-4xl lmx-auto">
          <BlurIn
            word="Build Dynamic Web Pages Effortlessly with a Drag-and-Drop Visual CMS"
            className="z-10 text-center text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter font-satoshi text-transparent leading-[3rem] lg:leading-[5rem] bg-clip-text bg-gradient-to-br from-white via-white to-primary"
          />
          <div className="mx-auto mt-4">
            <p className="text-slate-300 font-satoshi text-center relative">
              An open-source visual CMS that lets you drag, drop, and edit React
              components.
              <br />
              —designed for developers, built for content creators.
            </p>
          </div>

          <QuickStartCode className="mx-auto mt-6"/>


          <TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
    <Image
            className="mx-auto my-6"
            src={UsedTools}
            width={200}
            height={100}
            alt="Used Tools"
          />
    </TooltipTrigger>
    <TooltipContent className="bg-white text-black font-satoshi">
      <p>Tools used</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>

          
        </div>
      </div>

      <GridPattern
        width={100}
        height={100}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
        )}
      />

      <ProductVideo />

      <ProjectTypes/>
    </div>
  );
};

Hero.Schema = {
  name: "Hero",
  id: "hero",
  defaultPropValues: {
    title: "This is a hero block",
  },
  sideEditingProps: [],
};

export default Hero;
