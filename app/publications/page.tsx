import Navbar from "@/components/Navbar";
import Publications from "@/components/Publications";
import Footer from "@/components/Footer";

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <div className="pt-16">
        <Publications />
      </div>
      <Footer />
    </main>
  );
}

