import React from 'react';

const SectionHeading = ({ children, id }: { children: React.ReactNode, id: string }) => (
  <h2 id={id} className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12 relative pb-4 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-16 after:h-1 after:bg-blue-500 after:rounded-full">
    {children}
  </h2>
);

const About = () => (
  <section id="about" className="py-20 bg-blue-50">
    <div className="container mx-auto px-2 max-w-6xl">
      <SectionHeading id="about">会社概要</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        {/* ロゴエリア (1/4の幅) */}
        <div className="col-span-1 flex justify-center md:justify-start">
          <img
            src="comLogo2.jpg"
            alt="Company Logo"
            className="shadow-lg w-50 h-65 object-cover"
          />
        </div>
        {/* テキストエリア (3/4の幅) */}
        <div className="col-span-3 text-center md:text-left">
          <p className="text-gray-600 leading-relaxed md:text-2xl">
             私たちは、お客様の大切な建物を守り、美しく蘇らせる塗装工事の専門家です。創業から15年、泉大津市に根ざした地域密着のサービスで、多くのお客様にご信頼いただいてまいりました。

特に、長年にわたり大手ハウスメーカーの下請けとして培った確かな技術力は、私たちの最大の強みです。戸建てからマンション、商業施設まで、あらゆる建物の「美しさ」と「耐久性」を追求し、安心してお任せいただける高品質な施工をお約束します。

私たちは、お客様一人ひとりの想いに寄り添い、建物に最適なご提案をさせていただきます。お見積もりは無料です。まずはお気軽にご相談ください。


          </p>
        </div>
      </div>
    </div>
    {/* 挿入した画像 */}
    <div className="mt-12">
      <img
        src="a1.png"
        alt="Company image"
        className="w-full h-auto object-cover"
      />
    </div>
  </section>
);

export default About;
