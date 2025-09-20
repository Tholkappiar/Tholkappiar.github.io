import clsx from "clsx";
import { ClassNameValue, twMerge } from "tailwind-merge";

export function cn(...classes: ClassNameValue[]) {
  return twMerge(clsx(classes));
}

export const API = {
  github: {
    github_repo: "https://api.github.com/repos/tholkappiar",
    blogs_path: "/Tholkappiar.github.io/contents/src/blogs/",
  },
  backend: {
    base_path: "http://localhost:3000",
    getBlogs: "/api/github/getBlogs",
    getBlog: (slug: string) => `/api/github/getBlog?slug=${slug}`
  }
};
