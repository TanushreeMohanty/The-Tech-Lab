//main data content file aggregating all topic contents
import { webDevContent } from "./web-dev";
import { aiMlContent } from "./ai-ml";

// Define a Block for multiple content pieces on one page
export type ContentBlock = {
  subTitle?: string;
  text: string;
  code?: string;
  outputImage?: string;
};

export type TopicContent = {
  id: string;
  title: string;
  description: string;
  blocks: ContentBlock[]; // Changed from individual fields to an array
};

// Combine all content into one searchable record
export const labData: Record<string, Record<string, Record<string, TopicContent>>> = {
  "web-development": webDevContent,
  "ai-ml": aiMlContent,
};

// Sidebar Navigation structure
export const navigation = [
//   {
//     id: "web-development",
//     title: "Web Development",
//     subsections: [
//       { 
//         id: "html", 
//         title: "HTML", 
//         topics: [
//           { id: "intro", label: "Intro" }
//         ] 
//       },
//       { 
//         id: "react", 
//         title: "React", 
//         topics: [
//           { id: "hooks", label: "Hooks" }
//         ] 
//       },
//     ],
//   },
  {
    id: "ai-ml",
    title: "AI / ML",
    subsections: [
      { 
        id: "python", 
        title: "Python", 
        topics: [
          { id: "abc", label: "Basics" }, //label is topic title shown in sidebar
          { id: "data-types", label: "Data Types" }
        ] 
      },
    //   {
    //     id: "data-science",
    //     title: "Data Science",
    //     topics: [
    //       { id: "matplotlib-basics", label: "Matplotlib" },
    //       { id: "pandas-intro", label: "Pandas" }
    //     ]
    //   }
    ],
  },
];