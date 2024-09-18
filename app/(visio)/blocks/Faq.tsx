"use client";
import { Block } from "visio-cms-lib/types";
import Text from "visio-cms-lib/Text";
import List from "visio-cms-lib/List";
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
interface FAQProps {
  title: string;
  description: string;
  pageBlockId?: string;
  faqs: {
    title: string;
    answer: string;
    itemKey: string;
  }[];
}
const FAQ: Block<FAQProps> = ({
  title,
  description,
  pageBlockId = "",
  faqs,
}) => {
  const [expandedFAQ, setExpandedFAQ] = useState<string[]>([]);
  return (
    <div className="bg-dark-900 pb-20 px-4 relative ">
      <Container className="max-w-xl">
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
          defaultPropValues={faqs}
          propName="testimonials"
          pageBlockId={pageBlockId}
          renderComponent={(faq, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              key={faq.title}
              className={cn("p-2 items-center space-y-4 rounded-xl border border-dark-700 bg-dark-800 cursor-pointer transition-all mb-4", {
                'rounded-xl': expandedFAQ.includes(faq.itemKey)
              })}
              onClick={() =>
                setExpandedFAQ((prev) => {
                  if (prev.includes(faq.itemKey)) {
                    return prev.filter((key) => key !== faq.itemKey);
                  } else {
                    return [...prev, faq.itemKey];
                  }
                })
              }
            >
              <div className="flex items-center gap-4">
                <div className="w-[30px] h-[30px] bg-primary rounded-full grid place-items-center">
                  {expandedFAQ.includes(faq.itemKey) ?  <Minus size={14} color="white" /> : <Plus size={14} color="white" />}
                </div>
                <div className="text-white  font-satoshi  text-md">
                  <Text
                    propName={`faqs.${index}.title`}
                    pageBlockId={pageBlockId}
                    defaultValue={faq.title}
                  />
                </div>
              </div>
              {expandedFAQ.includes(faq.itemKey) && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-slate-300  font-satoshi text-xs"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Text
                    propName={`faqs.${index}.answer`}
                    pageBlockId={pageBlockId}
                    defaultValue={faq.answer}
                  />
                </motion.div>
              )}
            </motion.div>
          )}
        />
      </Container>
    </div>
  );
};

FAQ.Schema = {
  name: "FAQ",
  id: "faq",
  sideEditingProps: [],
  defaultPropValues: {
    title: "FAQ",
    description: "Got other questions? Reach out in our Community.",
    faqs: [
      {
        itemKey: "e4d1c0f4-5e72-41b2-8b94-c9b4e06e929a",
        title: "What is Visio CMS?",
        answer:
          "Visio CMS is an open-source visual content management system that allows React developers to create components that marketers and content editors can easily drag and drop to build structured content on a webpage. It also includes a prop editing feature that allows users to modify component properties without code.",
      },
      {
        itemKey: "a1c45d84-5d8c-4e2f-a877-3fd44609becc",
        title: "Who can use Visio CMS?",
        answer:
          "Visio CMS is designed for both developers and non-technical users. Developers can build reusable React components, while content editors and marketers can visually manage content and modify it using an intuitive interface.",
      },
      {
        itemKey: "f68d4b26-1b6f-47e9-9cb7-3534cf5a1d7f",
        title: "How does the drag-and-drop feature work?",
        answer:
          "The drag-and-drop feature allows content editors to select and place pre-built React components directly onto a page layout. They can rearrange components and create content structures visually without writing code.",
      },
      {
        itemKey: "95a2d3bb-6c99-4b8a-a4e2-673e2fdbbf32",
        title: "Can I customize components?",
        answer:
          "Yes, developers can create and customize React components that content editors can use. Additionally, editors can modify the props of these components using a prop editing interface, which provides flexibility in changing styles, text, and other dynamic features.",
      },
      {
        itemKey: "64a8f71f-93af-40f1-bc9d-48715b1d062f",
        title: "Is Visio CMS open source?",
        answer:
          "Yes, Visio CMS is open source, allowing developers to contribute and enhance the platform. You can access the codebase and contribute on platforms like GitHub.",
      },
      {
        itemKey: "1f3c763f-b6c3-47ad-8250-d404d761f95b",
        title: "Do I need coding knowledge to use Visio CMS?",
        answer:
          "Coding knowledge is only required for developers. The drag-and-drop interface and prop editor allow content creators and marketers to manage and update web content without technical expertise.",
      },
      {
        itemKey: "9b65d1e1-9b38-463a-937e-5013f60c0ff8",
        title: "What are the benefits of using Visio CMS?",
        answer:
          "Visio CMS offers several benefits, including faster content updates, improved collaboration between developers and marketers, and more control over page layouts and design. It also reduces dependency on developers for minor changes.",
      },
      {
        itemKey: "3bc2fd43-5af2-47b4-82d1-f7cf4b3f0635",
        title: "Is Visio CMS compatible with existing React projects?",
        answer:
          "Yes, Visio CMS is designed to integrate seamlessly with existing React applications, allowing developers to build custom components and deploy them for use in the CMS environment.",
      },
      {
        itemKey: "ee3d0f71-0485-40d5-8bdf-d790aa0a8a32",
        title: "How do I get started with Visio CMS?",
        answer:
          "You can get started by downloading the source code from the repository or following the installation instructions on the official documentation. Developers can then begin integrating Visio CMS into their React projects.",
      },
      {
        itemKey: "b2d5bb43-ff7a-44c2-90d8-b8fe645c1c73",
        title: "Can I use Visio CMS for large-scale projects?",
        answer:
          "Absolutely! Visio CMS is scalable and can be used for both small and large-scale projects. It offers flexibility in managing complex content structures, making it suitable for a wide range of applications.",
      },
    ],
  },
  lists: [
    {
      propName: "faqs",
      label: "FAQ",
      defaultValue: {
        title: "Can I use Visio CMS for large-scale projects?",
        answer:
          "Absolutely! Visio CMS is scalable and can be used for both small and large-scale projects. It offers flexibility in managing complex content structures, making it suitable for a wide range of applications.",
      },
    },
  ],
};

export default FAQ;
