import { TopicContent } from "./content";
import { demoContent } from "./DSA/demo-content";
import { summaryContent } from "./DSA/summary";

export const dsaContent: Record<string, Record<string, TopicContent>> = {
  demo: demoContent,
  summary: summaryContent,
};
