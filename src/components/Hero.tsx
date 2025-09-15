import React from 'react';

interface HeroProps {
  smoothScroll: (id: string) => void;
}

const Hero = ({ smoothScroll }: HeroProps) => {
  return (
    <section id="hero" className="relative h-[70vh] sm:h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* 背景画像とオーバーレイ */}
      <img
        src="header.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* コンテンツ */}
      <div className="relative z-10  pt-16 sm:pt-20 max-w-5xl mx-auto">
       <h1 className="text-4xl md:text-9xl font-extrabold leading-tight mb-4 drop-shadow-lg
               bg-gradient-to-r from-yellow-400 to-red-400 text-transparent bg-clip-text">
          『まるで新築!!』
        </h1>
        <p className="text-2xl md:text-4xl mb-8 drop-shadow-lg">
          長年の経験と確かな技術、そして地域に根ざしたサービスで、あなたの大切な建物を美しく保護します
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-2 sm:space-x-2">
          <button onClick={() => smoothScroll('contact')} className="w-full sm:w-auto bg-blue-900 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-800 transition-colors duration-300 transform hover:scale-105">
            無料見積もり依頼
          </button>
          <button onClick={() => smoothScroll('services')} className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-800 hover:bg-opacity-20 transition-colors duration-300 transform hover:scale-105">
            サービス内容を見る
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
