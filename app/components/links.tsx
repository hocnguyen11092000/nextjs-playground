"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Locale } from "../i18n-config";

export function Links(props: any) {
  const pathname = usePathname();
  const { lang } = props;

  return (
    <nav>
      <ul className="flex gap-3 items-center w-full justify-center mb-2">
        <li>
          <Link
            className={`link ${
              pathname === (lang ? `/${lang}` : "/") ? "active" : ""
            }`}
            href={lang ? `/${lang}` : "/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${
              pathname === (lang ? `/${lang}/products` : "/products")
                ? "active"
                : ""
            }`}
            href={lang ? `/${lang}/products` : "/products"}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            className={`link ${
              pathname === (lang ? `/${lang}/comment` : "/comment")
                ? "active"
                : ""
            }`}
            href={lang ? `/${lang}/comment` : "/comment"}
          >
            Comment
          </Link>
        </li>
        <li>
          <Link
            className={`link ${
              pathname ===
              (lang ? `/${lang}/comment-server` : "/comment-server")
                ? "active"
                : ""
            }`}
            href={lang ? `/${lang}/comment-server` : "/comment-server"}
          >
            Comment server
          </Link>
        </li>
      </ul>
    </nav>
  );
}
