//main data content file aggregating all topic contents
import { webDevContent } from "./web-dev";
import { aiMlContent } from "./ai-ml";

// Define a Block for multiple content pieces on one page
export type ContentBlock = {
  subTitle?: string;
  text: string;
  code?: string;
  list?: string[]; // Add this line
  outputImage?: string;
  outputCode?: string; // Add this for text-based terminal outputs
};

export type TopicContent = {
  id: string;
  title: string;
  description: string;
  blocks: ContentBlock[]; // Changed from individual fields to an array
};

// Combine all content into one searchable record
export const labData: Record<
  string,
  Record<string, Record<string, TopicContent>>
> = {
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
          { id: "Basics", label: "Basics :)" }, //label is topic title shown in sidebar
          { id: "Operators", label: "Operators :)" },
          { id: "Cond", label: "Conditional Statements :)" },
          { id: "Loops", label: "Loops :)" },
          { id: "Functions", label: "Functions :)" },
          { id: "Strings", label: "Strings :)" },
          { id: "Lists", label: "Lists :)" },
          { id: "Tuples", label: "Tuples :)" },
          { id: "Dict", label: "Dictionaries :)" },
          { id: "Sets", label: "Sets :)" },
          { id: "OOPS", label: "OOPs" },
          { id: "FileHandling", label: "File Handling" },
          { id: "Questions", label: "Questions" },
          { id: "Rough", label: "Rough Work" },
        ],
      },
      {
        id: "about-data",
        title: "About This Data",
        topics: [{ id: "dt1", label: "Demo Topic 1" }],
      },
      {
        id: "python-libraries",
        title: "Python Libraries",
        topics: [
          { id: "numpy", label: "NumPy" },
          { id: "pandas", label: "Pandas" },
          { id: "matplotlib", label: "Matplotlib" },
          { id: "seaborn", label: "Seaborn" },
        ],
      },
      {
        id: "sql",
        title: "SQL",
        topics: [{ id: "dt1", label: "Demo Topic 1" }],
      },
      {
        id: "maths-for-ai",
        title: "Maths for AI",
        topics: [
          { id: "probability", label: "Probability" },
          { id: "linear-algebra", label: "Linear Algebra" },
          { id: "calculus", label: "Calculus" },
        ],
      },
      {
        id: "machine-learning",
        title: "Machine Learning",
        topics: [
          { id: "mlintro", label: "Introduction" },
          { id: "supervised", label: "Supervised Learning" },
          { id: "dt2", label: "Demo Topic 2" },
        ],
      },
      {
        id: "terminal",
        title: "Terminal ❤️",
        topics: [
          { id: "intro", label: " Basics :)" },
          { id: "commands", label: "Commands :)" },
        ],
      },
      {
        id: "git",
        title: "Git and GitHub",
        topics: [
          { id: "intro", label: "Introduction :)" },
          { id: "commands", label: "Commands" },
          { id: "dt1", label: "Demo Topic 1" }],
      },
      {
        id: "deep-learning",
        title: "Deep Learning",
        topics: [{ id: "dt1", label: "Demo Topic 1" }],
      },
      {
        id: "demo ",
        title: "Demo Section ❤️",
        topics: [
          { id: "dt1", label: "Demo Topic 1" },
          { id: "dt2", label: "Demo Topic 2" },
        ],
      },
    ],
  },
];
