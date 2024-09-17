"use client";
import { Container } from "@/components/ui/container";
import { Block, MediaFile } from "visio-cms-lib/types";
import VisioImage from "visio-cms-lib/Image";
import Image from "next/image";
import Text from "visio-cms-lib/Text";
import { motion } from "framer-motion";
import { useMemo } from "react";

interface BuildDeploySectionProps {
  title: string;
  subTitle: string;
  description: string;
  image: MediaFile;
  pageBlockId?: string;
}
const BuildDeploySection: Block<BuildDeploySectionProps> = ({
  title,
  subTitle,
  description,
  image,
  pageBlockId = "",
}) => {
  const ImageBox = useMemo(() => {
    return (
      <VisioImage
        defaultValue={image}
        propName="image"
        pageBlockId={pageBlockId}
        wrapperClassName="w-full rounded-lg overflow-hidden relative h-full"
        renderImage={(image) => (
          <Image
            src={image.imagePublicUrl}
            width={image.width}
            height={image.height}
            alt={image.altText}
            unoptimized
          />
        )}
      />
    );
  }, [image, pageBlockId]);
  return (
    <div className="bg-dark-900 pb-20  px-4">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="grid grid-cols-2 gap-3"
        >
          <div className="col-span-2 md:col-span-1 hidden md:block">
            {ImageBox}
          </div>

          <div className="col-span-2 md:col-span-1 space-y-3 grid place-items-center">
            <div>
              <h2 className="text-4xl font-satoshi max-w-2xl  text-white text-satoshi mb-4 font-bold">
                <Text
                  propName="title"
                  pageBlockId={pageBlockId}
                  defaultValue={title}
                />
              </h2>

              <div className="block md:hidden my-4">{ImageBox}</div>
              <h4 className="font-satoshi text-lg max-w-xl  text-slate-200 mb-10">
                <Text
                  propName="subTitle"
                  pageBlockId={pageBlockId}
                  defaultValue={subTitle}
                />
              </h4>
              <p className="text-white text-satoshi mt-8 text-sm font-light">
                <Text
                  propName="description"
                  pageBlockId={pageBlockId}
                  defaultValue={description}
                />
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

BuildDeploySection.Schema = {
  name: "Build and Deploy Section",
  id: "build-deploy-section",
  sideEditingProps: [],
  defaultPropValues: {
    title: "Build and deploy every where",
    subTitle: "No boundaries in where you host your project.",
    description:
      "Choose your preferred hosting infrastructure and deploy your app with ease, giving you control and scalability.",
    image: {
      mediaHash: undefined,
      width: 0,
      height: 0,
      altText: "",
    },
  },
};
export default BuildDeploySection;
