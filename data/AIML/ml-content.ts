import { TopicContent } from "../content";

// Nested structure: Record<subsectionId, Record<topicId, TopicContent>>
export const mlContent: Record<string, Record<string, TopicContent>> = {
  "machine-learning": {
    mlintro: {
      id: "mlintro",
      title: "Introduction to Machine Learning",
      description: "Learn how computers find patterns in data.",
      blocks: [
        {
          subTitle: "What is Machine Learning?",
          text: "Machine Learning (ML) is a branch of computer science where we teach computers to learn from data, find patterns, and make autonomous decisions or predictions.",
          list: [
            "Pattern Recognition: Instead of manual rules, the system identifies hidden structures within datasets.",
            "Data-Driven: Logic is generated from input and output examples rather than being explicitly programmed.",
            "Hypothesis Generation: The model creates a 'logic' or hypothesis to predict results for new, unseen inputs.",
          ],
          code: "# Conceptual ML Workflow\n# data -> model.train() -> logic/hypothesis\nprint('System: Learning patterns from data...')",
          outputCode: "System: Learning patterns from data...",
        },
        {
          subTitle: "Traditional Programming vs. Machine Learning",
          text: "Unlike traditional programming where we manually write the logic, Machine Learning uses input and output data to generate a 'hypothesis' or logic automatically.",
          list: [
            "Traditional Logic: You provide the input (i/p) and the logic; the computer provides the output (o/p).",
            "ML Hypothesis: You provide input (i/p) and output (o/p); the computer generates the logic (hypothesis).",
            "New Predictions: Once the logic is learned, the model can take a 'new i/p' and generate a 'new o/p' autonomously.",
          ],
          code: "# Conceptual ML Workflow\n# Step 1: Feed (input + output) to the system\n# Step 2: System generates 'logic' (hypothesis)\n# Step 3: Input 'new i/p' -> System gives 'new o/p'",
        },
        {
          subTitle: "ML Learning Categories",
          text: "Machine Learning is broadly categorized into three types based on the presence of labels and the method of feedback.",
          list: [
            "Supervised Learning: Learns from 'Labelled Data' where every input has a known answer.",
            "Unsupervised Learning: Learns from 'Unlabelled Data' to discover hidden patterns.",
            "Reinforcement Learning: Learns through interaction, receiving rewards or penalties.",
          ],
        },
        {
          subTitle: "Supervised Learning",
          text: "Supervised tasks are split based on whether the output is a discrete category or a continuous numerical value.",
          list: [
            "Labelled Data: Raw data (images, text, or audio) paired with a meaningful tag.",
            "Classification: Predicting discrete classes/categories (e.g., Spam/Not Spam, Cats/Dogs/Rabbit, or Grade A/B/C/D).",
            "Regression: Predicting continuous numerical values (e.g., AQI, Stock Price, or Marks/Score).",
          ],
          code: "# Supervised: Input (i/p) -> Output (o/p)\ndef predict_grade(score):\n    if score >= 90: return 'A'\n    return 'B'",
          outputCode: "Grade: A",
        },
        {
          subTitle: "Unsupervised Learning",
          text: "This method focuses on discovering inherent patterns or groupings within data without pre-existing labels.",
          list: [
            "Unlabelled Data: Raw data without any tags or desired outcomes provided.",
            "Clustering: Automatically grouping similar items based on features (e.g., grouping iPhones and Chargers in a dataset).",
            "Pattern Discovery: Useful for market segmentation or identifying anomalies in data.",
          ],
          code: "# Unsupervised: Grouping similar data points\ndata = ['iphone', 'charger', 'iphone', 'charger']\n# Result: {'Group1': ['iphone', 'iphone'], 'Group2': ['charger', 'charger']}",
        },
        {
          subTitle: "Reinforcement Learning",
          text: "Reinforcement learning is a goal-oriented approach where an agent learns through trial and error.",
          list: [
            "Goal-Oriented: The system learns a strategy to maximize long-term rewards.",
            "Feedback System: Improvements are made based on receiving rewards or penalties.",
            "Agent Interaction: The model acts within an environment and adjusts its behavior based on outcomes.",
          ],
          code: "# Reinforcement: Action -> Reward/Penalty\ndef agent_move(action):\n    if action == 'goal': return 'Reward (+1)'\n    return 'Penalty (-1)'",
        },
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
    supervised: {
      id: "supervised",
      title: "Supervised Learning",
      description: "Learn how to train models with labelled data.",
      blocks: [],
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
