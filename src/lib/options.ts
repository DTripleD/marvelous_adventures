export const formatOptions = [
  { value: "Comic", label: "Comic" },
  { value: "Magazine", label: "Magazine" },
  { value: "Trade paperback", label: "Trade paperback" },
  { value: "Hardcover", label: "Hardcover" },
  { value: "Digest", label: "Digest" },
  { value: "Graphic novel", label: "Graphic novel" },
  { value: "Digital comic", label: "Digital comic" },
  { value: "Infinite comic", label: "Infinite comic" },
];

export const orderByOptions = [
  { value: "Title", label: "Title" },
  { value: "On Sale Date", label: "On Sale Date" },
];

export let yearsOptions: { value: string; label: string }[] = [];

for (let i = 2025; i >= 1900; i--) {
  yearsOptions.push({ value: `${i}`, label: `${i}` });
}
