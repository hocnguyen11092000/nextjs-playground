"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Links() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-3 items-center w-full justify-center mb-2">
        <li>
          <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === "/products" ? "active" : ""}`}
            href="/products"
          >
            Products
          </Link>
        </li>
      </ul>
    </nav>
  );
}
