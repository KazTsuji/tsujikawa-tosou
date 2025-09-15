import React from 'react';
import Image from 'next/image';

interface HeaderProps {
  smoothScroll: (id: string) => void;
}
const Header = ({ smoothScroll }: HeaderProps) => (
  //<header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-shadow duration-300">
  <header className="fixed top-0 left-0 w-full bg-red-500 shadow-md z-50">

    {/*<div className="container mx-auto px-6 py-4 flex justify-between items-center">*/}
      {/* 会社ロゴ */}
      <div className="flex items-center space-x-2">
        <Image
          src="/comLogo.jpg"
          alt="Company Logo"
          width={288}   // w-72 と同じ
          height={80}   // 適当な高さ
          className="h-auto"
        />
      {/*</div>
      <div className="flex items-center space-x-2">
        <img src="/comLogo.jpg" alt="Company Logo" className="w-72 h-auto" />
      </div>*/}

      {/* ナビゲーションメニュー */}
      <nav className="hidden md:flex space-x-12 text-xl font-medium">
        <button onClick={() => smoothScroll('about')} className="text-black hover:text-blue-500 transition-colors duration-300">会社概要</button>
        <button onClick={() => smoothScroll('services')} className="text-black hover:text-blue-500 transition-colors duration-300">サービス内容</button>
        <button onClick={() => smoothScroll('portfolio')} className="text-black hover:text-blue-500 transition-colors duration-300">施工事例</button>
        <button onClick={() => smoothScroll('contact')} className="text-black hover:text-blue-500 transition-colors duration-300">お問い合わせ</button>
      </nav>
      
      {/* モバイル用ハンバーガーメニュー（省略） */}
      <div className="md:hidden">
        <button className="text-black hover:text-blue-500 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </header>
);

export default Header;

