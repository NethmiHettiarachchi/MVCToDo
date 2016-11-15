/**
 * Created by nethmih on 9/11/16.
 */
var taskId = 0;
var totalTasks = [];

function Task(title,id,active){
    this.title = title;
    this.id = id;
    this.active = active || true;
}

function tasks(tasks){
    this.tasks = tasks || [];
}
