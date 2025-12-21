const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Netflix",
    period: "June 2026 - September 2026",
    description: [
      "Incoming Software Engineer Intern at Netflix on the Foundation Technology Platform team.",
    ],
  },
  {
    title: "Founding AI Engineer",
    company: "ArcellAI",
    period: "May 2025 - Jan 2026",
    description: [
      "Built backend for bioinformatics AI agent, including LLM orchestration pipelines, API endpoints, services layer, data infra, and \
      database integraion",
      "Fine-tuned virtual cell Foundation Model for perturbation response prediciton on AWS",
      "Working to integrate perturbation response prediction model into ArcellAI's AI agents",
    ],
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "NASA",
    period: "Jun 2025 - Sep 2025",
    description: [
      "Created AstroDash 2.0, a website and API serving Machine Learning models classifying supernovae spectra",
      "Publishing as first author in the Journal of Open Source Software (JOSS) describing AstroDash's support for user uploaded models,\
      optimized batch classification, visualization, and redshift estimation; all deployed on UIUC's SCiMMA cluster.",
      "Trained CNNs on supernovae classification and redshift estimation. Used feature engineering, ensembles, K-Fold cross validation, and \
      learning rate scheduling to surpass the orignal DASH on both tasks.",
    ],
  },
  {
    title: "Machine Learning Researcher",
    company: "Harvard Medical School, Zitnik Lab",
    period: "Dec 2024 - May 2025",
    description: [
      "Contributed to and maintained PyTDC, a biocomputational tool used by 30k+ researchers. Please see: https://icml.cc/virtual/2025/poster/45780",
      "Published as first author on ICLR 2025 with a poster describing how to use LLMs and RAG to extend clinical pediatric growth charts. \
      Please see: https://iclr.cc/virtual/2025/34322.",
      "Built infrastructure to benchmark, fine-tune, and run inference on therapeutic AI models like scVI, scGPT, Geneformer, and ESM. Contributed \
      drug sensitivity prediction experiments and molecule generation metrics.",
      "Used Cython to build an optimized model server and development package for single cell ML models."
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Addition Financial Credit Union",
    period: "Jun 2024 - Aug 2024",
    description: [
      "Collaborated with backend team to automate account handling, reducing IT labor by **200hrs/month**.",
      "Built a REST API listener for Paylocity's webhooks and managed databases using C# and SQL.",
      "Researched, developed, and presented a demo website using ASP.NET Core to highlight migration benefits.",
    ],
  },
];

const education = [
  {
    degree: "B.S. in Computer Science and Engineering",
    school: "Massachusetts Institute of Technology",
    period: "2024 - 2027",
    description: "Most interesting classes include Maching Learning (G), Natural Language Processing (G), Design and Analysis of Algorithms, \
    Probability and Random Variables, and Linear Algebra. Also keeping busy as an Intro to Machine Learning LA, competing with the Poker Club, \
    programming a player for Pokerbots, and working on my own projects (find more here: [ENTER LINK])",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-8">Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-300">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-black rounded-full"></div>
                  <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 hover:border-gray-400 transition-all">
                    <h4 className="text-xl font-semibold text-black mb-1">{exp.title}</h4>
                    <p className="text-gray-700 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-600 text-sm mb-4">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-700 flex items-start">
                          <span className="text-black mr-2">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-black mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-300">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-black rounded-full"></div>
                  <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 hover:border-gray-400 transition-all">
                    <h4 className="text-xl font-semibold text-black mb-1">{edu.degree}</h4>
                    <p className="text-gray-700 font-medium mb-2">{edu.school}</p>
                    <p className="text-gray-600 text-sm mb-4">{edu.period}</p>
                    <p className="text-gray-700">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
