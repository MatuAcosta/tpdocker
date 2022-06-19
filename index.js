const express = require('express')
const app = express()
const tasksRoutes = require('./routes/tasksRoutes');
const db = require('./db/db');

app.use(express.json());
app.use('/tasks',tasksRoutes)


app.listen(3000,()=>{
    console.log('App corriendo en puerto 3000');
})