const tasksRepository = require('../repository/tasksRepository');
const task = new tasksRepository();
class tasksController {
    constructor() {}

    getAll(req,res){
        return (task.getAll(req,res));
    }


}

module.exports = tasksController