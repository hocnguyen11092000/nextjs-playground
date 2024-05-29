import React from "react";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="product-layout">
      <h3>products layout</h3>
      {children}
    </div>
  );
}
