import { TopicContent } from "./content";
import { demoContent } from "./Language/demo-content";
import { javaBasicsContent } from "./Language/java";

export const langContent: Record<string, Record<string, TopicContent>> = {
  demo: demoContent, 
  java:javaBasicsContent,
};
