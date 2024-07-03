'use client'

import Image from "next/image";
import { useSelector } from "react-redux";

export default function Home() {
  let array = useSelector(state => state.sorting.array)
  let algorithm = useSelector(state => state.sorting.selectedAlgorithm)
  return (
    <div className="">
    </div>
  );
}
