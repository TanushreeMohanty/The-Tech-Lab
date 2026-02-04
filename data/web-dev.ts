//aggregates all Web Development topic contents
import { TopicContent } from "./content";

export const webDevContent: Record<string, Record<string, TopicContent>> = {
  html: {
    intro: {
      id: "intro",
      title: "HTML Fundamentals",
      description: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser.",
      blocks: [
        {
          subTitle: "The Document Skeleton",
          text: "Every HTML page starts with a doctype declaration and basic tags like <html>, <head>, and <body>.",
          code: "<!DOCTYPE html>\n<html>\n  <body>\n    <h1>The Tech Lab</h1>\n  </body>\n</html>",
        },
        {
          subTitle: "Text Elements",
          text: "Headings and paragraphs are the basic building blocks for content.",
          code: "<h1>Main Heading</h1>\n<p>This is a paragraph of text.</p>"
        }
      ],
    },
  },
  react: {
    hooks: {
      id: "hooks",
      title: "React Hooks",
      description: "Hooks allow you to use state and other React features without writing a class, making your code cleaner and more reusable.",
      blocks: [
        {
          subTitle: "useState Hook",
          text: "The useState hook lets you add React state to functional components.",
          code: "const [count, setCount] = useState(0);\n\nreturn (\n  <button onClick={() => setCount(count + 1)}>\n    Count is {count}\n  </button>\n);",
        },
        {
          subTitle: "useEffect Hook",
          text: "UseEffect is used for side effects like data fetching or manual DOM updates.",
          code: "useEffect(() => {\n  console.log('Component mounted');\n}, []);"
        }
      ],
    },
  },
};