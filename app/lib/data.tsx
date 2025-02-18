type ExtractedData = {
  __EMPTY: string;
  k2: number;
  ET2: number;
};

export const months = [
  { id: 1, content: "January" },
  { id: 2, content: "February" },
  { id: 3, content: "March" },
  { id: 4, content: "April" },
  { id: 5, content: "May" },
  { id: 6, content: "June" },
  { id: 7, content: "July" },
  { id: 8, content: "August" },
  { id: 9, content: "September" },
  { id: 10, content: "October" },
  { id: 11, content: "November" },
  { id: 12, content: "December" },
];

export const weeks = [
  { id: 1, content: "1" },
  { id: 2, content: "2" },
  { id: 3, content: "3" },
  { id: 4, content: "4" },
];

export let extractedData: ExtractedData[] = [];

export function saveExtractedData(data: ExtractedData[]) {
  extractedData = data;
}
