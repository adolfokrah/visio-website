import { BlockList } from "visio-cms-lib/types";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Features from "./Features";
import CodeToEditor from "./CodeToEditor";
import WebCoreVitals from "./WebCoreVitals";
import Integrations from "./Integrations";
import BuildDeploySection from "./BuildDeploySection";
const blocks = [
  Hero,
  Navbar,
  Features,
  CodeToEditor,
  WebCoreVitals,
  Integrations,
  BuildDeploySection,
] as unknown as BlockList[];

export default blocks;
