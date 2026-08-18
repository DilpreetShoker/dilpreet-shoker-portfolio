import { layout } from "@/theme/layout";

export const hero = {
  contentWidth: layout.heroContentMax,
  primaryGlow: "left-8 top-12 h-[42rem] w-[42rem] sm:left-20 sm:top-16 sm:h-[50rem] sm:w-[50rem]",
  secondaryGlow: "right-[-8rem] top-1/3 h-[28rem] w-[28rem] sm:h-[32rem] sm:w-[32rem]",
  primaryBlur: "blur-[180px]",
  secondaryBlur: "blur-[150px]",
} as const;
