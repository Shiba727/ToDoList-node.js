const taskController = require('../controllers/taskController.js');
// const userController = require('../controllers/userController.js');

module.exports = function (app) {

  app.get('/tasks', taskController.index);
  app.get('/api/tasks', taskController.indexApi);
  // app.get('/',userController.signinPage);
  app.post('/addTask', taskController.addTask);
  // app.post('/register',userController.register);
  // app.post('/login',userController.login);
};