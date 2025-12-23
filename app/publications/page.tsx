import Navbar from "@/components/Navbar";
import Publications from "@/components/Publications";
import Footer from "@/components/Footer";

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Publications />
      <Footer />
    </main>
  );
}

