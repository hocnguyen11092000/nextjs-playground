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
  const [comments, setComments] = useState();

  useEffect(() => {
    (async () => {
      const comments: any = await fetchComment();
      setComments(comments);
    })();
  }, []);

  return <>{comments ? <div>comment</div> : "loading..."}</>;
}
