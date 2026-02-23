import { TopicContent } from "../content";

export const javaBasicsContent: Record<string, TopicContent> = {
  intro: {
    id: "intro",
    title: "Introduction to Java",
    description:
      "Foundational concepts and syntax of the Java programming language.",
    blocks: [
      {
        subTitle: "Java Language Syntax",
        text: "The set of rules defining how Java programs must be structured. Java is a strictly typed, semicolon-terminated language.",
        list: [
          "Case Sensitivity: 'Variable' and 'variable' are distinct identifiers.",
          "Semicolons: Every statement must end with a semicolon (;) to terminate.",
          "Braces: Curly braces {} define the scope of classes, methods, and control blocks.",
          "Main Method: The entry point of any standalone Java application.",
        ],
        code: 'public class SyntaxDemo {\n    public static void main(String[] args) {\n        int score = 100;\n        System.out.println("Final Score: " + score);\n    }\n}',
        outputCode: "Final Score: 100",
      },
      {
        subTitle: "Data Types & Variables",
        text: "Java is statically typed, meaning all variables must be declared with a specific data type before they can be used.",
        list: [
          "Primitive Types: Includes int (integers), double (decimals), boolean (true/false), and char (characters).",
          "Reference Types: Includes Strings, Arrays, and User-defined Objects.",
          "Type Safety: Prevents illegal operations between incompatible types at compile time.",
        ],
        code: 'int age = 25;\ndouble price = 19.99;\nboolean isJavaFun = true;\nString greeting = "Hello!";',
        outputCode: "// Variables initialized with specific types",
      },
    ],
  },
  controlstat: {
    id: "controlstat",
    title: "Control Structures",
    description: "Mechanisms that manage the execution flow of the program.",
    blocks: [
      {
        subTitle: "Sequential Execution",
        text: "The default mode where instructions are processed line-by-line from top to bottom.",
        list: [
          "Standard execution path for procedural logic.",
          "No jumping or skipping; each line waits for the previous one to finish.",
        ],
        code: 'int x = 10;\nint y = 20;\nint result = x * y;\nSystem.out.println("Result: " + result);',
        outputCode: "Result: 200",
      },
      {
        subTitle: "Selection (Conditionals)",
        text: "Allows the program to choose different execution paths based on boolean conditions or specific value matches.",
        list: [
          "If-Else: Primary branching tool used for range-based logic and complex boolean expressions.",
          "Switch: A more readable alternative to multiple if-else statements when comparing one variable against several fixed values.",
          "Default Case: In a switch, the 'default' block acts like an 'else' to handle any unmatched cases.",
        ],
        code: '// 1. If-Else Example\nint temperature = 30;\nif (temperature > 25) {\n    System.out.println("Hot");\n} else {\n    System.out.println("Cool");\n}\n\n// 2. Switch Example\nint day = 2;\nswitch (day) {\n    case 1:\n        System.out.println("Monday");\n        break;\n    case 2:\n        System.out.println("Tuesday");\n        break;\n    default:\n        System.out.println("Other Day");\n}',
        outputCode: "Hot\nTuesday",
      },
      {
        subTitle: "Iteration (Loops)",
        text: "Used to execute a block of code repeatedly until a specific condition is met. Java provides three primary loop types to handle different logic requirements.",
        list: [
          "For Loop: Best for definite iteration where the start, condition, and increment are defined in one line.",
          "While Loop: Ideal for indefinite iteration where the block runs as long as the condition remains true.",
          "Do-While: Similar to while, but the condition is checked after execution, ensuring the code runs at least once.",
        ],
        code: '// 1. For Loop\nfor (int i = 1; i <= 2; i++) {\n    System.out.println("For: " + i);\n}\n\n// 2. While Loop\nint j = 1;\nwhile (j <= 2) {\n    System.out.println("While: " + j);\n    j++;\n}\n\n// 3. Do-While Loop\nint k = 1;\ndo {\n    System.out.println("Do-While: " + k);\n    k++;\n} while (k <= 2);',
        outputCode:
          "For: 1\nFor: 2\nWhile: 1\nWhile: 2\nDo-While: 1\nDo-While: 2",
      },
    ],
  },
  func: {
    id: "func",
    title: "Functions & Methods",
    description: "Modular blocks of code designed to perform specific tasks.",
    blocks: [
      {
        subTitle: "Built-in Methods",
        text: "Standard methods provided by the Java Class Library to handle common logic.",
        list: [
          "Math Class: Tools for trigonometry, logarithms, and basic math (Math.max, Math.sqrt).",
          "String Class: Methods for text manipulation (toUpperCase, contains, replace).",
        ],
        code: 'String name = "java";\nSystem.out.println(name.toUpperCase());\nSystem.out.println(Math.pow(2, 3));',
        outputCode: "JAVA\n8.0",
      },
      {
        subTitle: "User-Defined Methods",
        text: "Custom functions created to keep code 'DRY' (Don't Repeat Yourself).",
        list: [
          "Parameters: Inputs passed into the method.",
          "Return Value: The output sent back to the caller.",
          "Modifiers: Keywords like 'public' and 'static' that define access and behavior.",
        ],
        code: "public static int multiply(int a, int b) {\n    return a * b;\n}\n// Calling the method\nint result = multiply(4, 5);",
        outputCode: "result is 20",
      },
      {
        subTitle: "Lambdas & Higher-Order Functions",
        text: "Modern Java features that allow for functional-style programming.",
        list: [
          "Lambdas: Short blocks of code that take in parameters and return a value.",
          "Functional Interfaces: Interfaces with a single abstract method (e.g., Predicate, Consumer).",
        ],
        code: 'List<Integer> nums = Arrays.asList(1, 2, 3);\nnums.forEach(n -> System.out.print(n * 2 + " "));',
        outputCode: "2 4 6 ",
      },
    ],
  },
  oops: {
    id: "oops",
    title: "Object-Oriented Programming",
    description:
      "The core paradigm of Java: organizing software as a collection of objects.",
    blocks: [
      {
        subTitle: "Classes and Objects",
        text: "The fundamental building blocks of OOP. A class is the conceptual blueprint, while an object is the actual entity that exists in memory.",
        list: [
          "Fields (Attributes): Represent the data or state (e.g., brand, price).",
          "Methods (Behaviors): Represent the actions (e.g., makeCall, sendSMS).",
          "Instantiation: The process of creating an object using the 'new' keyword.",
        ],
        code: 'class Phone {\n    String model;\n    Phone(String m) { this.model = m; }\n    void ring() { System.out.println(model + " is ringing..."); }\n}\n\n// Instantiation\nPhone myPhone = new Phone("Pixel 8");\nmyPhone.ring();',
        outputCode: "Pixel 8 is ringing...",
      },
      {
        subTitle: "Encapsulation",
        text: "Protects data by hiding internal implementation details. It ensures that an object’s state cannot be corrupted by direct external access.",
        list: [
          "Private Access: Variables are restricted to the class itself.",
          "Public API: Access is provided only through public Getters (to read) and Setters (to update).",
          "Validation: Setters allow you to validate data before it is saved (e.g., checking if age > 0).",
        ],
        code: 'class User {\n    private String name;\n\n    public void setName(String n) {\n        if(n != null) this.name = n;\n    }\n    public String getName() {\n        return this.name;\n    }\n}\n\nUser u = new User();\nu.setName("Alex");\nSystem.out.println(u.getName());',
        outputCode: "Alex",
      },
      {
        subTitle: "Inheritance (Types)",
        text: "Allows a subclass to inherit fields and methods from a superclass. Java supports Single, Multilevel, and Hierarchical inheritance (but not Multiple Inheritance via classes).",
        list: [
          "Single: One class inherits from one parent.",
          "Multilevel: A class inherits from a child class (Grandparent -> Parent -> Child).",
          "Hierarchical: Multiple classes inherit from the same parent.",
          "Reusability: Subclasses use the 'extends' keyword to reuse parent code.",
        ],
        code: 'class Animal { void eat() { System.out.println("Eating..."); } }\n\nclass Dog extends Animal {\n    void bark() { System.out.println("Barking..."); }\n}\n\nDog d = new Dog();\nd.eat(); // Inherited\nd.bark(); // Own method',
        outputCode: "Eating...\nBarking...",
      },
      {
        subTitle: "Polymorphism (Types)",
        text: "The ability of an object to take many forms. It allows one interface to be used for a general class of actions.",
        list: [
          "Static (Compile-time): Method Overloading—Same name, different parameters.",
          "Dynamic (Runtime): Method Overriding—Subclass provides a specific version of a parent method.",
          "Upcasting: Reference of a parent class pointing to a child object.",
        ],
        code: '// Overloading (Static)\nint add(int a, int b) { return a + b; }\nint add(int a, int b, int c) { return a + b + c; }\n\n// Overriding (Dynamic)\nclass Shape { void draw() { System.out.println("Shape"); } }\nclass Circle extends Shape {\n    @Override void draw() { System.out.println("Circle"); }\n}\n\nShape s = new Circle();\ns.draw();',
        outputCode: "Circle",
      },
      {
        subTitle: "Abstraction (Types)",
        text: "Simplifies complex reality by modeling classes appropriate to the problem. It highlights 'what' an object does rather than 'how'.",
        list: [
          "Partial Abstraction: Abstract Classes (can have variables and concrete methods).",
          "Full Abstraction: Interfaces (all methods are implicitly abstract until Java 8).",
          "Contract: Interfaces define a set of methods that a class MUST implement.",
        ],
        code: 'interface Payment { void process(); }\n\nclass UPI implements Payment {\n    public void process() { System.out.println("UPI Payment Processed"); }\n}\n\nPayment p = new UPI();\np.process();',
        outputCode: "UPI Payment Processed",
      },
    ],
  },
};
