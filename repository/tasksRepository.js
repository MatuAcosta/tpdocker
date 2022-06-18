
class tasksRepository{
    constructor(){}

    getAll(req,res){
        return res.send({});//hacer query obtener all tasks
    }

}

module.exports = tasksRepository