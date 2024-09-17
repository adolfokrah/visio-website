import Marquee from "@/components/magicui/marquee";

const projects = [
  "Ecommerce",
  "Landing pages",
  "Web Apps",
  "SaaS",
  "Marketplaces",
  "Social Networks",
  "CMS",
  "CRMs",
  "Blogs",
  "Forums",
  "Portfolio",
  "Personal",
  "Business",
  "Education",
  "Entertainment",
  "Health",
  "Finance",
  "Travel",
  "Real Estate",
  "Food",
  "Events",
  "Nonprofit",
  "Other",
];
export function ProjectTypes() {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden mt-2">
      <Marquee className="[--duration:20s]">
        {projects.map((project) => (
          <div
            key={project}
            className="font-satoshi text-white font-light  w-max rounded-full px-2 py-1 border border-slate-700"
          >
            {project}
          </div>
        ))}
      </Marquee>
    </div>
  );
}
