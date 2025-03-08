import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { bubbleSort } from "./algorithms/bubbleSort";
import { selectionSort } from "./algorithms/selectionSort";
import { insertionSort } from "./algorithms/insertionSort";
import { quickSort } from "./algorithms/quickSort";
import { mergeSort } from "./algorithms/mergeSort";
import { heapSort } from "./algorithms/heapSort";
import { countingSort } from "./algorithms/countingSort";
import { radixSort } from "./algorithms/radixSort";

const algorithmFunctions = {
  bubblesort: bubbleSort,
  selectionsort: selectionSort,
  insertionsort: insertionSort,
  quicksort: quickSort,
  mergesort: mergeSort,
  heapsort: heapSort,
  countingsort: countingSort,
  radixsort: radixSort,
};


const algorithmDescriptions = {
  bubblesort:
    "Bubble Sort is a simple comparison-based algorithm that repeatedly swaps adjacent elements if they are in the wrong order. It has a time complexity of O(n²).",
  selectionsort:
    "Selection Sort repeatedly selects the smallest element from the unsorted part and swaps it with the first element of the unsorted section. Time complexity: O(n²).",
  insertionsort:
    "Insertion Sort builds a sorted array one element at a time by inserting each new element in its correct position. Time complexity: O(n²) in worst case.",
  quicksort:
    "Quick Sort is a divide-and-conquer algorithm that partitions the array around a pivot element and sorts the partitions recursively. Average time complexity: O(n log n).",
  mergesort:
    "Merge Sort divides the array into halves, sorts them, and then merges them back together. It's a stable sorting algorithm with O(n log n) complexity.",
  heapsort:
    "Heap Sort converts the array into a binary heap, repeatedly extracting the largest element. It has a time complexity of O(n log n) but is not stable.",
  countingsort:
    "Counting Sort is a non-comparison sorting algorithm that counts occurrences of elements and places them in the correct order. It works best for small integer ranges.",
  radixsort:
    "Radix Sort sorts numbers digit by digit, from the least significant to the most significant, using a stable sorting method. Time complexity: O(nk).",
};

function SortingVisualizer() {
  const { algorithm } = useParams();
  const sortFunction = algorithmFunctions[algorithm];
  const description = algorithmDescriptions[algorithm] || "No description available.";

  const [array, setArray] = useState([]);
  const [activeIndices, setActiveIndices] = useState([]);
  const [completedIndices, setCompletedIndices] = useState([]);

  useEffect(() => {
    generateArray();
  }, []);

  function generateArray() {
    const newArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
    setArray(newArray);
    setActiveIndices([]);
    setCompletedIndices([]);
  }

  async function handleSort() {
    if (!sortFunction) return;

    const animations = sortFunction([...array]);
    for (let i = 0; i < animations.length; i++) {
      setActiveIndices(animations[i].activeIndices || []);
      setArray([...animations[i].array]);
      setCompletedIndices(animations[i].completedIndices || []);

      await new Promise((resolve) => setTimeout(resolve, 500));
    }
    setActiveIndices([]);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4 capitalize text-black">
        {algorithm.slice(0, -4) + " " + algorithm.slice(-4)}
      </h1>

      <div className="flex flex-wrap justify-center gap-4 p-4">
        {array.map((value, index) => (
          <div
            key={index}
            className={`w-16 h-16 flex items-center justify-center text-lg font-bold rounded-full 
            transition-all duration-300 shadow-md
            ${completedIndices.includes(index) ? "bg-green-500 text-white" : 
              activeIndices.includes(index) ? "bg-blue-500 text-white" : 
              "bg-white text-black"}`}
            style={{ border: "2px solid black" }}
          >
            {value}
          </div>
        ))}
      </div>

      <div className="mt-6 flex space-x-4">
        <button
          onClick={handleSort}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-md transition"
        >
          Sort
        </button>
        <button
          onClick={generateArray}
          className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg shadow-md transition"
        >
          Generate New Array
        </button>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mt-6 max-w-2xl text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Algorithm Description</h2>
        <p className="text-gray-600">{description}</p>
      </div>

    </div>
  );
}

export default SortingVisualizer;
