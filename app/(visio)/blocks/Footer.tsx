"use client";
import { Container } from "@/components/ui/container";
import { NavLinks } from "@/components/ui/nav-link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Block } from "visio-cms-lib/types";
import Link from "next/link";
import {  getLink } from "visio-cms-lib";

export interface FooterProps {
  githubLink: string;
  navLinks: {
    label: string;
    href: string;
  }[];
  pageBlockId?: string;
}

const Footer: Block<FooterProps> = ({
    navLinks,
  pageBlockId = "",
  githubLink,
}) => {
  return (
    <footer className="bg-dark-900 py-2">
      <nav>
      <div
            className="bg-gradient-to-l from-dark-900 via-dark-700 to-dark-900 mb-3 h-[1px] w-full"
          />
        <Container className="py-5">
          
          <div className="relative z-10 flex flex-col gap-4 md:flex-row justify-between w-full  lg:items-center">
            <NavLinks navLinks={navLinks} pageBlockId={pageBlockId} className="flex gap-5 flex-col md:flex-row" />
            <Link href={getLink(githubLink)}>
                <GitHubLogoIcon color="white" />
            </Link>
          </div>
        </Container>
      </nav>
    </footer>
  );
};

Footer.Schema = {
  name: "Footer",
  id: "footer",
  sideEditingProps: [
    {
      propName: "githubLink",
      label: "Github Link",
      type: "link",
    },
  ],
  defaultPropValues: {
    githubLink: "",
    navLinks: [
      { label: "Features", href: "/#features" },
      { label: "Reviews", href: "/#reviews" },
      { label: "Pricing", href: "/#pricing" },
      { label: "FAQs", href: "/#faqs" },
    ],
  },
  group: "Navigation",
  lists: [
    {
        propName: "navLinks",
        label: "Nav Link",
        defaultValue: {
            label: "Features",
            href: "/#features"
        },
        sideEditingProps: [
            {
                propName: 'link',
                type: 'link',
                label: 'Link'
            }
        ]
    }
  ]
};

export default Footer;
