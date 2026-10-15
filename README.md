# kawaewanko — Next.js Portfolio

Next.js App Router / React / CSS で作った日英対応ポートフォリオです。

## 起動
Node.js 20.9 以上が必要です。

```bash
npm install
npm run dev
```

http://localhost:3000 を開いてください。

## ビルド確認
```bash
npm run build
npm start
```

## 主な機能
- 日本語 / English 切り替え（選択を localStorage に保存）
- ライト / ダークテーマ切り替え
- モバイル用ナビゲーション
- レスポンシブレイアウト
- Next.js metadata / Open Graph 設定
- 外部 UI ライブラリなし

## カスタマイズ
- 文言と翻訳: `app/portfolio.js` の `copy`
- プロジェクトカード: `app/portfolio.js` の `project-grid`
- 色やレイアウト: `app/globals.css`
- タイトルや説明: `app/layout.js`
- GitHub URL: `https://github.com/kawaewanko`

プロジェクトカードはサンプルなので、実際の制作物に置き換えてください。公開するなら Vercel などの Next.js 対応ホスティングに GitHub リポジトリを接続するのが簡単です。
