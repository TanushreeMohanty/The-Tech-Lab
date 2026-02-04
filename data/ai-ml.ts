import { TopicContent } from "./content";

export const aiMlContent: Record<string, Record<string, TopicContent>> = {
  python: {
    // Changed ID from 'basic-syntax' to 'basics' to match your sidebar link
    "basics": {
      id: "basics",
      title: "Python Basic Syntax",
      description: "Python uses indentation to define code blocks, making it one of the most readable programming languages for engineers.",
      code: "def greet_lab():\n    message = 'Welcome to the AI/ML Section'\n    print(message)\n\ngreet_lab()",
    },
    "data-types": {
      id: "data-types",
      title: "Python Data Types",
      description: "Understanding lists, dictionaries, and tuples is the first step toward efficient data manipulation.",
      code: "tech_stack = ['NumPy', 'Pandas', 'Matplotlib']\nprint(f'Learning: {tech_stack[0]}')",
    }
  },
  "data-science": {
    "matplotlib-basics": {
      id: "matplotlib-basics",
      title: "Matplotlib Basics",
      description: "Visualizing data involves understanding the Figure and Axes hierarchy to create professional-grade charts.",
      code: "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [10, 20, 30])\nplt.show()",
      outputImage: "/outputs/mpl-demo.png", 
    },
    "pandas-intro": {
      id: "pandas-intro",
      title: "Pandas DataFrames",
      description: "Pandas is the primary tool for data manipulation in Python, allowing for easy handling of structured data.",
      code: "import pandas as pd\ndf = pd.DataFrame({'Tech': ['React', 'Python'], 'Level': [10, 9]})\nprint(df)",
    }
  }
};