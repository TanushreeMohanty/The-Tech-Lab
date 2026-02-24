import { TopicContent } from "../content";
import typesofds3 from "../../app/images/typesofds3.png";
import tc1 from "../../app/images/tc1.png";
import tc2 from "../../app/images/tc2.png";
import tc3 from "../../app/images/tc3.png";
import tc4 from "../../app/images/tc4.png";
import tc5 from "../../app/images/tc5.png";
import tc6 from "../../app/images/tc6.png";
// Assuming you add an image for n log n later
import bigo1 from "../../app/images/bigo1.png";
import bigo2 from "../../app/images/bigo2.png";
import sc from "../../app/images/sc.png";

export const complexityContent: Record<string, TopicContent> = {
  bigo: {
    id: "bigo",
    title: "Big O Notation",
    description: "The mathematical language we use to describe how long an algorithm takes to run relative to the input size.",
    blocks: [
      {
        subTitle: "What is it?",
        text: "Big O doesn't measure seconds; it measures the number of operations. It describes the 'Worst Case Scenario' so you know your code's upper speed limit.",
        referenceImage: bigo1,
      },
      {
        subTitle: "Complexity Comparison Table",
        text: "A quick reference to see which complexities are 'Good' (like Constant or Logarithmic) and which are 'Horrible' (like Exponential).",
        referenceImage: bigo2,
      },
    ],
  },
  timecomp: {
    id: "timecomp",
    title: "Time Complexity",
    description: "How the runtime of your program scales as the input (n) grows larger.",
    blocks: [
      {
        subTitle: "O(1) - Constant Time",
        text: "The fastest! No matter if you have 10 items or 10 million, it takes the same time. Example: Accessing an array element by its index.",
        referenceImage: tc3,
      },
      {
        subTitle: "O(log n) - Logarithmic",
        text: "Divide and Conquer. Every step cuts the work in half. Example: Binary Search in a sorted array.",
        referenceImage: tc2,
      },
      {
        subTitle: "O(n) - Linear",
        text: "Work grows 1-to-1 with the input. Example: Finding a specific number in an unsorted array using a single loop.",
        referenceImage: tc1,
      },
      {
        subTitle: "O(n log n) - Linearithmic",
        text: "The standard speed for efficient sorting. Example: Arrays.sort() in Java (Dual-Pivot Quicksort).",
        // referenceImage: [Add image tag here if available]
      },
      {
        subTitle: "O(n²) - Quadratic",
        text: "A loop inside a loop. If you double the input, the time quadruples! Example: Checking every pair in an array.",
        referenceImage: tc4,
      },
      {
        subTitle: "O(2ⁿ) - Exponential",
        text: "Extremely slow. Growth doubles with every new element. Example: Recursive Fibonacci or solving the Tower of Hanoi.",
        referenceImage: tc5,
      },
      {
        subTitle: "O(n!) - Factorial",
        text: "The slowest common complexity. Example: Finding every possible permutation of a string.",
        referenceImage: tc6,
      },
    ],
  },
  spacecomp: {
    id: "spacecomp",
    title: "Space Complexity",
    description: "Measures the extra memory (RAM) your algorithm needs to run.",
    blocks: [
      {
        subTitle: "Understanding Space",
        text: "If you create a new array of size N to solve a problem, your space complexity is O(n). If you only use a few variables, it's O(1).",
        referenceImage: sc,
      },
    ],
  },
};