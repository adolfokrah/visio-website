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
import ShowCase from "./ShowCase";
import FAQ from "./Faq";
import GetStartedCta from "./getStartedCTA";
import Footer from "./Footer";
import Posts from "./PostsList";
import Post from "./PostDetails";
const blocks = [
  Hero,
  Navbar,
  Features,
  CodeToEditor,
  WebCoreVitals,
  Integrations,
  BuildDeploySection,
  ForDevs,
  Testimonials,
  ShowCase,
  FAQ,
  GetStartedCta,
  Footer,
  Posts,
  Post
] as unknown as BlockList[];

export default blocks;
