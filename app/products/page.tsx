"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [products] = useState([
    {
      id: 1,
      title: "iphone 15",
    },
    {
      id: 2,
      title: "samsung galaxy s23",
    },
  ]);
  return (
    <div>
      {products.map((product) => (
        <div>
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        </div>
      ))}
    </div>
  );
}
