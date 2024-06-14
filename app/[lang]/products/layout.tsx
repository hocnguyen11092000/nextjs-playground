import React, { Suspense } from "react";
import Page from "./page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "product list page",
  description: "",
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-2">products layout</h3>
      <Suspense fallback="product loading...">
        <Page></Page>
      </Suspense>
    </div>
  );
}
