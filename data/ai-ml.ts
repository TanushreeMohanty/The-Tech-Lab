//aggregates all AI/ML topic contents
import { TopicContent } from "./content";
import { demoContent } from "./demo-content";
import { mlContent } from "./ml-content";
import { pythonContent } from "./python";
import { terminalContent } from "./terminal";
import { gitContent } from "./git";

export const aiMlContent: Record<string, Record<string, TopicContent>> = {
  // Python is already modularized in python.ts
  python: pythonContent,
  demo: demoContent, // This key MUST match the 'id' in your navigation
  "machine-learning": mlContent["machine-learning"], // Spread or map the ML subsection
  terminal: terminalContent["terminal"], // Done :)
  git: gitContent,
};
