import { TopicContent } from "../content";
import typesofds from "../../app/images/typesofds.png";
export const summaryContent: Record<string, TopicContent> = {
  dsa1: {
    id: "dsa1",
    title: "Introduction",
    description:
      "An overview of how data is organized and stored to optimize software performance and memory usage.",
    blocks: [
      {
        subTitle: "What are Data Structures?",
        text: "Specialized formats for organizing, managing, and storing data to enable efficient access and modification. They are the building blocks of almost all software systems.",
        list: [
          "Linear Structures: Elements arranged in a sequence where each element is connected to its previous and next element (e.g., Arrays, Stacks).",
          "Non-Linear Structures: Data arranged in a hierarchical or interconnected manner (e.g., Trees, Graphs).",
          "Abstract Data Types (ADT): A model that defines the logical properties of data and operations (e.g., the 'Stack' concept) regardless of implementation.",
          "Efficiency: Measured using Big O notation for Time Complexity (processing speed) and Space Complexity (memory usage).",
        ],
      },
      {
        subTitle: "Importance of Data Structures",
        text: "Data structures are the foundation of modern algorithm design, providing a structured way to manage large-scale data efficiently.",
        list: [
          "Foundation for Algorithms: The choice of data structure directly determines the efficiency and design of the algorithm used to process it.",
          "Resource Optimization: Proper selection reduces both Time Complexity (execution speed) and Space Complexity (memory usage).",
          "Data Manageability: Enables complex operations like sorting, searching, and indexing which are vital for database development.",
          "Code Scalability: Effective structures allow software to handle increasing amounts of data without a significant drop in performance.",
        ],
      },
    ],
  },
  dsa2: {
    id: "dsa2",
    title: "Types of Data Structures",
    description:
      "A comprehensive categorization of data structures into linear and non-linear types, focusing on their memory organization and operational logic.",
    blocks: [
      {
        subTitle: "Basic Linear Data Structures",
        text: "Fundamental structures where data elements are arranged sequentially. These are the primary tools for managing simple collections of data.",
        list: [
          "Arrays: Static, contiguous memory storage with O(1) time complexity for index-based access.",
          "Linked Lists: Dynamic collections of nodes where each element points to the next; ideal for frequent insertions/deletions.",
          "Stacks (LIFO): Last-In-First-Out logic; essential for recursion, undo mechanisms, and expression parsing.",
          "Queues (FIFO): First-In-First-Out logic; vital for asynchronous data transfer and CPU scheduling.",
          "Hash Tables: Uses a hash function to map keys to values, providing average O(1) efficiency for search and insertion.",
        ],
        referenceImage: typesofds,
        code: '// 1. Array\nint[] nums = {10, 20, 30};\n\n// 2. LinkedList\njava.util.LinkedList<String> list = new java.util.LinkedList<>();\nlist.add("First");\n\n// 3. Stack (LIFO)\njava.util.Stack<Integer> stack = new java.util.Stack<>();\nstack.push(100);\n\n// 4. Queue (FIFO)\njava.util.Queue<Integer> q = new java.util.LinkedList<>();\nq.add(1);\n\n// 5. HashMap (Key-Value)\njava.util.HashMap<String, String> map = new java.util.HashMap<>();\nmap.put("ID", "A101");',
        outputCode:
          "// Linear structures initialized for sequential data management",
      },
      {
        subTitle: "Advanced Non-Linear Structures",
        text: "Complex structures used to represent hierarchical and interconnected data, where elements are not stored in a sequence.",
        list: [
          "Trees: Hierarchical structures starting from a 'Root'. Includes BST (Binary Search Tree) for efficient searching and Heaps for priority ordering.",
          "Binary Search Tree (BST): A specific tree where the left child < parent < right child.",
          "Graphs: Networks of 'Vertices' (nodes) and 'Edges' (connections). Used in social networks and GPS pathfinding.",
          "Representations: Graphs are stored as Adjacency Lists (arrays of lists) or Adjacency Matrices (2D arrays).",
        ],
        code: "// 1. Binary Tree Node\nclass Node {\n    int val;\n    Node left, right;\n    Node(int v) { val = v; }\n}\n\n// 2. Graph (Adjacency List)\njava.util.Map<Integer, java.util.List<Integer>> graph = new java.util.HashMap<>();\nvoid addEdge(int src, int dest) {\n    graph.computeIfAbsent(src, k -> new java.util.ArrayList<>()).add(dest);\n}\n\n// Usage\nNode root = new Node(10);\nroot.left = new Node(5);\naddEdge(0, 1); // Edge from node 0 to 1",
        outputCode:
          "// Hierarchical (Tree) and Network (Graph) structures implemented",
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
