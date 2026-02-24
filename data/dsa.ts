import { TopicContent } from "./content";
import { demoContent } from "./DSA/demo-content";
import { summaryContent } from "./DSA/summary";
import { arrayContent } from "./DSA/array";
import { leetcodequesContent } from "./DSA/leetcodeques";
import { complexityContent } from "./DSA/complexity";

export const dsaContent: Record<string, Record<string, TopicContent>> = {
  demo: demoContent,
  summary: summaryContent,
  array: arrayContent,
  leetcodeques: leetcodequesContent,
  complexity: complexityContent,
};
