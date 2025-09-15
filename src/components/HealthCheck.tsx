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
      <p className="text-center text-gray-600 leading-relaxed md:text-3xl mb-12">
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
        src="healthCheck_mobile.png"
        alt="おうち健康チェック（モバイル）"
        className="block sm:hidden w-full h-auto object-cover"
      />
       {/* モバイル表示時のみ表示される文章 */}
      <div className="block sm:hidden px-6 mt-8">
        <h1 className="text-black font-bold text-xl ">屋根</h1>
        <p className="text-left text-gray-700 text-base leading-relaxed pb-8">
          屋根にひび割れや、瓦のズレ、色褪せはありませんか？屋根は常に雨風や直射日光にさらされており、お住まいの中で最も劣化が進みやすい場所です。
        </p>
         <h1 className="text-black font-bold text-xl ">色褪せ</h1>
        <p className="text-left text-gray-700 text-base leading-relaxed pb-8">
          外壁の色が全体的に薄くなっていませんか？特に日当たりの良い面は、紫外線によって塗料が劣化し、色が褪せてきます。これは、塗膜の保護機能が低下しているサインです。
        </p>
        <h1 className="text-black font-bold text-xl ">ヒビ（クラック）</h1>
        <p className="text-left text-gray-700 text-base leading-relaxed pb-8">
          外壁に細かいヒビ（クラック）が入っていませんか？ヘアークラックと呼ばれる0.3mm以下の細かいヒビでも、放置すると水が入り込み、内部の腐食やカビの原因となります。外壁に細い線状のひび割れはありませんか？ひび割れは、そこから雨水が侵入し、雨漏りや建物の構造を弱める原因となるため、早めの対処が必要です。
        </p>
        <h1 className="text-black font-bold text-xl ">シーリング</h1>
        <p className="text-left text-gray-700 text-base leading-relaxed pb-8">
          窓や外壁のつなぎ目にあるゴム状のシーリング材が、ひび割れたり、痩せて隙間ができていませんか？シーリング材は建物の防水性を保つ重要な役割を担っています。
        </p>
        <h1 className="text-black font-bold text-xl ">サビ 
</h1>
        <p className="text-left text-gray-700 text-base leading-relaxed pb-8">
          鉄部（手すりや雨戸など）にサビが発生していませんか？サビは放置するとどんどん広がり、鉄部の強度を低下させます。
        </p>
        <h1 className="text-black font-bold text-xl ">チョーキング
</h1>
        <p className="text-left text-gray-700 text-base leading-relaxed pb-8">
           壁を手で触ってみてください。白い粉が手に付着しませんか？これは「チョーキング（白亜化）」と呼ばれ、塗料が分解されて粉状になっている状態です。塗膜が防水性を失い始めているサインです。
        </p>
        <h1 className="text-black font-bold text-xl ">カビ・藻 

</h1>
        <p className="text-left text-gray-700 text-base leading-relaxed pb-8">
           壁の日の当たらない場所や湿気がこもりやすい場所に、緑や黒っぽいカビ、コケが生えていませんか？これは、塗膜が持つ防カビ機能が失われていることを示しています。
        </p>
      </div>
    </div>
  </section>
);

export default HealthCheck;
