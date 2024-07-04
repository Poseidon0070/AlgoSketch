import { generateBubbleSort } from "./Algorithms/bubble-sort";

export function generateRandomNumberFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const generateAnimationArray = (algorithm, array) => {
    let animationArray = []
    if(algorithm === 'bubble'){
        animationArray = generateBubbleSort(algorithm, array)
    }
    return animationArray;
}

export const algorithmOptions = [
    { label: "Bubble", value: "bubble" },
    { label: "Quick", value: "quick" },
    { label: "Merge", value: "merge" },
    { label: "Insertion", value: "insertion" },
    { label: "Selection", value: "selection" },
];
