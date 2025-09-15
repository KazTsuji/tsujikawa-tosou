import React from 'react';
import Image from 'next/image';

const SectionHeading = ({ children, id }: { children: React.ReactNode, id: string }) => (
  <h2 id={id} className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12 relative pb-4 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-16 after:h-1 after:bg-blue-500 after:rounded-full">
    {children}
  </h2>
);

const About = () => (
  <section id="about" className=" bg-blue-50">
    <div className="container mx-auto max-w-6xl pt-10">
      <SectionHeading id="about">会社概要</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-4 items-center">
        {/* ロゴエリア (1/4の幅) */}
        <div className="md:justify-center">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/comLogo2.jpg"
              alt="辻川塗装の会社ロゴ" // alt属性をより具体的に
              width={200}
              height={260}
              className="shadow-lg object-cover"
            />
          </div>
        </div>
        {/* テキストエリア (3/4の幅) */}
        <div className="col-span-3 text-center md:text-left">
          <p className="text-gray-600 leading-relaxed md:text-2xl px-10 pt-10">
            私たちは、お客様の大切な建物を守り、美しく蘇らせる**外壁塗装**と**屋根塗装**の専門家です。創業から15年、**泉大津市**に根ざした地域密着のサービスで、多くのお客様にご信頼いただいてまいりました。
            特に、長年にわたり大手ハウスメーカーの下請けとして培った確かな技術力は、私たちの最大の強みです。戸建てからマンション、商業施設まで、あらゆる建物の「美しさ」と「耐久性」を追求し、安心してお任せいただける高品質な施工をお約束します。
            私たちは、お客様一人ひとりの想いに寄り添い、建物に最適なご提案をさせていただきます。お見積もりは無料です。**泉大津市**での**外壁塗装**や**屋根塗装**に関するご相談は、まずはお気軽にご連絡ください。
          </p>
        </div>
      </div>
    </div>
    {/* 挿入した画像 */}
    <div className="mt-12">
      <Image
        src="/a1.png"
        alt="大阪府泉大津市で塗装工事を行う職人" // alt属性をより具体的に
        width={1200}
        height={600}
        layout="responsive"
        objectFit="cover"
      />
    </div>
  </section>
);

export default About;