const publications = [
  {
    title: "Sample Publication Title",
    authors: "Your Name, Co-Author, et al.",
    venue: "Conference/Journal Name",
    year: "2025",
    description: "Brief description of the publication and its contributions.",
    link: "#",
    type: "publication",
  },
  {
    title: "Sample Article Title",
    authors: "Your Name",
    venue: "Medium / Blog / News Outlet",
    year: "2025",
    description: "Brief description of the article and its key points.",
    link: "#",
    type: "article",
  },
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

