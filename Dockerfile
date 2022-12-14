FROM node:16 as ARTIFACT
WORKDIR /usr/src/app
COPY . .
RUN ls
RUN npm install --platform=linuxmusl --arch=x64 sharp
RUN npm run build

FROM node:16-alpine3.15
WORKDIR /usr/src/app
COPY --from=ARTIFACT /usr/src/app .
EXPOSE 3000
CMD [ "npm", "run", "start:prod" ]
