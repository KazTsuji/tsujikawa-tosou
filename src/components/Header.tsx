"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface HeaderProps {
  smoothScroll: (id: string) => void;
}

const Header = ({ smoothScroll }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSmoothScroll = (id: string) => {
    smoothScroll(id);
    setIsMenuOpen(false); // メニューを閉じる
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-shadow duration-300">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* 会社ロゴ */}
        <Image
          src="/comLogo.jpg"
          alt="Company Logo"
          width={288}
          height={80}
          className="h-auto"
        />

        {/* ナビゲーションメニュー (デスクトップ用) */}
        <nav className="hidden md:flex space-x-12 text-xl font-medium">
          <button onClick={() => handleSmoothScroll('about')} className="text-black hover:text-blue-500 transition-colors duration-300">会社概要</button>
          <button onClick={() => handleSmoothScroll('services')} className="text-black hover:text-blue-500 transition-colors duration-300">サービス内容</button>
          <button onClick={() => handleSmoothScroll('portfolio')} className="text-black hover:text-blue-500 transition-colors duration-300">施工事例</button>
          <button onClick={() => handleSmoothScroll('contact')} className="text-black hover:text-blue-500 transition-colors duration-300">お問い合わせ</button>
        </nav>

        {/* モバイル用ハンバーガーメニューボタン */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black hover:text-blue-500 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* モバイル用メニューリスト (オーバーレイ) */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white bg-opacity-10 flex items-center justify-center z-40">
          <nav className="flex flex-col items-center space-y-8 text-2xl font-bold text-black">
            <button onClick={() => handleSmoothScroll('about')} className="hover:text-blue-500 transition-colors">会社概要</button>
            <button onClick={() => handleSmoothScroll('services')} className="hover:text-blue-500 transition-colors">サービス内容</button>
            <button onClick={() => handleSmoothScroll('portfolio')} className="hover:text-blue-500 transition-colors">施工事例</button>
            <button onClick={() => handleSmoothScroll('contact')} className="hover:text-blue-500 transition-colors">お問い合わせ</button>
            <button onClick={() => setIsMenuOpen(false)} className="mt-8 hover:text-blue-500 transition-colors">閉じる</button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;