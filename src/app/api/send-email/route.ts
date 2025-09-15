import { NextResponse, NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, message } = await req.json();

    // Nodemailerのトランスポーターを設定
    const transporter = nodemailer.createTransport({
      service: 'gmail', // または'yahoo'など、お使いのメールサービス
      auth: {
        user: process.env.EMAIL_USER, // .env.localファイルで設定
        pass: process.env.EMAIL_PASS, // .env.localファイルで設定
      },
    });

    // メールオプションを設定
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'tsujikawa24@yahoo.co.jp', // ここにメールを受け取るアドレスを入力
      subject: `ウェブサイトからのお問い合わせ: ${name}`,
      text: `
        お名前: ${name}
        メールアドレス: ${email}
        電話番号: ${phone || 'なし'}
        ご希望のサービス: ${service || 'なし'}
        お問い合わせ内容:
        ${message}
      `,
    };

    // メールを送信
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'お問い合わせが送信されました' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: '送信に失敗しました' }, { status: 500 });
  }
}