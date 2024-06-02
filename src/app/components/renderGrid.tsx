"use client";
import "./style.css";
import { matrix, startRow, startCol, endRow, endCol } from "./grid";
import PathFinder from "./pathFinder";
import { useState } from "react";

import { usePathname } from "next/navigation";
import React, {useEffect } from "react";


export default function Grid() {

  const [currPage, setCurrPage] = useState<string>("");
  const pathName = usePathname()

  useEffect(() => {
    setCurrPage(pathName);
  }, [pathName]);

  const pages = ["/", "/bfs", "/Astar"];
  const currPageIndex = pages.indexOf(currPage);

  

  const [pathTaken, setPathTaken] = useState<boolean[][]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function startAlgo() {
    console.log(
      "initializing PathFinding class...And calling dfs, printing class below..."
    );
    setIsLoading(true);
    const path = new PathFinder(matrix, startRow, startCol, endRow, endCol);
    
    if (currPage == '/') {
      path.dfs(path.startCol, path.startRow);
      console.log("called dfs");
    } else if (currPage == '/bfs') {
      path.bfs(path.startRow, path.startCol);
      console.log("called bfs");
    }

    let i = 0;
    const timer = setInterval(() => {
      if (i >= path.mark.length) {
        clearInterval(timer);
        return;
      }

      setPathTaken(path.mark.slice(0, i + 1));
      setIsLoading(false);
      i++;
    }, 90);
  }
  return (
    <>
      <div className="grid">
        {matrix.map((row, i) => (
          <div key={i} className="row">
            {row.map((cell, j) => (
              <div
                key={`${i}-${j}`}
                className={`cell ${
                  pathTaken[i]?.[j]
                    ? "path-taken"
                    : cell === 1
                    ? "path"
                    : cell === 2
                    ? "wall"
                    : "goal"
                }`}
              >
                {}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="py-4">
        {isLoading ? (
          <button
            type="button"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            disabled
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-bold">
              Processing...
            </span>
          </button>
        ) : (
          <button
            onClick={startAlgo}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-bold">
              Visualize
            </span>
          </button>
        )}
      </div>
    </>
  );
}
