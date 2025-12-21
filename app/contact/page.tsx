import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <div className="pt-16">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

