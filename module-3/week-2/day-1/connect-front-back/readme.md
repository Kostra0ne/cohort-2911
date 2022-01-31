# backend 

$ npx express-generator server --no-view
$ cd server
$ npm i

# create a dev script

"scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www"
},

$ npm run dev

# frontend 

$ npm init vite@latest client
$ cd client
$ npm i
$ npm run dev