export const boardFakeData = {
  name: "Work",
  columns: [
    {
      id: "0",
      title: "todo",
      cards: [
        {
          id: "0",
          title: "task title #1",
          description: "What exactly has to be done, or in more details",
          badges: ["new", "fast"],
        },
      ],
    },
    {
      id: "1",
      title: "in-progress",
      cards: [
        {
          id: "3",
          title: "task title #2",
          description: "I do not know what to do with this",
          badges: ["old", "burnout"],
        },
        {
          id: "4",
          title: "task title #3",
          description: "Uuuuuuuuuh",
          badges: ["whistle", "new"],
        },
      ],
    },
  ],
};

export const bageFakeData = {
  new: "lightblue",
  fast: "lightgreen",
  old: "lightyellow",
  burnout: "white",
  whistle: "lightcoral",
};
