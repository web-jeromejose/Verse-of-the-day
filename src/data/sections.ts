export const sections = [
  { id: "all", label: "Lahat", from: 1, to: 30 },
  { id: "ot", label: "Old Testament", from: 1, to: 10 },
  { id: "jesus", label: "Si Jesus", from: 11, to: 18 },
  { id: "letters", label: "Mga Sulat", from: 19, to: 29 },
  { id: "end", label: "Ang Wakas", from: 30, to: 30 },
] as const;

export type SectionId = (typeof sections)[number]["id"];
