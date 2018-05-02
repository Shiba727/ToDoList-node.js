

```
$ npm install
# edit config/config.json
# create database
$ export NODE_ENV=development
$ ./node_modules/sequelize-cli/lib/sequelize db:migrate #重新建立資料庫
$ ./node_modules/sequelize-cli/lib/sequelize db:seed:all
$ npm start
```

then, go to: http://localhost:3000/api/tasks or http://localhost:3000/tasks

Config
which is for setting up for mysql and connecting to mysql