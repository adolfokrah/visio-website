import { BlockList } from "visio-cms-lib/types";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Features from "./Features";
import CodeToEditor from "./CodeToEditor";
import WebCoreVitals from "./WebCoreVitals";
import Integrations from "./Integrations";
import BuildDeploySection from "./BuildDeploySection";
import ForDevs from "./ForDevs";
import Testimonials from "./Testimonials";
const blocks = [
  Hero,
  Navbar,
  Features,
  CodeToEditor,
  WebCoreVitals,
  Integrations,
  BuildDeploySection,
  ForDevs,
  Testimonials
] as unknown as BlockList[];

export default blocks;
