import Header from "@/components/Header";
import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="px-4 sm:w-lg sm:mx-auto">
      <Header />
      <Nav />
      <Hero />
      <Skills />
    </main>
  );
}
