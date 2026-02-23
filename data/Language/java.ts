import { title } from "process";
import { TopicContent } from "../content";

export const javaBasicsContent: Record<string, TopicContent> = {
  intro: {
    id: "intro",
    title: "Introduction to Java",
    description: "About java",
    blocks: [
      {
        subTitle: "The Main Entry Point",
        text: "In Java, every application must contain a main method. It serves as the starting point for the program's execution. As shown in your code snippet, this method resides inside a class.",
        list: [
          "The keyword 'public' makes the method accessible from outside the class.",
          "The keyword 'void' indicates that the method does not return any value.",
          "In standard Java applications, the main method signature typically requires 'static' and 'String[] args' parameters to run correctly.",
        ],
        code: 'public class Main {\n  public void main() {\n    // Code logic goes here\n    System.out.println("Main method executed");\n  }\n}',
        outputCode: "Main method executed",
      },
      {
        subTitle: "Java Naming Conventions",
        text: "Standard naming patterns used in Java to distinguish between different types of identifiers, ensuring code readability and consistency.",
        list: [
          "Classes use PascalCase, where every word starts with an uppercase letter",
          "Methods use camelCase, starting with a lowercase letter and capitalizing subsequent words",
          "Following these conventions helps differentiate between class names and method calls at a glance",
        ],
        code: "public class MyClass {\n    public void myMethod() {\n        // Code goes here\n    }\n}",
        outputCode: "// Standard naming applied",
      },
    ],
  },
};
