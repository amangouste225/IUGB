import Image from "next/image";
import { Hero, NavLinks } from "./ui/home";

export default function Home() {
  return (
    <div className="min-h- relative">
      <NavLinks />
      <Hero />
    </div>
  );
}
