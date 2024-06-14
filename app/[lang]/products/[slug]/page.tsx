"use client";

import { useParams, usePathname } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  const pathname = usePathname();
  const params = useParams();
  console.log(pathname, params);

  return (
    <>
      <div>product detail</div>
      <div>{count}</div>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click
      </button>
    </>
  );
}
