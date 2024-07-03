export function generateRandomNumberFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const algorithmOptions = [
    { label: "Bubble", value: "bubble" },
    { label: "Quick", value: "quick" },
    { label: "Merge", value: "merge" },
    { label: "Insertion", value: "insertion" },
    { label: "Selection", value: "selection" },
  ];
  