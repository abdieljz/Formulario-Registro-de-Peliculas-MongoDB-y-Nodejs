const express = require('express');
const router = express.Router();

const Task = require('../models/tareas');

//obtener las tareas
router.get('/', async (req,res) =>{
   const tasks = await Task.find();
   console.log(tasks);
    res.render('index',{
        tasks 
    });
});

router.post('/add', async (req,res) => {
  const task = new Task(req.body);
  //guardar en la base de datos
    await task.save();
    res.redirect('/');
})

router.get('/Eliminar%Pelicula/:id', async(req,res) =>{
    const { id }  = req.params;
    await Task.remove({_id: id});
    res.redirect('/');
});


router.get( '/second/:id', async (req,res) =>{
    const { id }  = req.params;
    const task = await Task.findById(id);
    res.render('second',{
        task
    });
});

router.post('/update/:id' , async(req,res) =>{
    const { id } = req.params;
    await Task.update({_id : id}, req.body);
    res.redirect('/');
});

module.exports = router;