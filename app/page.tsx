import Image from "next/image";
import { Locale } from "./i18n-config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // const dictionary = await getDictionary(lang);
  return <div></div>;

  // return <div>{dictionary.products.title}</div>;
}
