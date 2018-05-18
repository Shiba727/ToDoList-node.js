const bcrypt = require('bcrypt');
var db = require('../models');
var User = db.User;

// bcrypt.encode is for encrpt the password
let userController = {
	loginPage: function(req,res){
    	res.render('login',{title:'Login'});
	},
	registerPage: function(req,res){
    	res.render('register',{title:'Register'});
	},
	register: function(req,res){
		let username=req.body.username;
		let password=req.body.password;
		let repeat_password = req.body.repeat_password;
		if(password!==repeat_password){
			res.redirect(303,'/register')
		}
		password=bcrypt.hashSync(password,10);
		User.create({
			username: username,
			passwd: password
		})
		.then(function(user){
			req.session.user_id = user.id;
			res.redirect(303,'/tasks');
		});
	},
	login: function(req,res){
		let username=req.body.username;
		let password=req.body.password;
		User.find({
			where:{
				username:username,
			}
		})
		.then(function (user){
			if(!user){
				res.redirect(303,'/register')
			}else{
				if(bcrypt.compare(password,user.passwd)){
					req.session.user_id = user.id;
					res.redirect(303,'/tasks');
				}else{
					res.redirect(303,'/login')
				}
			}
		})
	},
	logout: function(req,res){
		req.session.destroy();
		res.redirect(303,'/');
	}		
};
module.exports = userController;

// solved error route post 回傳空的object  --> 因為controller還沒寫register,但在route會先跑，接受到空的object則會錯誤
// solved error: (login) find where query has been removed -->沒有用findAll跟物件少括號
// too many res??
