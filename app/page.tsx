import Hero from "@/components/hero";
import About from "@/components/about";
import Goals from "@/components/goals";

export default function Home() {
  return (
    <main className="bg-gradient-to-b  bg-[linear-gradient(to_bottom,#f5f5f5_0%,#f5f5f5_25%,#7CC35D_40%,#f5f5f5_75%,#f5f5f5_80%)]">
      <Hero/>
      <About/>
      <Goals/>
    </main>
  );
}
