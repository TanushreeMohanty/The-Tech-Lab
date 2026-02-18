import { TopicContent } from "./content";
import img from ".././app/images/image.png";
import lifecycle from ".././app/images/lifecycle.png";
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
      },
      {
        subTitle: "What is GitHub?",
        text: "GitHub is a cloud-based hosting service that allows developers to manage and store their Git repositories online.",
        list: [
          "Website where we host repositories online",
          "Facilitates collaboration and remote backup",
        ],
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
      },
      {
        subTitle: "Basic Commands",
        text: "Learn the essential commands for managing your local repository and tracking file changes.",
        referenceImage: lifecycle,
        code: "# Clone a repository from a remote server to your local machine\ngit clone <some_link>\n\n# Display the current state of the working directory and staging area\ngit status",
      },
      {
        subTitle: "Repository Initialization & Remote Setup",
        text: "Fundamental Git commands to initialize repositories, track file states, manage remotes, and synchronize local-to-remote workflows.",
        code: '# Create a new local Git repository\ngit init\n\n# Link your local repository to a remote server\ngit remote add origin <link>\n\n# Verify the connected remote repository\ngit remote -v\n\n# Rename the default branch to "main"\ngit branch -M main\n\n# Add new or changed files to the Git staging area\ngit add <file_name>\n\n# Record the staged changes with a descriptive message\ngit commit -m "some message"\n\n# Upload local repository content to the remote repository\ngit push origin main',
      },
      {
        subTitle: "Branching and Collaboration",
        text: "Navigate between different versions of your project using branches and manage integration through Pull Requests and conflict resolution.",
        list: [
          "Pull Request - notify others about changes pushed to a branch",
          "Merge Conflict - resolve differences when Git cannot auto-merge commits",
        ],
        code: '# Check the current branch you are working on\ngit branch\n\n# Rename the current branch to "main"\ngit branch -M main\n\n# Create and immediately switch to a new branch\ngit checkout -b feature-alpha\n\n# Navigate to an existing branch\ngit checkout main\n\n# Push the new branch and link it to the remote server\ngit push --set-upstream origin feature-alpha\n\n# Delete a branch once work is merged\ngit branch -d feature-alpha\n',
      },
      {
        subTitle: "Fixing Mistakes",
        text: "Use reset commands to undo changes at different stages, from the staging area to committed history.",
        code: "# Unstage specific files from the staging area\ngit reset <file_name>\n\n# Undo the most recent commit while keeping changes in working directory\ngit reset HEAD~1\n\n# Reset the repository to a specific point in history\ngit reset <commit_hash>\n\n# Force reset and discard all local changes permanently\ngit reset --hard <commit_hash>",
      },
      {
        subTitle: "Forking & Collaboration",
        text: "Forking creates a personal copy of someone else's project on your account, allowing you to freely experiment with changes without affecting the original repository.",
        code: '# After forking on GitHub, download your personal copy to your local machine\ngit clone https://github.com/your-username/forked-repo.git\n\n# Add the original repository as an "upstream" remote to stay in sync\ngit remote add upstream https://github.com/original-owner/original-repo.git\n\n# Verify your remotes (you should see origin and upstream)\ngit remote -v\n\n# Fetch the latest updates from the original project\ngit fetch upstream\n\n# Note: Use Pull Requests to propose your changes back to the original project',
      },
    ],
  },
  shortcuts: {
    id: "shortcuts",
    title: "Git Shortcuts",
    description:
      "Discover useful Git shortcuts to enhance your workflow and efficiency when managing repositories.",
    blocks: [
      {
        subTitle: "Connecting Local to GitHub",
        text: "Follow these steps to initialize a local repository and establish a connection with a remote project on GitHub.",
        code: 'git init\ngit remote add origin https://github.com/Tanu/abc.git\ngit remote -v\ngit pull origin main\ngit branch\ngit branch -m main\ngit add .\ngit commit -m "msg"\ngit push origin main',
      },
    ],
  },
};
