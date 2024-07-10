<<<<<<< HEAD:src/utils/sorting-utility.js
import { generateBubbleSort } from "./sorting-algorithms/bubble-sort";
import { generateMergeSort } from "./sorting-algorithms/merge-sort";
import { generateQuickSort } from "./sorting-algorithms/quick-sort";
import { generateSelectionSort } from "./sorting-algorithms/selection-sort";
=======
import { generateBubbleSort } from "./Algorithms/bubble-sort";
>>>>>>> parent of 1d63c9f (+ algorithm):src/utils/utility.js

export function generateRandomNumberFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const generateAnimationArray = (algorithm, array) => {
    let animationArray = []
    if(algorithm === 'bubble'){
<<<<<<< HEAD:src/utils/sorting-utility.js
        animationArray = generateBubbleSort(array)
    }else if(algorithm === 'selection'){
        animationArray = generateSelectionSort(array)
    }else if(algorithm === 'merge'){
        animationArray = generateMergeSort(array)
    }else if(algorithm === 'quick'){
        animationArray = generateQuickSort(array)
=======
        animationArray = generateBubbleSort(algorithm, array)
>>>>>>> parent of 1d63c9f (+ algorithm):src/utils/utility.js
    }
    return animationArray;
}

export const algorithmOptions = [
    { label: "Bubble", value: "bubble" },
    { label: "Quick", value: "quick" },
<<<<<<< HEAD:src/utils/sorting-utility.js
=======
    { label: "Merge", value: "merge" },
    { label: "Insertion", value: "insertion" },
    { label: "Selection", value: "selection" },
>>>>>>> parent of 1d63c9f (+ algorithm):src/utils/utility.js
];
