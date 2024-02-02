type NoteInfo = {
  title: string;
  date: string;
  shortDate: string;
  body: string;
  active: boolean;
  id: number;
};

export const NoteInfo: NoteInfo[] = [
  {
    title: "Note 1",
    date: "February 1, 2024, 4:26pm",
    shortDate: "1/2/24",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mi ipsum faucibus vitae aliquet. Pretium nibh ipsum consequat nisl vel pretium lectus. Consectetur adipiscing elit pellentesque habitant morbi tristique. In pellentesque massa placerat duis. Adipiscing at in tellus integer feugiat. Diam vulputate ut pharetra sit amet.",
    active: false,
    id: 1,
  },
  {
    title: "Note 2",
    date: "January 23, 2024, 1:21pm",
    shortDate: "23/1/24",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mi ipsum faucibus vitae aliquet. Pretium nibh ipsum consequat nisl vel pretium lectus. Consectetur adipiscing elit pellentesque habitant morbi tristique. In pellentesque massa placerat duis. Adipiscing at in tellus integer feugiat. Diam vulputate ut pharetra sit amet.",
    active: false,
    id: 2,
  },
  {
    title: "Note 3",
    date: "December 14, 2023, 8:32am",
    shortDate: "23/1/24",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mi ipsum faucibus vitae aliquet. Pretium nibh ipsum consequat nisl vel pretium lectus. Consectetur adipiscing elit pellentesque habitant morbi tristique. In pellentesque massa placerat duis. Adipiscing at in tellus integer feugiat. Diam vulputate ut pharetra sit amet.",
    active: false,
    id: 3,
  },
];
