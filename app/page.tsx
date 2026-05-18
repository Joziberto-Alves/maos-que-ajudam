import Hero from "@/components/hero";
import About from "@/components/about";
import Goals from "@/components/goals";
import Frase from "@/components/frase";
import HowWorks from "@/components/howWorks";
import Footer from "@/components/footer";
import Impacts from "@/components/impacts";
import CTA from "@/components/cta";
import TimeLine from "@/components/timeline";

export default function Home() {
  return (
    <main className="bg-[linear-gradient(to_bottom,#f5f5f5_0%,#f5f5f5_8%,#7CC35D_10%,#f5f5f5_17%,#f5f5f5_22%)] md:bg-[linear-gradient(to_bottom,#f5f5f5_0%,#f5f5f5_10%,#7CC35D_12%,#f5f5f5_20%,#f5f5f5_25%)]">
      <Hero/>
      <About/>
      <Goals/>
      <Frase/>
      <HowWorks/>
      <Impacts/>
      <CTA/>
      <TimeLine/>
      <Footer/>
    </main>
  );
}
