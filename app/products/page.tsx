import Image from "next/image";

export default async function Page(props: any) {
  const random = Math.floor(Math.random() * 10);

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_start=5&_limit=5",
    { cache: "no-store" }
  );
  const products = await res.json();

  return (
    <div>
      <div className="p-4 rounded-md bg-[#eee]">
        <div className="grid grid-cols-4 gap-3">
          {products.map((item: any) => (
            <div key={item.id} style={{ width: "100%", position: "relative" }}>
              <Image
                className="rounded-lg mb-2"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }} // optional
                alt={item.title}
                src={item.thumbnailUrl}
              ></Image>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
