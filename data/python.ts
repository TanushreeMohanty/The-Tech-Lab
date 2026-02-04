//aggregates all Python topic contents for AI/ML section
import { TopicContent } from "./content";

export const pythonContent: Record<string, TopicContent> = {
  "abc": { 
    id: "abc",
    title: "Python Basic Syntax & Structures",
    description: "Python is designed for readability and uses indentation to define code blocks, which is essential for building clean software at the Indian Aviation Academy.",
    blocks: [
      {
        subTitle: "Function Definition",
        text: "Functions are the building blocks of modular Python code. Here is a basic greeting function.",
        code: "def greet_lab():\n    message = 'Welcome to the AI/ML Section'\n    print(message)\n\ngreet_lab()",
      },
      {
        subTitle: "Indentation Rules",
        text: "Unlike other languages you've used like JavaScript or C, Python uses whitespace to define scope.",
        code: "if True:\n    print('This is indented')\n    if 5 > 2:\n        print('Nested indentation')"
      }
    ]
  },
  "data-types": {
    id: "data-types",
    title: "Python Data Types & Structures",
    description: "Understanding core data structures is vital for the data science tracks you are pursuing, including NumPy and Pandas.",
    blocks: [
      {
        subTitle: "Lists and Indexing",
        text: "Lists are ordered collections that are highly flexible for storing technical stacks.",
        code: "tech_stack = ['NumPy', 'Pandas', 'Matplotlib']\nprint(f'Learning: {tech_stack[0]}')",
      },
      {
        subTitle: "Dictionaries (Key-Value Pairs)",
        text: "Dictionaries allow you to store data in a structured format, similar to the JSON you use in React.",
        code: "project_info = {\n    'name': 'SmartSpend Pro',\n    'version': 5.4,\n    'active': True\n}\nprint(project_info['name'])"
      }
    ]
  }
};