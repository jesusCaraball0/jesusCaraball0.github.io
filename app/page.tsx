import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      {/* Spacer to allow scrolling to see full loss landscape */}
      <div style={{ height: '50vh' }} />
      <Footer />
    </main>
  );
}
