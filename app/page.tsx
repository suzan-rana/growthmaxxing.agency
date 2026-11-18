import { Contact } from "@/components/Contact";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LeakCalc } from "@/components/LeakCalc";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Proof } from "@/components/Proof";
import { Services } from "@/components/Services";
import { Statement } from "@/components/Statement";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LeakCalc />
        <Services />
        <Proof />
        <Statement />
        <Process />
        <Faq />
        <Contact />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
