type NoteInfo = {
  title: string;
  header: string;
  date: string;
  shortDate: string;
  body: string[];
  id: number;
};

export const NoteInfo: NoteInfo[] = [
  {
    title: "Hello!",
    date: "February 1, 2024, 4:26pm",
    shortDate: "1/2/24",
    header: "Hello! I'm Nicola, a Fullstack developer.",
    body: [
      "I build creative, useful and immersive software.",
      "I am invested in writing code that develops my skills and understanding of software while unlocking doors for old and new users alike. With a focus on collective user experience, I like to engage in conversations surrounding UI design philosophy, open-source software and accessibility. ",
      "My main toolkit consists of React, TailwindCSS and PSQL; I love to learn new technologies, programming languages, and frameworks. I’m currently learning Typescript and honing in my React skills. "
     
    ],
    id: 1,
  },
  {
    title: "Note 2",
    date: "January 23, 2024, 1:21pm",
    shortDate: "23/1/24",
    header: "Welcome to my desktop.",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mi ipsum faucibus vitae aliquet. Pretium nibh ipsum consequat nisl vel pretium lectus. Consectetur adipiscing elit pellentesque habitant morbi tristique. In pellentesque massa placerat duis. Adipiscing at in tellus integer feugiat. Diam vulputate ut pharetra sit amet.",
    ],
    id: 2,
  },
  {
    title: "Note 3",
    date: "December 14, 2023, 8:32am",
    shortDate: "23/1/24",
    header: "Hello, I'm Nicola.",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mi ipsum faucibus vitae aliquet. Pretium nibh ipsum consequat nisl vel pretium lectus. Consectetur adipiscing elit pellentesque habitant morbi tristique. In pellentesque massa placerat duis. Adipiscing at in tellus integer feugiat. Diam vulputate ut pharetra sit amet.",
    ],
    id: 3,
  },
];
