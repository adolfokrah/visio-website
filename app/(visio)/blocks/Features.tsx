"use client";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import { cn, getImageUrl, List, Text } from "visio-cms-lib";
import { Block, MediaFile } from "visio-cms-lib/types";
import { motion } from "framer-motion";

type FeatureProps = {
  title: string;
    subtitle: string;
  features: {
    background: MediaFile;
    title: string;
    subtitle: string;
    description: string;
  }[];
  pageBlockId?: string;
};

const Features: Block<FeatureProps> = ({ features, pageBlockId = "", title, subtitle }) => {
  return (
    <div className="bg-dark-900 w-full py-11">
      <Container>
        <h2 className="font-satoshi text-4xl max-w-lg mx-auto text-white text-center mb-2">
            <Text
                propName="title"
                pageBlockId={pageBlockId}
                defaultValue={title}
            />
        </h2>
        <h4  className="font-satoshi text-lg max-w-xl mx-auto text-slate-400 text-center mb-10">
            <Text
                propName="subtitle"
                pageBlockId={pageBlockId}
                defaultValue={subtitle}/>
        </h4>
        <List
          defaultPropValues={features}
          propName="features"
          pageBlockId={pageBlockId}
          className="grid grid-cols-12 font-satoshi gap-2"
          setListItemClassName={(feature, index) => {
            return cn(
              "col-span-12 sm:col-span-12 md:col-span-6 rounded-lg relative border border-dark-700 group  p-1 h-[400px] relative  ",
              {
                "lg:rounded-tl-[50px]": index < 1,
                "lg:rounded-tr-[50px]": index == 1,
                "lg:rounded-br-[50px]": index == features.length - 1,
                "lg:rounded-bl-[50px]": index == features.length - 3,
                "md:col-span-6 lg:col-span-6": index < 2,
                "md:col-span-6 lg:col-span-4": index == 2,
                "lg:col-span-4": index > 1 && index < features.length,
                
              },
            );
          }}
          renderComponent={(feature, index) => (
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              className={cn(
                "relative h-full w-full rounded-md overflow-hidden p-3 ",
                {
                  "lg:rounded-tl-[45px]": index < 1,
                  "lg:rounded-tr-[45px]": index == 1,
                  "lg:rounded-br-[45px]": index == features.length - 1,
                  "lg:rounded-bl-[45px]": index == features.length - 3,
                },
              )}
            >
              <Image
                src={getImageUrl(feature.background)}
                alt={feature.title}
                fill
                className="object-cover w-full h-full group-hover:scale-110 transition-all ease-linear"
              />
              <div className=" bg-gradient-to-t from-dark-900 to-transparent absolute bottom-0 left-0 h-full w-full" />
              <div className="absolute bottom-0  left-0 p-5 space-y-2">
                <h4 className="text-white font-bold text-xs">
                  <Text
                    propName={`features.${index}.title`}
                    pageBlockId={pageBlockId}
                    defaultValue={feature.title}
                  />
                </h4>
                <h5 className="text-white">
                  <Text
                    propName={`features.${index}.subtitle`}
                    pageBlockId={pageBlockId}
                    defaultValue={feature.subtitle}
                  />
                </h5>
                <p className="text-white text-xs font-light">
                  <Text
                    propName={`features.${index}.description`}
                    pageBlockId={pageBlockId}
                    defaultValue={feature.description}
                  />
                </p>
              </div>
            </motion.div>
          )}
        />
      </Container>
    </div>
  );
};

Features.Schema = {
  name: "Features",
  id: "features",
  sideEditingProps: [],
  defaultPropValues: {
    title: "Effortlessly manage your website content.",
    subtitle: "Effortlessly manage and update your website with a powerful drag-and-drop editor, fully customizable components, and real-time content control.",
    features: [
      {
        background: {
          mediaHash:
            "https://rruekjolwsyfvgvbcvjv.supabase.co/storage/v1/object/public/media/Screenshot%202024-09-15%20180348.png?t=2024-09-17T10%3A50%3A06.180Z",
          width: 0,
          height: 0,
          altText: "Drag & Drop",
        },
        title: "UI",
        subtitle: "Drag & Drop",
        description:
          "Design and structure your pages with ease. Simply drag, drop, and customize components to create stunning layouts in minutes",
      },
      {
        background: {
          mediaHash:
            "https://rruekjolwsyfvgvbcvjv.supabase.co/storage/v1/object/public/media/Screenshot%202024-09-15%20180348.png?t=2024-09-17T10%3A50%3A06.180Z",
          width: 0,
          height: 0,
          altText: "Drag & Drop",
        },
        title: "UI",
        subtitle: "Drag & Drop",
        description:
          "Design and structure your pages with ease. Simply drag, drop, and customize components to create stunning layouts in minutes",
      },
    ],
  },
  lists: [
    {
      propName: "features",
      label: "Feature",
      defaultValue: {
        background: {
          mediaHash:
            "https://rruekjolwsyfvgvbcvjv.supabase.co/storage/v1/object/public/media/Screenshot%202024-09-15%20180348.png?t=2024-09-17T10%3A50%3A06.180Z",
          width: 0,
          height: 0,
          altText: "Drag & Drop",
        },
        title: "UI",
        subtitle: "Drag & Drop",
        description:
          "Design and structure your pages with ease. Simply drag, drop, and customize components to create stunning layouts in minutes",
      },
      sideEditingProps: [
        {
          propName: "background",
          label: "Background",
          type: "image",
        },
      ],
    },
  ],
};

export default Features;
