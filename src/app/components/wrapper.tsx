import React from "react";
import Link from "next/link";
import "./style.css";

export default function Wrapper({ children }: { children: React.ReactNode }) {
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
        <h1 className="">This is after children still in wrapper tho</h1>
      </div>
    </>
  );
}
