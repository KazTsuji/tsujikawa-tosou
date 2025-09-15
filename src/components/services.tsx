import React from 'react';

const SectionHeading = ({ children, id }: { children: React.ReactNode, id: string }) => (
  <h2 id={id} className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12 relative pb-4 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-16 after:h-1 after:bg-blue-500 after:rounded-full">
    {children}
  </h2>
);

const services = [
  {
    image: 's1.jpg',
    title: '外壁塗装',
    description: '建物の美観を保ち、紫外線や雨風から保護します。建物の寿命を延ばすために最適な塗料をご提案します。'
  },
  {
    image: 's2.jpg',
    title: '屋根塗装',
    description: '屋根は常に厳しい自然環境にさらされています。適切な塗装で、雨漏りを防ぎ、建物を守ります。'
  },
  {
    image: 's3.jpg',
    title: '防水工事',
    description: 'ベランダや屋上など、雨水の侵入を防ぐための防水工事を行います。雨漏りによる建物の劣化を防ぎます。'
  }
];

const Services = () => (
  <section id="services" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <SectionHeading id="services">サービス内容</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-blue-100 rounded-xl p-6 shadow-lg text-center transition-transform transform hover:scale-105 duration-300">
            <div className="flex justify-center mb-4">
              <img src={service.image} alt={service.title} className="h-60 w-60 object-cover rounded-full" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
