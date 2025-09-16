/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://tsujikawa-tosou.vercel.app',
  generateRobotsTxt: true, // robots.txtの生成を有効にする
  sitemapSize: 7000,
  outDir: './out', // Next.jsの`out`ディレクトリに出力する場合
  // 他のオプションもここに追加できます
};