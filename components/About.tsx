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
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              I'm a software engineer with a passion for machine learning and artificial intelligence. 
              I love building intelligent systems that solve real-world problems and push the boundaries 
              of what's possible with technology.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              My journey in tech has been driven by curiosity and a desire to create meaningful impact. 
              Whether it's developing ML models, building scalable applications, or exploring the latest 
              in AI research, I'm always learning and growing.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg">
                <span className="text-black font-semibold">Problem Solver</span>
              </div>
              <div className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg">
                <span className="text-black font-semibold">ML Enthusiast</span>
              </div>
              <div className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg">
                <span className="text-black font-semibold">Continuous Learner</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-gray-700">Currently exploring deep learning architectures</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-gray-700">Building ML-powered applications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-gray-700">Contributing to open source projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
