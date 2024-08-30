import type { Metadata } from "next";

import { getContentList } from "@/helpers/file-helpers";
import { CONTENT_PATHS } from "@/constants";

export const metadata: Metadata = {
  title: "Home | UX Designer & Front-End Developer",
  description:
    "Start building your online presence today by working with me. I'm a freelance User Interface designer and developer who always puts the user first.",
};

const Home = async () => {
  return (
    <main id="main">
      <h1>Coming Soon (maybe)</h1>
    </main>
  );
};

export default Home;
