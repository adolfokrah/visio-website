"use client";
import { Block } from "visio-cms-lib/types";
import Text from "visio-cms-lib/Text";
import { Container } from "@/components/ui/container";
import QuickStartCode from "@/components/ui/quick-start-code";
import Link from "next/link";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";

interface GetStartedProps {
  title: string;
  description: string;
  pageBlockId?: string;
  cta: {
    text: string;
    link: string;
    code: string
  }
}
const GetStartedCta: Block<GetStartedProps> = ({
  title,
  description,
  pageBlockId = "",
  cta,
}) => {
  return (
    <div className="bg-dark-900 py-20 px-4 relative ">
      <Container className="bg-black border border-800 mx-2 lg:mx-auto rounded-xl !p-20 relative overflow-hidden">
        <h2 className="text-4xl font-satoshi max-w-[300px] text-white text-satoshi mb-4 font-bold">
          <Text
            propName="title"
            pageBlockId={pageBlockId}
            defaultValue={title}
          />
        </h2>
        <h4 className="font-satoshi text-sm font-light max-w-[300px]   text-slate-200 mb-10">
          <Text
            propName="description"
            pageBlockId={pageBlockId}
            defaultValue={description}
          />
        </h4>

        <div className="flex items-center gap-4">
        <QuickStartCode
            code={cta.code}
            pageBlockId={pageBlockId}
        />

        <Link href={cta.link}
            className="inline-block bg-primary text-white font-satoshi px-6 py-3 rounded-md text-sm"
        >
        <Text
            propName="cta.text"
            pageBlockId={pageBlockId}
            defaultValue={cta.text}
          />
            </Link>
        </div>

       <div className="absolute -right-10 w-1/2 h-full top-0 ">
        <GridPattern
            width={100}
            height={100}
            x={-1}
            y={-1}
            strokeDasharray={"4 2"}
            className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
            )}
        />
       </div>
        
      </Container>
    </div>
  );
};

GetStartedCta.Schema = {
  name: "Get Started CTA",
  id: "getStartedCTA",
  sideEditingProps: [
    {
        propName: 'cta.link',
        label: 'CTA Link',
        type: 'link'
    }
  ],
  defaultPropValues: {
    title: "Get started with Visio cms",
    description: "Quickly launch on-brand pages while leveraging your existing tech stack.",
    cta: {
        text: "Get Started",
        link: "/",
        code: 'create-visio-app@latest'
    }
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

export default GetStartedCta;
