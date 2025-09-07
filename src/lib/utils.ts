import { GithubRepo } from "@/app/types";
import clsx from "clsx";
import { ClassNameValue, twMerge } from "tailwind-merge";

export function cn(...classes: ClassNameValue[]) {
  return twMerge(clsx(classes));
}

export const API: GithubRepo = {
  github_repo: "https://api.github.com/repos/tholkappiar"
}