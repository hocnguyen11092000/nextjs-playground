"use client";

import { useEffect, useState } from "react";

const fetchComment = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          content: "string",
        },
      ]);
    }, 2000);
  });
};

export default function Comment() {
  const [comments, setComments] = useState<any>();

  useEffect(() => {
    (async () => {
      const comments: any = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_start=5&_limit=5"
      );
      const json = await comments.json();
      setComments(json);
    })();
  }, []);

  return (
    <>
      {comments ? (
        <div>
          {comments.map((item: any) => {
            return <li key={item}>{item.id}</li>;
          })}
        </div>
      ) : (
        "loading..."
      )}
    </>
  );
}
