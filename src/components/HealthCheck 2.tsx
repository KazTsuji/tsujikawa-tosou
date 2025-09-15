import React from 'react';

const SectionHeading = ({ children, id }: { children: React.ReactNode, id: string }) => (
  <h2 id={id} className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12 relative pb-4 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-16 after:h-1 after:bg-blue-500 after:rounded-full">
    {children}
  </h2>
);

const HealthCheck = () => (
  <section id="health-check" className="py-20 bg-white">
    <div className="container mx-auto px-6 max-w-6xl">
      <SectionHeading id="health-check">おうち健康チェック</SectionHeading>
      <p className="text-center text-gray-600 leading-relaxed md:text-xl mb-12">
        塗り替えが必要なタイミングは、お住まいの外壁や屋根が教えてくれます。<br className="hidden sm:inline" />以下のようなサインを見つけたら、プロに相談するタイミングかもしれません。
      </p>
    </div>
    <div className="w-full">
      {/* PC表示用の画像 */}
      <img
        src="healthCheck.png"
        alt="おうち健康チェック"
        className="hidden sm:block w-full h-auto object-cover"
      />
      {/* モバイル表示用の画像 */}
      <img
        src="healthCheck_mobile.jpeg"
        alt="おうち健康チェック（モバイル）"
        className="block sm:hidden w-full h-auto object-cover"
      />
    </div>
  </section>
);

export default HealthCheck;
