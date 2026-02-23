import { TopicContent } from "../content";

export const demoContent: Record<string, TopicContent> = {
  dt1: {
    id: "dt1",
    title: "Demo Topic 1",
    description: "This is a demonstration of the first subtopic in the new section.",
    blocks: [
      {
        subTitle: "Core Concept",
        text: "Brief explanation of what this demo topic covers.",
        list: [
          "Key feature one",
          "Important observation two",
        ],
        code: "print('Demo 1 is active')",
        outputCode: "Demo 1 is active",
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