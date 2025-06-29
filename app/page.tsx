import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import Tab from "@/components/ui/tab/Tab";

export default function Home() {
  return (
    <main className="px-4 sm:w-lg sm:mx-auto">
      <Hero />
      <Skills />
      <Tab />
    </main>
  );
}
