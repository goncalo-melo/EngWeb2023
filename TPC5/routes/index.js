var express = require('express');
var router = express.Router();
var Task = require('../controllers/task')

/* GET Home Page */
router.get('/', function(req, res, next) {
    var date = new Date().toISOString().substring(0, 16)
    Task.getTasks()
        .then(tasks => {
            res.render('index',  {})
        })
        .catch(error => {
            res.render('error', { e: error, message: "Erro na obtenção da página inicial."})
        })
})


/* GET Tasks Page */
router.get('/tasks', function(req, res, next) {
    var date = new Date().toISOString().substring(0, 16)
    Task.getTasks()
        .then(tasks => {
            res.render('tasks', { tasks: tasks, d: date })
        })
        .catch(error => {
            res.render('error', { e: error, message: "Erro na obtenção da lista de tarefas."})
        })
})


/* GET Task Form Page */
router.get('/tasks/addTask', function(req, res, next){
    var date = new Date().toISOString().substring(0, 16)
    res.render('addTaskForm', {d: date})
})


/* GET Task Page */
router.get('/tasks/:idTask', function(req, res, next) {
    var date = new Date().toISOString().substring(0, 16)
    Task.getTask(req.params.idTask)
        .then(task => {
            res.render('task', { t: task, d: date })
        })
        .catch(error => {
            res.render('error', { e: error, message: "Erro na obtenção da tarefa."})
        })
})


/* GET Task Edit Form */
router.get('/tasks/editTask/:idTask', function(req, res, next) {
    var date = new Date().toISOString().substring(0, 16)
    Task.getTask(req.params.idTask)
        .then(task => {
            res.render('editTaskForm', { t: task, d: date })
        })
        .catch(error => {
            res.render('error', { e: error, message: "Erro na edição da tarefa."})
        })
})


/* GET Task Complete */
router.get('/tasks/completeTask/:idTask', function(req, res, next) {
    var date = new Date().toISOString().substring(0, 16)
    Task.getTask(req.params.idTask)
        .then(task => {
            task.status = "true"
            Task.editTask(task)
                .then(task => {
                    res.redirect('/tasks')
                })
                .catch(error => {
                    res.render('error', { e: error, message: "Error setting the task to completed."})
                })
        })
        .catch(error => {
            res.render('error', { e: error, message: "Error obtaining the task."})
        })
})


/* GET Task Delete Form */
router.get('/tasks/deleteTask/:idTask', function(req, res, next) {
    var date = new Date().toISOString().substring(0, 16)
    Task.getTask(req.params.idTask)
        .then(task => {
            res.render('deleteTaskForm', { t: task, d: date })
        })
        .catch(error => {
            res.render('error', { e: error, message: "Erro no armazenamento do registo de aluno"})
        })
})


/* GET Task Delete Confirmation */
router.get('/tasks/deleteTask/:idTask/confirm', (req,res) => {
    Task.deleteTask(req.params.idTask)
        .then(response => {
            res.redirect('/tasks')
        })
        .catch(error => {
            res.render('error', { e: error, message: "Erro na obtenção do registo de aluno"})
        })
})
  

/* POST Add Task Form */
router.post('/tasks/addTask', (req,res) => {
    Task.addTask(req.body)
        .then(task => {
            res.render('addTaskConfirm', {t: task})
        })
        .catch(error => {
            res.render('error', { e: error, message: "Error adding task."})
        })
})


/* POST Edit Task Form */
router.post('/tasks/editTask', (req,res) => {
    Task.editTask(req.body)
        .then(task => {
            res.render('editTaskConfirm', {t: task})
        })
        .catch(error => {
            res.render('error', { e: error, message: "Error editing task information."})
        })
})


module.exports = router;


