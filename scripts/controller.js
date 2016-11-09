/**
 * Created by nethmih on 9/11/16.
 */

function Controller(){

};

Controller.prototype.AddNewtodo =  () => {
    console.log('controller addNewtodo hits');
    let title = document.getElementById('texttodo').value.toString();
    var task = new Task(title,++taskId,true);
    //var tasks = new(task);
    totalTasks.push(task);
    localStorage.setItem('totalTasks',JSON.stringify(totalTasks));
    DisplayTasks();
};


Controller.prototype.DisplayTasks = () =>  {
    let div = document.getElementById('viewTasks');
    div.innerHTML = "";

    for ( var i = 0; i < totalTasks.length; ++i ) {

        let tick = document.createElement('input');
        tick.type = 'checkbox';
        tick.id = totalTasks[i].id;
        tick.textContent = totalTasks[i].title;

        div.appendChild(tick);
    }

    return div;
};

Controller.prototype.SelectAll = () => {
    console.log('select all hits');
};

Controller.prototype.SelectActive = () => {
    console.log('select active hits');
};

Controller.prototype.SelectCompleted = () => {
    console.log('select completed hits');
};