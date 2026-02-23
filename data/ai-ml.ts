//aggregates all AI/ML topic contents
import { TopicContent } from "./content";
import { demoContent } from "./AIML/demo-content";
import { mlContent } from "./AIML/ml-content";
import { pythonContent } from "./AIML/python";
import { terminalContent } from "./AIML/terminal";
import { gitContent } from "./AIML/git";

export const aiMlContent: Record<string, Record<string, TopicContent>> = {
  // Python is already modularized in python.ts
  python: pythonContent,
  demo: demoContent, // This key MUST match the 'id' in your navigation
  "machine-learning": mlContent["machine-learning"], // Spread or map the ML subsection
  terminal: terminalContent["terminal"], // Done :)
  git: gitContent,
};
