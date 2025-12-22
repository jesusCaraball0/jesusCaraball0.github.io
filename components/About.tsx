export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            About Me
          </h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
            I see computer science and software as the most creative technical outlet to solve problems and improve lives. As a fervent
              believer that AI/ML are the most important technologies of the 21st century, developing AI-powered applications proposes
              an unique opportunity to improve the anthropomorphic experience. Underpining all the drug discoveries, astronomical 
              advances, and world-class entertainment engines are throughfully designed scaleable, fault-tolerant software systems
              that weave foundational infrastructure, API versatility, and machine learning insights. 

            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
            These convictions led me to pursue a B.S. in Computer Science and Engineering at the Massachusetts Institute of Technology (MIT)
            where I've built backend, infrastructure, and machine learning solutions for AI-powered applications. 
            I will be joining Netflix in Summer 2026 as a Software Engineer Intern on the Foundation Technology Platform team and am 
            currently a Founding AI Engineer at ArcellAI. Previously, I was a Machine Learning Engineer Intern at NASA, 
            Machine Learning Researcher at Harvard Medical School, and Software Engineer Intern at Addition Financial 
            Credit Union. 
            </p>
            
          </div>
          
          <div className="relative">
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-black mb-4">Currently Exploring</h3>
              <p className="text-gray-700 text-lg mb-4">Open to chat about:</p>
              <ul className="space-y-2 list-disc list-inside">
                <li className="text-gray-700">Double Descent and "Grokking" with Transformers</li>
                <li className="text-gray-700">GNNs, LLMs, and VAEs for virtual cells</li>
                <li className="text-gray-700">Information Theory, Bayesian Inference, and Probability</li>
                <li className="text-gray-700">Better Tokenization for NLP</li>
                <li className="text-gray-700">Prediction Markets and Sports Betting</li>
                <li className="text-gray-700">Infra + Backend + ML devving</li>
                <li className="text-gray-700">Rust, C++, and JavaScript</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
