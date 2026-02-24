import { TopicContent } from "./content";
import { demoContent } from "./DSA/demo-content";
import { summaryContent } from "./DSA/summary";
import { arrayContent } from "./DSA/array";
import { dsaquesContent } from "./DSA/dsaques";

export const dsaContent: Record<string, Record<string, TopicContent>> = {
  demo: demoContent,
  summary: summaryContent,
  array: arrayContent,
  dsaques: dsaquesContent,
};
