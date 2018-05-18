
This is my first project by using node.js.

## Config.json
which is for setting up for mysql and connecting to mysql

## Basic To do list
* User could register/login.
* User could add/delete/edit task to each list.
* Use Session to control who could manipulate the list.
* Use bcrpt to encrypt user password 

How to start a basic project:
```
$ npm install
# edit config/config.json
# create database
$ export NODE_ENV=development
$ ./node_modules/sequelize-cli/lib/sequelize db:migrate #重新建立資料庫
$ ./node_modules/sequelize-cli/lib/sequelize db:seed:all
$ npm start
```

then, go to:  http://localhost:3000/ to see it work.