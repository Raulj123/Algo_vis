'use client'

import Link from "next/link";
import "./style.css";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const [currPage, setCurrPage] = useState<string>("");
  const pathName = usePathname()

  useEffect(() => {
    setCurrPage(pathName);
  }, [pathName]);

  const pages = ["/", "/bfs", "/Astar"];
  const currPageIndex = pages.indexOf(currPage);

  console.log(currPage);
  console.log(currPageIndex);
  
  return (
    <>
      <div className="flex w-full items-center justify-between">
        <Link href="./" className="link">
          Algo Vis
          <span className="ver">V1.0</span>
        </Link>
      </div>
      {children}
      <div className="flex w-full items-center justify-between">
      {currPageIndex > 0 && (
          <Link href={pages[currPageIndex - 1]}>
            <p className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Previous
            </p>
          </Link>
        )}

        {currPageIndex < pages.length - 1 && (
          <Link href={pages[currPageIndex + 1]}>
            <p className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              Next
            </p>
          </Link>
        )}
          
        </div>
    </>
  );
}
