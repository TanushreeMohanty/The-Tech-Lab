import { TopicContent } from "./content";

export const gitContent: Record<string, TopicContent> = {
  intro: {
    id: "intro",
    title: "Introduction to Git and GitHub",
    description:
      "Learn the basics of Git and GitHub, essential tools for version control and collaboration in software development.",
    blocks: [
      {
        subTitle: "What is Git?",
        text: "Git is a free and open-source version control system designed to manage code efficiently.",
        list: [
          "Free & Open Source Version Control System",
          "Tools that help to track changes in code",
        ],
        code: "git --version",
        outputCode: "git version 2.x.x",
      },
      {
        subTitle: "What is GitHub?",
        text: "GitHub is a cloud-based hosting service that allows developers to manage and store their Git repositories online.",
        list: [
          "Website where we host repositories online",
          "Facilitates collaboration and remote backup",
        ],
        code: "# No direct code, but often used with remote commands\ngit remote add origin <url>",
        outputCode: "Remote repository linked",
      },
      {
        subTitle: "Understanding README.md",
        text: "A README file is used to provide a detailed description of the project, typically written in Markdown.",
        list: [
          "README: Represents the project documentation",
          ".md: Stands for Markdown file extension",
        ],
        code: "# Project Title\nThis is a sample markdown file description.",
        outputCode: "Rendered documentation on GitHub",
      },
    ],
  },
  commands: {
    id: "commands",
    title: "Git Commands",
    description:
      "Explore essential Git commands for managing your repositories and collaborating with others.",
    blocks: [
      {
        subTitle: "Installation and Setup",
        text: "First, verify your Git installation, then configure your global identity to track your contributions accurately.",

        code: '# Check the installed version of Git\ngit --version\n\n# Set your name globally for all repositories\ngit config --global user.name "My Name"\n\n# Set your email globally for all repositories\ngit config --global user.email "someone@email.com"\n\n# List all configuration settings to verify changes\ngit config --list',
        outputCode:
          "git version 2.24.3 (Apple Git-128)\nuser.name=Delta Student\nuser.email=deltastudent@apnacollege.in",
      },
      {
        subTitle: "Core Concept",
        text: "Brief explanation of what this demo topic covers.",
        // list: ["Key feature one", "Important observation two"],
        code: "print('Demo 1 is active')",
        outputCode: "Demo 1 is active",
      },
    ],
  },
  dt1: {
    id: "dt1",
    title: "Demo Topic 1",
    description:
      "This is a demonstration of the first subtopic in the new section.",
    blocks: [
      {
        subTitle: "Core Concept",
        text: "Brief explanation of what this demo topic covers.",
        list: ["Key feature one", "Important observation two"],
        code: "print('Demo 1 is active')",
        outputCode: "Demo 1 is active",
      },
    ],
  },
  dt2: {
    id: "dt2",
    title: "Demo Topic 2",
    description: "Second demonstration subtopic for testing layout and flow.",
    blocks: [
      {
        subTitle: "Advanced Logic",
        text: "Detailed description of the second demo topic.",
        code: "# Logic for demo 2\nresult = 10 * 10\nprint(result)",
        outputCode: "100",
      },
    ],
  },
};
