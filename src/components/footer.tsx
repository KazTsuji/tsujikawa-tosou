import React from 'react';

const smoothScroll = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Footer = () => (
  <footer className="bg-blue-900 text-white py-12">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* 会社情報 */}
      <div>
        <img src="comLogo3.png" alt="Company Logo" className="w-48 h-auto mb-4" />
        <p className="text-gray-300 mb-4 text-xl">信頼と技術で彩る、安心の塗装サービス</p>
         <p className="text-gray-300 mb-4 text-xl">代表者：辻川　光</p>
        <div className="flex items-center text-gray-300 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.127l-2.583 1.393a8.955 8.955 0 005.122 5.122l1.393-2.583a1 1 0 011.127-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <p>TEL: 080-3863-6779</p>
        </div>
        <div className="flex items-center text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p>大阪府 泉大津市 豊中町 3-2-10</p>
        </div>
      </div>

      {/* クイックリンク */}
      <div>
        <h3 className="text-xl font-bold text-blue-300 mb-4">クイックリンク</h3>
        <ul className="space-y-2">
          <li><button onClick={() => smoothScroll('hero')} className="text-gray-300 hover:text-white transition-colors duration-200">ホーム</button></li>
          <li><button onClick={() => smoothScroll('about')} className="text-gray-300 hover:text-white transition-colors duration-200">会社概要</button></li>
          <li><button onClick={() => smoothScroll('services')} className="text-gray-300 hover:text-white transition-colors duration-200">サービス内容</button></li>
          <li><button onClick={() => smoothScroll('contact')} className="text-gray-300 hover:text-white transition-colors duration-200">お問い合わせ</button></li>
        </ul>
      </div>

      {/* 営業時間 */}
      <div>
        <h3 className="text-xl font-bold text-blue-300 mb-4">営業時間</h3>
        <ul className="space-y-2 text-gray-300">
          <li>平日: 8:00 - 18:00</li>
          <li>土曜: 8:00 - 17:00</li>
          <li>日曜・祝日: 定休日</li>
          <li className="text-sm mt-4 text-blue-200">無料見積もりも実施中</li>
        </ul>
      </div>
    </div>
    
    <div className="container mx-auto px-6 mt-8 pt-8 border-t border-gray-700 text-center">
      <p className="text-gray-400 text-sm">&copy; 2025 辻川塗装. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
