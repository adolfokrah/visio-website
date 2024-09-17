"use client";
import { Text } from "visio-cms-lib";
import { Block, Color, MediaFile } from "visio-cms-lib/types";
import Image from "next/image";
import VisioImage from "visio-cms-lib/Image";
import { getColor } from "visio-cms-lib/utils";
import { motion } from "framer-motion";
interface WebCoreVitalsProps {
  title: string;
  description: string;
  pageBlockId?: string;
  image: MediaFile;
  backgroundColor: Color;
}
const WebCoreVitals: Block<WebCoreVitalsProps> = ({
  title,
  description,
  pageBlockId = "",
  image,
  backgroundColor,
}) => {
  return (
    <div className="bg-dark-900 pb-20  px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="max-w-3xl rounded-lg border border-dark-700 p-8 md:p-14 mx-auto"
        style={{ backgroundColor: getColor(backgroundColor) }}
      >
        <h2 className="text-4xl font-satoshi mx-auto text-center pl-4 text-white text-satoshi mb-4 font-bold">
          <Text
            propName="title"
            pageBlockId={pageBlockId}
            defaultValue={title}
          />
        </h2>
        <h4 className="font-satoshi text-lg max-w-xl  mx-auto text-slate-200 text-center mb-10">
          <Text
            propName="description"
            pageBlockId={pageBlockId}
            defaultValue={description}
          />
        </h4>
        <VisioImage
          defaultValue={image}
          propName="image"
          pageBlockId={pageBlockId}
          wrapperClassName="w-full rounded-lg overflow-hidden relative"
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
      </motion.div>
    </div>
  );
};

WebCoreVitals.Schema = {
  name: "Web core vitals section",
  id: "web-core-vitals",
  defaultPropValues: {
    title: "Build performant apps",
    description:
      "Build high-performance apps optimized for Web Core Vitals to ensure fast, responsive, and user-friendly experiences",
    image: {
      mediaHash: undefined,
      width: 0,
      height: 0,
      altText: "",
    },
    backgroundColor: {
      colorName: "dark-900",
      colorHex: "#1F2937",
      id: "dark-900",
    },
  },
  sideEditingProps: [
    {
      propName: "backgroundColor",
      type: "color",
      label: "Background color",
    },
  ],
};
export default WebCoreVitals;
