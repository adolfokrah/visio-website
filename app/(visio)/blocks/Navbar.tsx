"use client";
import { Container } from "@/components/ui/container";
import Logo from "@/components/ui/logo";
import { NavLinks } from "@/components/ui/nav-link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Menu } from "lucide-react";
import { Block } from "visio-cms-lib/types";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { cn, getLink, getProjectMode, List, Text } from "visio-cms-lib";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export interface NavbarProps {
  githubLink: string;
  navLinks: {
    label: string;
    href: string;
  }[];
  pageBlockId?: string;
  buttons: {
    label: string;
    href: string;
  }[];
}

const Navbar: Block<NavbarProps> = ({
  navLinks,
  pageBlockId = "",
  buttons,
  githubLink,
}) => {
  const isBuilderMode = getProjectMode() === "BUILDER";

  const { scrollY } = useScroll();
  const [alpha, setAlpha] = useState(0)


  useMotionValueEvent(scrollY, "change", (latest) => {
    const alphaValue =  latest / 4000;
    console.log(alphaValue);
    setAlpha(alphaValue > 0.4 ? 0.4 : alphaValue)
  });

  return (
    <header>
      <nav
        className={cn("z-50 absolute left-0 lg:top-5 w-full", {
          "fixed ": !isBuilderMode,
        })}
      >
        <Container className="relative  mx-auto flex py-3 lg:rounded-full !px-3 backdrop-blur-sm" style={{backgroundColor: `rgb(39 39 39 / ${alpha})`}}>
          <div className="relative z-10 flex justify-between w-full  items-center">
            <Logo className="w-auto h-4" />
            <NavLinks navLinks={navLinks} pageBlockId={pageBlockId} />

            <Sheet>
              <SheetTrigger asChild>
                <Menu color="white" className="cursor-pointer lg:hidden" />
              </SheetTrigger>
              <SheetContent
                side={"top"}
                className="bg-dark-800 font-satoshi rounded-none text-white pt-[50px] border-none"
              >
                <List
                  propName="navLinks"
                  pageBlockId={pageBlockId}
                  defaultPropValues={navLinks}
                  className="space-y-4"
                  renderComponent={({ label, href }, index) => (
                    <Link
                      className="font-satoshi text-white"
                      href={getLink(href)}
                      key={`${href}.${index}`}
                    >
                      <motion.span
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                      >
                        <Text
                          defaultValue={label}
                          propName={`navLinks.${index}.label`}
                          pageBlockId={pageBlockId}
                        />
                      </motion.span>
                    </Link>
                  )}
                />
              </SheetContent>
            </Sheet>

            <div className=" items-center gap-4 hidden lg:flex">
              <Link href={getLink(githubLink)}>
                <GitHubLogoIcon color="white" />
              </Link>
              <List
                pageBlockId={pageBlockId}
                propName="buttons"
                className="flex flex-col gap-4"
                defaultPropValues={buttons || []}
                renderComponent={({ label, href }, index) => (
                  <Link
                    className="font-satoshi text-white rounded-full bg-primary px-4 py-2 inline-block text-sm"
                    key={label}
                    href={getLink(href)}
                  >
                    <Text
                      defaultValue={label}
                      propName={`buttons.${index}.label`}
                      pageBlockId={pageBlockId}
                    />
                  </Link>
                )}
              />
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

Navbar.Schema = {
  name: "Navbar",
  id: "navbar",
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
    buttons: [],
  },
  lists: [
    {
      propName: "navLinks",
      label: "Nav Link",
      defaultValue: {
        label: "New Link",
        href: "/new-page",
      },
      sideEditingProps: [
        {
          propName: "href",
          type: "link",
          label: "Link",
        },
      ],
    },
    {
      propName: "buttons",
      label: "Button",
      defaultValue: {
        label: "New Button",
        href: "/new-page",
        variant: "solid",
        className: "hidden lg:block",
      },
      sideEditingProps: [
        {
          propName: "href",
          type: "link",
          label: "Link",
        },
      ],
    },
  ],
  group: "Navigation",
};

export default Navbar;
