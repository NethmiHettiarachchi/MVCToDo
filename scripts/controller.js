/**
 * Created by nethmih on 9/11/16.
 */

function Controller(){

};

Controller.prototype.AddNewTask = function(textId){
    console.log('controller AddNewTask hits');
    var newToDo = document.getElementById(textId).value;
    if (newToDo !== '') {
        var newTask = new Task(newToDo, taskId++, true);

        try {
            if (newTask != 'undefined') {
                totalTasks.push(newTask);
                localStorage.setItem('totalTasks',JSON.stringify(totalTasks));
               // console.log(totalTasks);
                var tTasks = localStorage.getItem('totalTasks');
                tTasks = JSON.parse(tTasks);
                console.log('localStorage ' + tTasks[0].title);
            }

        } catch (e) {
            console.log('Error ' + e);
        }
    }else{
        this.errorMsg('To Do Task cannot be empty');
    }
};


Controller.prototype.removeElement = function (id) {
    console.log('remove element hits   ' + id);
    var index =-1;
    for(var i=0;i<totalTasks.length;i++){
        //console.log(totalTasks[i].id + "[[[[[[[[");
        if(totalTasks[i].id == id){
           // console.log('////////////' + totalTasks[i].id);
            index = i;
            break;
        }
    }
    console.log('controller hits ' + index);
    if(index != -1){
        totalTasks[index].active = false;
        return true;
    }else{
        this.errorMsg('Index does not exist');
        return false;
    }

};

Controller.prototype.errorMsg = function (msg) {
    alert(msg);
}

