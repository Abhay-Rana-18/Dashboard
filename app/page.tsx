import Image from "next/image";
import Link from "next/link";
import { lusitana } from "./ui/fonts";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52"></div>
      <Image
        src="/batman.jpg"
        width="700"
        height="600"
        className="hidden md:block m-auto"
        alt="Batman"
      />
      <Image
        src="/batman-mobile.jpg"
        width={560}
        height={620}
        className="sm:block md:hidden"
        alt="Batman"
      />
      <p
        className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
      >
        <strong>Welcome to Acme.</strong> This is the example for the{" "}
        <a href="https://nextjs.org/learn/" className="text-blue-500">
          Next.js Learn Course
        </a>
        , brought to you by Vercel.
      </p>
    </main>
  );
}
