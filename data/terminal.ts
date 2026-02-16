import { TopicContent } from "./content";

// Nested structure: Record<subsectionId, Record<topicId, TopicContent>>
export const terminalContent: Record<string, Record<string, TopicContent>> = {
  terminal: {
    intro: {
      id: "intro",
      title: "Terminal Basics",
      description: "Learn the basics of using the terminal.",
      blocks: [
        {
          subTitle: "Introduction to The Terminal",
          text: "The terminal is a text input and output environment used to interact with the computer's operating system directly through commands.",
          list: [
            "Essential for Git and programming workflows",
            "Provides increased speed and efficiency for developers",
            "Offers deeper access to system-level configurations and tools",
          ],
        },
        {
          subTitle: " Different Terms",
          text: "There are various terms used to describe command-line interfaces and the programs that run within them.",
          list: [
            "Command Line: Interface using textual commands (Windows centric)",
            "Terminal: A type of command line (Mac centric)",
            "Console: Interface used to work with your computer",
            "Shell: A program running on the terminal",
            "Bash & Z-Shell: Popular shell programs for Mac OS and Linux",
          ],
        },
      ],
    },
    commands: {
      id: "commands",
      title: "Terminal Commands",
      description: "Learn some common terminal commands to get started.",
      blocks: [
        {
          subTitle: "Basics",
          text: "Basic commands allow users to navigate the file system and manage the terminal display.",
          list: [
            "ls: list files (show my files)",
            "pwd: print working directory (where am i?)",
            "clear: clear screen",
          ],
          code: "ls \npwd \nclear",
          outputCode:
            "Desktop  Documents  Downloads  Library  Movies \n/Users/tanu \n[Screen Cleared]",
        },
        {
          subTitle: "Navigation",
          text: "Navigation commands allow you to move inside and outside of various directories.",
          list: [
            "cd: change directory",
            "cd [directory name]: move into a specific folder",
            "cd .. : acts as a back button to move up one directory level",
          ],
          code: "cd Desktop",
          outputCode: " [Terminal now in Desktop directory]",
        },
        {
          subTitle: "Paths: Absolute & Relative",
          text: "Paths define the location of a file or directory within the file system, categorized into absolute and relative types.",
          list: [
            "Relative Path: A path starting from the current working directory (e.g., cd Desktop/Delta)",
            "Absolute Path: A full path starting from the root directory (e.g., cd /Users/tanu/Desktop)",
            "/ : root directory of the system",
            "~ : home directory of the current user",
          ],
          code: "cd /Users/tanu/Desktop",
          outputCode: " [Terminal now in Desktop directory]",
        },
        {
          subTitle: "mkdir Command",
          text: "The mkdir command allows you to create new folders (directories) within your current location or a specified path.",
          list: ["mkdir: Stands for 'make directory'"],
          code: "mkdir college_projects",
          outputCode:
            " [New directory 'college_projects' created in the current location]",
        },
        {
          subTitle: "Manual Commands",
          text: "The manual command provides a detailed user manual for any command you want to learn about.",
          list: [
            "man [command]: Displays the documentation for that specific command",
            "man ls: Gives info about the ls command",
            "man mkdir: Gives info about the mkdir command",
          ],
          code: "man ls",
          outputCode: "LS(1) User Commands...",
        },
        {
          subTitle: "Flags",
          text: "Flags are additional characters passed with commands to modify or extend their default behavior.",
          list: [
            "ls -l: Lists files in a long format with extra details like permissions and size",
            "ls -a: Lists all files, including hidden ones starting with a dot",
            "ls -la: Combines both flags to show all files in a long-form list",
          ],
          code: "ls -la",
          outputCode: "drwxr-xr-x  2 user  group  64 Feb 16 12:48 .",
        },
        {
          subTitle: "Touch Command",
          text: "The touch command is a standard utility used in the terminal to create new, empty files quickly.",
          list: [
            "Used to create files with any extension (e.g., .html, .js, .txt)",
            "Can create multiple files at once",
            "If the file already exists, it updates the timestamp without changing the content",
          ],
          code: "touch index.html app.js abc.txt",
          outputCode: " [Three new files created: index.html, app.js, abc.txt]",
        },
        {
          subTitle: "Deleting Files & Folders",
          text: "Commands for removing data vary based on whether you are deleting a file or a directory.",
          list: [
            "rm: removes files",
            "rmdir: removes empty folders",
            "rm -rf: removes any folder and its contents recursively",
            "-r: stands for recursive (deletes folder and everything inside)",
            "-f: stands for force (ignores non-existent files and never prompts)",
          ],
          code: "rm -rf old_folder",
          outputCode: " [old_folder and all its contents removed]",
        },
      ],
    },
    dt1: {
      id: "dt1",
      title: "Demo Topic 1",
      description: "abc",
      blocks: [
        {
          subTitle: "abc",
          text: "abc",
          list: ["abc", "abc", "abc"],
          code: "abc",
          outputCode: "abc",
        },
        {
          subTitle: "abc",
          text: "abc",
          list: ["abc", "abc", "abc"],
          code: "abc",
          outputCode: "abc",
        },
      ],
    },
  },
};
