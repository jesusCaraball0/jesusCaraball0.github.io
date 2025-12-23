import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <Hero />
      </div>
      <div className="mt-16 sm:mt-20">
        <Skills />
      </div>
      <Footer />
    </main>
  );
}
