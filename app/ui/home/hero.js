import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="px-3 w-full grid grid-cols-6 grid-rows-10 h-[94vh] absolute top-5 -z-10">
      <div className="bg-blue-900 col-span-1 row-span-2 rounded-t-xl text-white flex justify-center items-center">
        <Image
          src="/assets/white-logo.svg"
          alt="Picture of the author"
          width={150}
          height={150}
        />
      </div>
      <div className="bg-blue-900  col-span-6 row-span-6 "></div>
      <div className="bg-transparent col-span-2 p-10">
        <h2 className="font-alfa text-4xl uppercase text-blue-900">
          international university of grand-bassam
        </h2>
      </div>
      <div className="bg-blue-900 col-span-4 row-span-2 rounded-b-xl"></div>
    </div>
  );
}
