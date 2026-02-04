//aggregates all AI/ML topic contents
import { TopicContent } from "./content";
import { pythonContent } from "./python";

export const aiMlContent: Record<string, Record<string, TopicContent>> = {
  // Python is already modularized in python.ts
  python: pythonContent,

  "data-science": {
    "matplotlib-basics": {
      id: "matplotlib-basics",
      title: "Matplotlib Basics",
      description: "Master the foundation of data visualization by understanding the Figure and Axes hierarchy.",
      blocks: [
        {
          subTitle: "Simple Line Plot",
          text: "The basic unit of a plot is the figure. Here we plot simple coordinates to visualize a trend.",
          code: "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [10, 20, 30])\nplt.title('Basic Trend')\nplt.show()",
          outputImage: "/outputs/mpl-demo.png", 
        },
        {
          subTitle: "Customizing Charts",
          text: "You can add labels, grid lines, and legends to make your charts professional-grade.",
          code: "plt.xlabel('Time')\nplt.ylabel('Value')\nplt.grid(True)"
        }
      ],
    },
    "pandas-intro": {
      id: "pandas-intro",
      title: "Pandas DataFrames",
      description: "Pandas is essential for structured data manipulation, similar to how you manage state in React.",
      blocks: [
        {
          subTitle: "Creating a DataFrame",
          text: "DataFrames are 2D labeled data structures with columns of potentially different types.",
          code: "import pandas as pd\ndf = pd.DataFrame({'Tech': ['React', 'Python'], 'Level': [10, 9]})\nprint(df)",
        },
        {
          subTitle: "Filtering Data",
          text: "You can easily select specific rows or columns based on conditions.",
          code: "high_level = df[df['Level'] > 9]\nprint(high_level)"
        }
      ],
    }
  }
};