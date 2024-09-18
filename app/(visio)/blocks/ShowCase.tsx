"use client";
import { Block, MediaFile } from "visio-cms-lib/types";
import Text from "visio-cms-lib/Text";
import List from "visio-cms-lib/List";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { getImageUrl, getLink } from "visio-cms-lib";
import Link from "next/link";
interface TestimonialsProps {
  title: string;
  description: string;
  pageBlockId?: string;
  projects: {
    image: MediaFile;
    link: string;
  }[];
}
const ShowCase: Block<TestimonialsProps> = ({
  title,
  description,
  pageBlockId = "",
  projects,
}) => {
  return (
    <div className="bg-dark-900 pb-20 px-4 relative ">
      <Container>
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

        <List
          defaultPropValues={projects}
          propName="projects"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          listItemClassName="h-[300px] group"
          pageBlockId={pageBlockId}
          renderComponent={({ image, link }) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              key={image?.mediaHash}
              className="relative h-full w-full items-center space-y-8 overflow-hidden rounded-xl"
            >
              <Image
                src={getImageUrl(image)}
                fill
                alt={image?.altText}
                className="object-cover group-hover:scale-110 transition-all ease-linear"
              />

              <Link target="_blank" href={getLink(link)}>
                <div className="bg-gradient-to-t from-dark-900  to-transparent w-full h-full  absolute" />
              </Link>
            </motion.div>
          )}
        />
      </Container>
    </div>
  );
};

ShowCase.Schema = {
  name: "ShowCase",
  id: "showCase",
  sideEditingProps: [],
  defaultPropValues: {
    title: "What was built with visio",
    description:
      "Explore real-world examples of stunning websites built with our platform by the community.",
    projects: [],
  },
  lists: [
    {
      propName: "projects",
      label: "Project",
      defaultValue: {
        image: {
          mediaHash: undefined,
          altText: "",
          width: 0,
          heigh: 0,
        },
        link: "#",
      },
      sideEditingProps: [
        {
          propName: "image",
          type: "image",
          label: "Project Image",
        },
        {
          propName: "link",
          type: "link",
          label: "Project Link",
        },
      ],
    },
  ],
};

export default ShowCase;
