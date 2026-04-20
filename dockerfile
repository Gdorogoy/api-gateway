FROM node:25-alpine3.22

RUN npm install -g pnpm

WORKDIR /app

COPY pnpm-lock.yaml package.json ./

RUN pnpm install

COPY . .

RUN pnpm build

EXPOSE 3000

CMD [ "node", "dist/main.js" ]

#-v /Users/egormac/Documents/vscode/nginx/nginx.conf:/etc/nginx/nginx.conf to attach volume !!