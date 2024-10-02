"use client";
import { Block, MediaFile } from "visio-cms-lib/types";
import Text from "visio-cms-lib/Text";
import BlurIn from "@/components/magicui/blur-in";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import ProductVideo from "@/components/ui/product-video";
import Image from "next/image";
import VisioImage from "visio-cms-lib/Image";
import QuickStartCode from "@/components/ui/quick-start-code";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ProjectTypes } from "@/components/ui/project-types";
import { motion } from "framer-motion";
interface HeroProps {
  title: string;
  subtitle: string;
  quickStartCode: string;
  productVideoImageMobile: MediaFile;
  productVideoUrl: string;
  pageBlockId?: string;
  usedTools: MediaFile;
}

const Hero: Block<HeroProps> = ({
  title,
  subtitle,
  pageBlockId = "",
  quickStartCode,
  productVideoImageMobile,
  productVideoUrl,
  usedTools,
}) => {
  return (
    <div
      className=" pt-20 pb-5 md:pt-40 
     bg-gradient-to-b from-dark-900 via-[#121F1E] to-dark-900
    "
    >
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-3">
        <div className="max-w-4xl lmx-auto">
          <BlurIn
            word={title}
            className="z-10 text-center text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter font-satoshi text-transparent leading-[3rem] lg:leading-[5rem] bg-clip-text bg-gradient-to-br from-white via-white to-primary"
          />
          <div className="mx-auto mt-4 max-w-[600px] ">
            <motion.p
              initial={{ opacity: 0, y: 3 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-slate-300 font-satoshi text-center relative"
            >
              <Text
                propName="subtitle"
                pageBlockId={pageBlockId}
                defaultValue={subtitle}
              />
            </motion.p>
          </div>

          <QuickStartCode
            className="mx-auto mt-6 mb-3"
            code={quickStartCode}
            pageBlockId={pageBlockId}
          />

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="w-[200px] mx-auto">
                  <VisioImage
                    pageBlockId={pageBlockId}
                    propName="usedTools"
                    defaultValue={usedTools}
                    wrapperClassName="m-auto w-max min-h-[40px] min-w-[40px]"
                    renderImage={(image) => (
                      <>
                        {!image?.imagePublicUrl ? null : (
                          <Image
                            className="mx-auto my-6"
                            src={image.imagePublicUrl}
                            width={200}
                            height={80}
                            alt="Used Tools"
                            unoptimized
                          />
                        )}
                      </>
                    )}
                  />
                </div>
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

      <ProductVideo image={productVideoImageMobile} video={productVideoUrl} />

      <ProjectTypes />
    </div>
  );
};

Hero.Schema = {
  name: "Hero",
  id: "hero",
  defaultPropValues: {
    title:
      "Build Dynamic Web Pages Effortlessly with a Drag-and-Drop Visual CMS",
    subtitle: ` An open-source visual CMS that lets you drag, drop, and edit React
              components.—designed for developers, built for content creators.`,
    quickStartCode: "create-visio-app@latest",
    productVideoImageMobile: {
      mediaHash: undefined,
      altText: "Product video image mobile",
      width: 0,
      height: 0,
    },
    usedTools: {
      mediaHash: undefined,
      altText: "Used tools",
      width: 0,
      height: 0,
    },
    productVideoUrl:
      "https://rruekjolwsyfvgvbcvjv.supabase.co/storage/v1/object/public/media/video.mp4?t=2024-09-17T09%3A17%3A22.441Z",
  },
  sideEditingProps: [
    {
      propName: "title",
      label: "Title",
      type: "text",
    },
    {
      propName: "productVideoImageMobile",
      label: "Background Image on mobile",
      type: "image",
    },
    {
      propName: "productVideoUrl",
      label: "Video URL",
      type: "text",
    },
  ]
};

export default Hero;
