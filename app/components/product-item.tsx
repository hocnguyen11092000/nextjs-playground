"use server";
import Comment from "./comment";

const fetchProduct = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "string",
        },
      ]);
    }, 2000);
  });
};

export default async function ProductItem() {
  const products: any = await fetchProduct();

  return (
    <div>
      {products &&
        products.map((item: any) => <h3 key={item.id}>{item.name}</h3>)}
      <Comment></Comment>
    </div>
  );
}
