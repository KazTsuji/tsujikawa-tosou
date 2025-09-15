"use client";

import React, { useState } from 'react';

const SectionHeading = ({ children, id }: { children: React.ReactNode, id: string }) => (
  <h2 id={id} className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12 relative pb-4 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-16 after:h-1 after:bg-blue-500 after:rounded-full">
    {children}
  </h2>
);

const Contact = () => {
  const [messageLength, setMessageLength] = useState(0);
  const maxMessageLength = 500;
  const [status, setStatus] = useState(''); // ステータス表示用

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageLength(e.target.value.length);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // デフォルトのフォーム送信をキャンセル

    setStatus('送信中...');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('送信が完了しました！');
        form.reset(); // フォームをリセット
        setMessageLength(0);
      } else {
        setStatus(`送信に失敗しました: ${result.message}`);
      }
    } catch (error) {
      console.error(error);
      setStatus('送信中にエラーが発生しました');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading id="contact">お問い合わせ</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* 左側のフォームエリア */}
          <div className="bg-blue-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl text-black font-bold mb-6">お問い合わせフォーム</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">お名前 <span className="text-red-500">*</span></label>
                  <input type="text" id="name" name="name" placeholder="山田太郎" className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">電話番号</label>
                  <input type="tel" id="phone" name="phone" placeholder="090-xxxx-xxxx" className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">メールアドレス <span className="text-red-500">*</span></label>
                <input type="email" id="email" name="email" placeholder="example@email.com" className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" required />
              </div>
              <div>
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">ご希望のサービス</label>
                <select id="service" name="service" className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all">
                  <option value="">選択してください</option>
                  <option value="外壁塗装">外壁塗装</option>
                  <option value="屋根塗装">屋根塗装</option>
                  <option value="防水工事">防水工事</option>
                  <option value="見積もり依頼">見積もり依頼</option>
                  <option value="その他">その他</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">お問い合わせ内容 <span className="text-red-500">*</span></label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5} 
                  placeholder="ご質問やご相談内容をお聞かせください" 
                  className="w-full p-3 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  maxLength={maxMessageLength}
                  onChange={handleMessageChange}
                  required
                ></textarea>
                <div className="text-right text-sm text-gray-500 mt-1">
                  {messageLength}/{maxMessageLength}文字
                </div>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                お問い合わせを送信
              </button>
            </form>
            {status && <p className="mt-4 text-center font-bold">{status}</p>}
          </div>

          {/* 右側の会社情報エリア */}
          <div className="bg-blue-50 p-8 rounded-xl shadow-lg flex flex-col space-y-8">
            <h3 className="text-2xl text-black font-bold mb-2">会社情報</h3>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.127l-2.583 1.393a8.955 8.955 0 005.122 5.122l1.393-2.583a1 1 0 011.127-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">電話番号</p>
                <p className="text-gray-600">080-3863-6779</p>
                <p className="text-gray-500 text-sm">平日: 8:00-18:00 / 土曜: 8:00-17:00</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">所在地</p>
                <p className="text-gray-600">〒595-0023</p>
                <p className="text-gray-600">大阪府 泉大津市 豊中町 3-2-10</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">メールアドレス</p>
                <p className="text-gray-600">tsujikawa24@yahoo.co.jp</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">営業時間</p>
                <p className="text-gray-600">平日: 8:00 - 18:00</p>
                <p className="text-gray-600">土曜: 8:00 - 17:00</p>
                <p className="text-gray-600">日曜・祝日: 定休日</p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-blue-200">
              <div className="flex items-center space-x-2 text-blue-600 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.5 2C7.36 2 4 5.36 4 9.5c0 3.75 3.14 8.76 7.5 12.36 4.36-3.6 7.5-8.61 7.5-12.36C19 5.36 15.64 2 11.5 2zM12 11h-1.5V6H12v5zm.5 5h-1v-2h1v2z"></path>
                </svg>
                <span className="text-lg font-bold">無料見積もりも実施中</span>
              </div>
              <p className="text-gray-600 text-sm">現地調査・お見積もりは無料です。お気軽にお問い合わせください。</p>
              <button className="w-full mt-4 bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.127l-2.583 1.393a8.955 8.955 0 005.122 5.122l1.393-2.583a1 1 0 011.127-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                今すぐ電話で相談
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;