import React from 'react';

const SectionHeading = ({ children, id }: { children: React.ReactNode, id: string }) => (
  <h2 id={id} className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12 relative pb-4 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-16 after:h-1 after:bg-blue-500 after:rounded-full">
    {children}
  </h2>
);

const portfolioImages = [
  '001.png',
  '002.png',
  '003.png',
  '004.png',
  '005.png',
];

const Portfolio = () => (
  <section id="portfolio" className="py-20 bg-blue-50">
    <div className="container mx-auto px-6">
      <SectionHeading id="portfolio">施工事例</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {portfolioImages.map((src, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={src}
              alt={`施工事例 ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
