"use client";
import { Container } from "@/components/ui/container";
import { Block, MediaFile } from "visio-cms-lib/types";
import Text from "visio-cms-lib/Text";
import Image from "next/image";
import VisioImage from "visio-cms-lib/Image";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ForDevsProps {
  caption: string;
  title: string;
  description: string;
  image: MediaFile;
  pageBlockId?: string;
}
const ForDevs: Block<ForDevsProps> = ({
  caption,
  image,
  title,
  description,
  pageBlockId = "",
}) => {
  return (
    <div className="bg-black pt-20 px-4 relative ">
      <Container className="space-y-8">
        <p className="font-satoshi text-primary text-center mb-1 uppercase text-xs">
          <Text
            propName="caption"
            pageBlockId={pageBlockId}
            defaultValue={caption}
          />
        </p>
        <h2 className="text-4xl font-satoshi max-w-xl mx-auto text-center  text-white text-satoshi mb-4 font-bold">
          <Text
            propName="title"
            pageBlockId={pageBlockId}
            defaultValue={title}
          />
        </h2>
        <h4 className="font-satoshi text-sm font-light max-w-md  mx-auto text-slate-200 text-center mb-10">
          <Text
            propName="description"
            pageBlockId={pageBlockId}
            defaultValue={description}
          />
        </h4>

        <div className="right-[550px] z-20 sm:right-[350px] md:right-[200px] lg:right-[0px]  lg:mx-auto w-[800px] h-[700px] relative  ">
          <VisioImage
            defaultValue={image}
            propName="image"
            pageBlockId={pageBlockId}
            wrapperClassName="absolute bottom-0 rounded-lg  absolute w-full h-[900px]  top-[5px]"
            renderImage={(image) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="w-full h-full rounded-lg overflow-hidden relative"
              >
                <Image
                  src={image.imagePublicUrl}
                  width={image.width}
                  height={image.height}
                  alt={image.altText}
                  unoptimized
                  className="object-contain"
                />
              </motion.div>
            )}
          />
        </div>
      </Container>

      <GridPattern
        width={100}
        height={100}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  );
};

ForDevs.Schema = {
  name: "For Developers",
  id: "for-devs",
  defaultPropValues: {
    caption: "For Developers",
    title: "Leverage on the power of reusable components",
    description:
      "Break down your website into reusable React components that can be easily managed and customized for a more efficient and flexible development process.",
    image: {
      mediaHash: undefined,
      altText: "For Developers",
      width: 0,
      height: 0,
    },
  },
  sideEditingProps: [],
};

export default ForDevs;
