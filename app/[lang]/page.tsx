import Image from "next/image";
import { Locale } from "../i18n-config";
import { getDictionary } from "../get-dictionaries";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  console.log("lang: ", lang);

  // const dictionary = await getDictionary(lang);
  return <div></div>;

  // return <div>{dictionary.products.title}</div>;
}
