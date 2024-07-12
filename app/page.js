import Image from "next/image";
import Hero from '@/sections/Hero'
import BreedList from "@/sections/BreedList";
import FeaturedProducts from "@/sections/FeaturedProducts";
import Reviews from "@/sections/Reviews";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <BreedList />
      <FeaturedProducts />
      <Reviews />
    </main>
  );
}
