'use client'

import Image from "next/image";
import { useSelector } from "react-redux";

export default function Home() {
  let array = useSelector(state => state.sorting.array)
  let algorithm = useSelector(state => state.sorting.selectedAlgorithm)
  console.log(array, algorithm)
  return (
    <h1>Hello!!</h1>
  );
}
 