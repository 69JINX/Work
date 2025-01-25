import Image from "next/image";
import Hero from "./Components/Hero";
import FloatingRibbon from "./Components/FloatingRibbon";
import Vectors from "./Components/Vectors";

export default function Home() {
  return (
    <>
      <Hero />
      <FloatingRibbon />
      <Vectors />
    </>
  );
}
