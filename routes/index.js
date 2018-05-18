const taskController = require('../controllers/taskController.js');
const userController = require('../controllers/userController.js');

function checkAuth(req, res, next) {
	if(!req.session.user_id) {
  		res.redirect(303,'/');
    }else {
      	next();
    }
}

module.exports = function (app) {

  app.get('/tasks',checkAuth, taskController.index);
  app.get('/api/tasks', taskController.indexApi);
  app.get('/',userController.loginPage);
  app.get('/register',userController.registerPage);
  app.get('/logout',userController.logout);
  app.get('/tasks/edit/',checkAuth, taskController.editTask);
  app.get('/tasks/delete/',checkAuth, taskController.deleteTask);    

  app.post('/addTask', taskController.addTask);
  app.post('/tasks/edit/', taskController.updateTask);
  app.post('/register',userController.register);
  app.post('/login',userController.login);

};
