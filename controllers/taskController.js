var db = require('../models');
var Task = db.Task;


let taskController = {
  index: function (req, res) {
    Task.findAll()
      .then(function (tasks) {
        res.render('index', {"tasks": tasks});
      });
  },
  indexApi: function (req, res) {
    Task.findAll()
      .then(function (tasks) {
        res.json(tasks);
      });
  },
  addTask: function(req,res){
    let newTask = {
      title: req.body.task
    };
    Task.create(newTask);
    res.redirect(303, '/tasks');
  },
  editTask: function(req,res){
    let id = req.query.id;
    Task.find({
      where:{
        id:id
      }
    })
    .then(function(task){
      if(task.title){
        let editTask = {
          id:id,
          title:task.title
        }
        res.render('taskEdit',{"task":editTask});        
      }else{
        res.redirect(303,'/tasks')
      }
      
    })    
  },
  updateTask: function(req,res){
    let id = req.body.taskid;
    let updateTask = { 
      title: req.body.taskname
    };
    let selector = { 
      where: { id: id }
    };
    Task.update(updateTask,selector)
    .then(function(){
      res.redirect(303, '/tasks');
    })
  },
  deleteTask: function(req,res){
    let id = req.query.id;
    Task.destroy({
      where: {
        id:id
      }
    })
    .then(function(){
      res.redirect(303, '/tasks');
    })    
  }
   
};
module.exports = taskController;