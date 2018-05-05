
# **Node.js, Express Note**

### How to install node.js 
https://nodejs.org/en/download/

### npm
- 以Node.js為主的套件管理工具

### Commands 
```
npm -v                      #check the version
npm install npm@latest -g   # upgrade npm
npm init [--yes]              # create package.json
npm install <package_name>    # install specific package
    [--save][--save-dev][--no-save][-g]
npm uninstall <package_name>  # uninstall specific package
npm install                   # install dependencies from package.json
```

---
# Express
minimal and flexible Node.js web application framework

## installing
```
mkdir app_name
cd app_name
npm install express
```
---
## Node/Express as a Server
在遠端電腦作為一個網站伺服器，會根據request，回傳相對應的response

1. GET - Requests data from a specified resource
2. POST - Submits data to be processed to a specified resource


## server.js
```javascript
const express = require('express');
const app = express(); // build an Express server

// route
// GET
app.get('/about_me', function(req, res){
    var user = {name: req.query.name};
    res.render('index', {user: user});
});

// POST
// 要先$ npm install body-parser
app.use(express.bodyParser()); 
app.post('/', function(req, res){
    console.log(request.body);
    res.send(req.body.name);
});

app.listen(3000,function(){
	console.log('Example app is running on port 3000 now');
})
```

## route structure

app.method(path, handler);

* `app` is an instance of express
* `method` is an HTTP request method, in lowercase
* `path` is a path on the server (URI)
* `handler` is the function executed when the route is matched

----

## static files (html,css,js)

使用 express.static 來設置靜態文件路徑(CSS,JS)，將css,js等資料夾放到 /public下
```
app.use(express.static('public'));
```
接著修改index.ejs裡的相關路徑
```
 <link rel="stylesheet" type="text/css" href="/css/grayscale.min.css" />
```


## view engine
### ejs
- must install ejs first: $ npm install ejs --save
- index.ejs 放在 /views 底下 
```javescript
app.set('view engine','ejs'); 
```
---
### pug (jade)
- must install pug first: $ npm install pug
``` javascript
app.set('view engine', 'pug');
```

----

### pug example

```
html
  head
    title= title
  body
    h1= message
```

``` javascript
app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello!' });
});
```

### 補充 

convert html to pug(jade): https://html2pug.herokuapp.com/






