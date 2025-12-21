import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <div className="pt-16">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}

