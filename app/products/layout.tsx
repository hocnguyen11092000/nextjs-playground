import React, { Suspense } from "react";
import Page from "./page";

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
