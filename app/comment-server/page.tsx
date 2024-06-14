const fetchComment = () => {
  return fetch("https://jsonplaceholder.typicode.com/photos?_start=5&_limit=5");
};

export default async function Page() {
  const res = await fetchComment();
  const comments = await res.json();
  console.log(comments);

  return (
    <>
      {comments ? (
        <div>
          {comments.map((item: any) => {
            return (
              <li className="item" key={item.id}>
                {item.id}
              </li>
            );
          })}
        </div>
      ) : (
        "loading..."
      )}
    </>
  );
}
