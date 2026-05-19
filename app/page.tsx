import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Competition from "@/components/competition";
import Prizes from "@/components/prizes";
import Speakers from "@/components/speakers";
import Schedule from "@/components/schedule";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Competition />
        <Prizes />
        <Speakers />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
