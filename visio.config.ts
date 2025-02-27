import blocks from "@/app/(visio)/blocks";
import { locales } from "./lib/contants";
import { getPosts } from "./lib/utils";

const config = {
  blocks: [...blocks],
  allowImageTransformation: false,
  ...locales,
  emailSender: process.env.NEXT_PUBLIC_EMAIL_SENDER || "",
  projectId: process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID || "",
  supabaseProjectUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANONKEY || "",
  unsplashAccessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESSKEY || "",
  routeHandlers: async (path: string) => {
     switch (path) {
        case "/posts":
          const data = await getPosts();
          return {posts: [...data]};
        case path.match(/^\/posts\/\d+$/)?.input:
            const res1 = await fetch(`https://jsonplaceholder.typicode.com${path}`);
            const data1 = await res1.json();
            const d =  {...data1, posts: await getPosts()};
            return d;
        default:
          return null
     }
  }
};

export default config;
