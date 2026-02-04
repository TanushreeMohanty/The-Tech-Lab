import { TopicContent } from "./content";

export const webDevContent: Record<string, Record<string, TopicContent>> = {
  html: {
    intro: {
      id: "intro",
      title: "HTML Fundamentals",
      description: "Learning the skeleton of the web.",
      code: "<h1>Hello World</h1>",
    },
  },
  react: {
    hooks: {
      id: "hooks",
      title: "React Hooks",
      description: "Managing state and side effects in functional components.",
      code: "const [state, setState] = useState();",
    },
  },
};