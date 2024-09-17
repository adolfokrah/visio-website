"use client";
import { Container } from "@/components/ui/container";
import { useEffect, useState } from "react";
import { cn, List, Text } from "visio-cms-lib";
import { Block } from "visio-cms-lib/types";
import { animate, motion } from "framer-motion";

interface CodeToEditorProps {
  title: string;
  steps: {
    title: string;
    description: string;
    video: string;
  }[];
  pageBlockId?: string;
}
const CodeToEditor: Block<CodeToEditorProps> = ({
  pageBlockId = "",
  steps,
  title,
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const animation = animate(
      `.progress${currentStep}`,
      {
        height: "100%",
      },
      {
        duration: 30,
        ease: "linear",
        onComplete: () => {
          animate(`.progress${currentStep}`, { height: 0 }, { duration: 0 });
          if (currentStep == 2) {
            setCurrentStep(0);
          } else {
            setCurrentStep(currentStep + 1);
          }
        },
      },
    );

    return () => animation.stop();
  }, [currentStep]);

  const Video = ({ className }: { className: string }) => {
    return (
      <div
        className={cn(
          "rounded-lg overflow-hidden p-1 border border-dark-700 ",
          className,
        )}
      >
        <video
          src={steps[currentStep].video}
          loop
          autoPlay
          muted
          className="object-contain w-full h-full rounded-md"
        />
      </div>
    );
  };
  return (
    <div className="bg-dark-900 py-20 md:py-32">
      <Container className="grid grid-cols-6 gap-8 max-w-[1100px]">
        <div className="hidden md:grid place-items-center w-full h-full col-span-6 md:col-span-3">
          <Video className="h-auto w-full" />
        </div>
        <div className="col-span-6 md:col-span-3 font-satoshi">
          <h2 className="text-4xl pl-4 text-white text-satoshi mb-4 font-bold">
            <Text
              propName="title"
              pageBlockId={pageBlockId}
              defaultValue={title}
            />
          </h2>
          <div className="block md:hidden my-6">
            <Video className="h-auto" />
          </div>
          <List
            defaultPropValues={steps}
            propName="steps"
            pageBlockId={pageBlockId}
            className="mt-6 space-y-7"
            renderComponent={(step, index) => (
              <div
                className="cursor-pointer flex gap-4"
                key={step.title}
                onClick={() => {
                  animate(
                    `.progress${currentStep}`,
                    { height: 0 },
                    { duration: 0 },
                  );
                  setCurrentStep(index);
                }}
              >
                <div>
                  <div
                    className={cn(
                      "h-[70px] w-[5px] overflow-hidden invisible  bg-black rounded-full",
                      {
                        visible: currentStep == index,
                      },
                    )}
                  >
                    <motion.div
                      className={`progress${index} w-full h-0 bg-white rounded-full`}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl text-white font-bold mb-3">
                    <Text
                      propName={`steps.${index}.title`}
                      pageBlockId={pageBlockId}
                      defaultValue={step.title}
                    />
                  </h3>
                  <p className="text-sm text-slate-200 font-light">
                    <Text
                      propName={`steps.${index}.description`}
                      pageBlockId={pageBlockId}
                      defaultValue={step.description}
                    />
                  </p>
                </div>
              </div>
            )}
          />
        </div>
      </Container>
    </div>
  );
};

CodeToEditor.Schema = {
  name: "Code To Editor Section",
  id: "CodeToEditor",
  defaultPropValues: {
    title: "Empower non developers to collaborate easily",
    steps: [
      {
        title: "Build your components with code",
        description:
          "You have all the flexibility to code your components any how you like, just define your props, schemas and exports as blocks.",
        video:
          "https://rruekjolwsyfvgvbcvjv.supabase.co/storage/v1/object/public/media/coding.mp4?t=2024-09-17T17%3A12%3A24.991Z",
      },
      {
        title: "Drag & Drop",
        description:
          "Design and structure your pages with ease. Content editors simply drag, drop, and customize your components to create stunning layouts in minutes.",
        video:
          "https://rruekjolwsyfvgvbcvjv.supabase.co/storage/v1/object/public/media/drag%20n%20drop%20.mp4?t=2024-09-17T17%3A12%3A38.223Z",
      },
      {
        title: "Go live",
        description:
          "Instantly publish your webpage or schedule to go live any time you want.",
        video:
          "https://rruekjolwsyfvgvbcvjv.supabase.co/storage/v1/object/public/media/publish.mp4?t=2024-09-17T17%3A12%3A46.445Z",
      },
    ],
  },
  sideEditingProps: [],
  lists: [
    {
      propName: "steps",
      label: "Step",
      defaultValue: {
        title: "Build your components with code",
        description:
          "You have all the flexibility to code your components any how you like, just define your props, schemas and exports as blocks.",
        video:
          "https://rruekjolwsyfvgvbcvjv.supabase.co/storage/v1/object/public/media/coding.mp4?t=2024-09-17T17%3A12%3A24.991Z",
      },
      sideEditingProps: [
        {
          propName: "video",
          label: "Video",
          type: "text",
        },
      ],
    },
  ],
};

export default CodeToEditor;
