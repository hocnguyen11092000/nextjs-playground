// "use client";
import Link from "next/link";
import { Suspense, useState } from "react";
import ProductItem from "../components/product-item";

import { GetStaticProps } from "next";
export default function Page(props: any) {
  console.log(props);

  // const [products] = useState([
  //   {
  //     id: 1,
  //     title: "iphone 15",
  //   },
  //   {
  //     id: 2,
  //     title: "samsung galaxy s23",
  //   },
  // ]);
  return (
    <div>
      {/* {products.map((product) => (
        <div>
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        </div>
      ))} */}
      <Suspense fallback="loading...">
        <ProductItem></ProductItem>
      </Suspense>
    </div>
  );
}

type Repo = {
  name: string;
  stargazers_count: number;
};

Page.getInitialProps = (async (context) => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();
  return { props: { repo } };
}) satisfies GetStaticProps<{
  repo: Repo;
}>;
