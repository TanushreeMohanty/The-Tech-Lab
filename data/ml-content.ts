import { TopicContent } from "./content";

// Nested structure: Record<subsectionId, Record<topicId, TopicContent>>
export const mlContent: Record<string, Record<string, TopicContent>> = {
  "machine-learning": {
    mlintro: {
      id: "mlintro",
      title: "Introduction",
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
    dt2: {
      id: "dt2",
      title: "Demo Topic 2",
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
