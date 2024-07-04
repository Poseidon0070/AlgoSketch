import { generateBubbleSort } from "./Algorithms/bubble-sort";
import { generateMergeSort } from "./Algorithms/merge-sort";
import { generateSelectionSort } from "./Algorithms/selection-sort";

export function generateRandomNumberFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const generateAnimationArray = (algorithm, array) => {
    let animationArray = []
    if(algorithm === 'bubble'){
        animationArray = generateBubbleSort(array)
    }else if(algorithm === 'selection'){
        animationArray = generateSelectionSort(array)
    }else if(algorithm === 'merge'){
        console.log(algorithm)
        animationArray = generateMergeSort(array)
    }
    return animationArray;
}

export const algorithmOptions = [
    { label: "Merge", value: "merge" },
    { label: "Bubble", value: "bubble" },
    { label: "Selection", value: "selection" },
    { label: "Quick", value: "quick" },
    { label: "Insertion", value: "insertion" },
];

