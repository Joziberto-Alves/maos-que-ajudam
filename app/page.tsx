import Hero from "@/components/hero";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="bg-gradient-to-b bg-[linear-gradient(to_bottom,#f5f5f5_0%,#f5f5f5_35%,#7CC35D_50%,#f5f5f5_65%,#f5f5f5_100%)]">
      <Hero/>
      <About/>
    </main>
  );
}
