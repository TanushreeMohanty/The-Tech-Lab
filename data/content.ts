import { webDevContent } from "./web-dev";
import { aiMlContent } from "./ai-ml";

export type TopicContent = {
  id: string;
  title: string;
  description: string;
  code?: string;
  outputImage?: string;
};

// Combine all content into one searchable record
export const labData: Record<string, Record<string, Record<string, TopicContent>>> = {
  "web-development": webDevContent,
  "ai-ml": aiMlContent,
};

// Sidebar Navigation structure
export const navigation = [
  {
    id: "web-development",
    title: "Web Development",
    subsections: [
      { 
        id: "html", 
        title: "HTML", 
        topics: [
          { id: "intro", label: "Intro" }
        ] 
      },
      { 
        id: "react", 
        title: "React", 
        topics: [
          { id: "hooks", label: "Hooks" }
        ] 
      },
    ],
  },
  {
    id: "ai-ml",
    title: "AI / ML",
    subsections: [
      { 
        id: "python", 
        title: "Python", 
        topics: [
          { id: "basics", label: "Basics" },
          { id: "data-types", label: "Data Types" } // Added to match ai-ml.ts
        ] 
      },
      {
        id: "data-science",
        title: "Data Science",
        topics: [
          { id: "matplotlib-basics", label: "Matplotlib" }, // Added to match ai-ml.ts
          { id: "pandas-intro", label: "Pandas" }           // Added to match ai-ml.ts
        ]
      }
    ],
  },
];