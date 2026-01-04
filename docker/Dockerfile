# Node.js 20をベースイメージとして使用
FROM node:23-alpine

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとyarn.lockをコピー
COPY app/jobmatch-frontend/package.json app/jobmatch-frontend/yarn.lock ./
COPY app/jobmatch-frontend .

# 依存関係をインストール
RUN yarn install

# アプリケーションのソースコードをコピー
COPY . .

# ポート3000を公開
EXPOSE 3000

# Viteの設定
ENV VITE_HOST=0.0.0.0

# 開発サーバーを起動
CMD ["yarn", "run", "dev", "--host", "0.0.0.0", "--port", "3000"]