import { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash };
    }

    return { top: 0 };
  },
};
