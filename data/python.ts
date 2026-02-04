//aggregates all Python topic contents for AI/ML section
import { TopicContent } from "./content";

export const pythonContent: Record<string, TopicContent> = {
  Basics: {
    id: "Basics",
    title: "Python Basic Syntax & Structures",
    description:
      "Python is designed for readability and uses indentation to define code blocks, which is essential for building clean software at the Indian Aviation Academy.",
    blocks: [
      //DONE
      {
        subTitle: "Character Set",
        text: "The character set is the set of valid characters that a language can recognize. Python supports the full range of ASCII and Unicode characters.",
        list: [
          "Letters: A-Z, a-z",
          "Digits: 0-9",
          "Special Symbols: +, -, *, /, %, etc.",
          "Whitespaces: blank space, tab, newline, etc.",
          "All ASCII & Unicode chars are supported in data & literals",
        ],
      },

      

      {
        subTitle: "abc",
        text: "abc",
        code: "def greet_lab():\n    message = 'Welcome to the AI/ML Section'\n    print(message)\n\ngreet_lab()",
        outputCode:""
      },
    ],
  },
  Built: {
    id: "Built",
    title: "Python Built-in Functions",
    description:
      "Python provides a rich set of built-in functions that are always available for use. These functions perform common tasks and can be used without importing any additional modules.",
    blocks: [
      {
  subTitle: "Input and Output Functions",
  text: "Python uses input() to take data from the user and print() to display information. Since input() always returns a string, we use type casting like int() or float() for numerical data.",
  list: [
    "input(): Reads a line from the console and returns it as a string.",
    "print(): Outputs variables or strings to the terminal.",
    "f-strings: Use f'{variable}' for clean and modern output formatting.",
    "Type Casting: Convert string input to numbers using int() or float()."
  ],
  code: "# Taking user input\nname = input('Enter your name: ')\nyear = int(input('Enter your B.Tech year: '))\n\n# Displaying formatted output\nprint(f'Hello {name}! System ready for Year {year} logs.')",
  outputCode: "Enter your name: Student\nEnter your B.Tech year: 3\nHello Student! System ready for Year 3 logs."
},
    ],
  },

};
