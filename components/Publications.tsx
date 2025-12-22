const publications = [
  {
    title: "PyTDC: A Multimodel ML Platform for Biomedical Foundation Models",
    authors: "Alejandro Velez-Arce, Marinka Zitnik",
    venue: "ICML Poster: International Conference on Machine Learning",
    year: "2025",
    description: "Biomedical foundation models can transform therapeutic discovery. PyTDC integrated multimodal biological data with benchmark tasks \
    and unified inference tools to endable therapeutic-relevant ML research in, among others, transfer learning methods in network biology. I contributed \
    to the core PyTDC package and developed infrastructure to benchmark, fine-tune, and run inference on therapeutic AI models like scVI.",
    link: "https://icml.cc/virtual/2025/poster/45780",
    type: "publication",
  },
  {
    title: "Extending a Clinical Pediatric Growth Chart App Using a Large Language Model",
    authors: "Alex Velez-Arce, Jesus Caraballo Anaya",
    venue: "ICLR Poster: International Conference on Learning Representations",
    year: "2025",
    description: "Monitoring a child's growth is vital for early detection of disorders. This study explores integrating a large language model (LLM) \
    agent into the SMART on FHIR Growth Chart App to assist pediatricians in identifying growth abnormalities. Using a User-Centered Design (UCD) \
    approach, we gathered pediatrician feedback to refine an AI tab analyzing synthetic patient data. The system was implemented using the OpenAI \
    Assistants API with Retrieval Augmented Generation (RAG) and tested for usability and functionality with three pediatricians in an evaluation \
    of model responses for growth abnormality detection, patient history analysis, recommended specialist referral, differential diagnosis and \
    executive summary. Results showed that the agent can achieve high levels of usability when integrated into a clinical setting. However, while \
    the agent accurately analyzed three of five synthetic patients, its responses to differential diagnoses and specialist referrals were insufficient.\
     This proof of concept highlights the potential of AI tools in pediatrics but also underscores the need for improved accuracy in future developments.\
     We have open-sourced the agentic app.",
     link: "https://iclr.cc/virtual/2025/34322",
     type: "publication",
  },
  {
    title: "Adaptive Tokenization is All You Need",
    authors: "Jesus Caraballo Anaya, Margarita Carranza, Archita Khaire, John Tahk",
    venue: "MIT 6.4610: Natural Language Processing Poster Session",
    year: "2025",
    description: "Large language models (LLMs) read sequences of tokens produced by a tokenizer. In current multilingual models, those tokenizers \
    were designed, and are usually trained on English-heavy corpora and then reused for dozens of languages with different scripts, orthographies,\
     and morphological systems. For many languages, this leads to over-segmentation, longer sequences and higher cost, and weaker representations. \
     For these reasons, we suspect that tokenization strategies can explain the gap in improvements between multilinguality and other tasks such \
     as summarization or code generation for LLMs. Recent studies show that tokenization can induce a “token tax”: higher tokens-per-word correlating \
     with both higher cost and lower accuracy across languages. To study the effects of tokenization on multilingual ability, this project analyses \
     how choice of tokenizer choice affects a given multilingual model's performance on a downstream Twitter sentiment analysis task. We achieve \
     this by swapping different tokenizers into the same multilingual model and comparing how they handle sentiment across 5 morphologically \
     distinct languages: English, German, Hindi, Spanish, and Arabic. By linking performance gaps to tokenization behavior and language properties, \
     we aim to inform better, more language-aware tokenizer design for future multilingual models.",
     link: "",
     type: "publication",
  },
  {
    title: "Social Impact Internships: Jesus Caraballo Anaya",
    authors: "Jesus Caraballo Anaya",
    venue: "MIT PKG Center",
    year: "2025",
    description: "As a MIT undergraduate, I had the priviledge of working with River City Community Development Center, an afterschool safe haven \
    for kids to learn valuable skills like tuckpointing and electricity and get paid in Humboldt Park, Chicago, as a Technology Innovation Intern.\
    This article shares my reflections on the experience.",
    link: "https://pkgcenter.mit.edu/2025/10/03/social-impact-internships-jesus-caraballo-anaya-28/",
    type: "article",
  },
  {
    title: "Nine Years Later - Why I Built a “Math Park”",
    authors: "Jesus Caraballo Anaya",
    venue: "Central Florida Lifestyle Magazine",
    year: "2024",
    description: "For my Boy Scouts Eagle Project, I returned to my childhood elementary school to build a 'Math Park' where kids can play games\
    and get interested in math lessons on how they work. With the help of Addition Financial Credit Union, I was able to give back to the school\
     that I owe so much of my upbringing and academic success to. It was featured on Fox News, Central Florida Lifestyle Magazine, and AddFi's \
     Social Media. \n \
     Fox News: https://www.fox35orlando.com/news/student-pays-it-forward-builds-math-park \n \
     Central Florida Lifestyle Magazine: https://www.centralfloridalifestyle.com/conversations/nine-years-later-why-i-built-a-math-park/ \n \
     AddFi's Social Media: https://www.facebook.com/theadditionfi/videos/meet-jesus-caraballo/319181940813285/",
    link: "https://www.centralfloridalifestyle.com/conversations/nine-years-later-why-i-built-a-math-park/",
    type: "article",
  }
];

export default function Publications() {
  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Articles and Publications
          </h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>
        
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-gray-100 border border-gray-300 rounded-lg p-6 hover:border-gray-400 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">Authors:</span> {pub.authors}
                  </p>
                  <p className="text-gray-700 mb-1">
                    <span className="font-medium">{pub.type === "publication" ? "Venue:" : "Published in:"}</span> {pub.venue}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    <span className="font-medium">Year:</span> {pub.year}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-4">
                  <span className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs font-semibold text-black">
                    {pub.type === "publication" ? "Publication" : "Article"}
                  </span>
                </div>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {pub.description}
              </p>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 font-semibold flex items-center gap-2 transition-colors inline-block"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Read {pub.type === "publication" ? "Paper" : "Article"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

