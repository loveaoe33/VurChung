
# 基底的映像檔，這邊以精簡版最新的 node.js 為範例
FROM node:16-alpine
# 建立簡易的 http-server 環境
RUN npm i -g http-server
# 指定工作目錄
WORKDIR /app
# 複製原有專案的 package.json 
COPY package*.json ./
# 在此容器下，以 production 的環境安裝所有依賴
RUN npm i --production --force
# 在此環境下，copy 原有專案的檔案和資料夾進來
COPY . .
# 若你有發現 node-sass 的版本不符時，你可以多新增指令來讓 docker 操作
RUN npm rebuild node-sass
# 安裝最新ssl，因為最新node.js為基層
RUN apk add --no-cache openssl
# 清除站存
RUN npm cache clean --force
# 一切就緒後，執行 build 
RUN npm run build 
# 確定後端的對外連接口為 80
EXPOSE 8082 
# 運用 node.js 的 http-server 套件，並讀取 npm run build 後的靜態檔案(預設是 /dist)
CMD ["http-server","dist","-p","8081"]