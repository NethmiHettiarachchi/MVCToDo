/**
 * Created by nethmih on 9/11/16.
 */


var View = function (textId, buttonId) {
    this.textId = textId ;
    this.buttonId = buttonId;
    this.controller = new Controller();
};

View.prototype.init = function(){
    var self = this;
    document.getElementById(this.buttonId).addEventListener('click',function (e) {
        self.controller.AddNewTask(self.textId);
        self.render();
    })
};

View.prototype.render = function () {
    console.log('render hits ');
    var self = this;
    var div = document.getElementById('viewTasks');
    var ul = document.getElementById('viewToDo');
    ul.innerHTML = '';

    totalTasks.forEach(function (item) {
        if(item.active){
            var span = document.createElement('span');
            var tick = document.createElement('input');
            tick.id = item.id;
            tick.type = 'checkbox';
            var li = document.createElement('li');
            li.innerHTML = item.title;
            span.appendChild(tick);
            span.appendChild(li);
            ul.appendChild(span);
            tick.addEventListener('change', function (e) {
                if(self.controller.removeElement(tick.id)){
                    console.log('item removed');
                    self.render();
                }

            });
        }
    });
    div.appendChild(ul);
    document.getElementById(this.textId).value = '';
    console.log('done');
};



document.getElementById('all').addEventListener('click',function (e) {
    // getAll();
    // this.render();
    //disabling the 'all' href for the moment
   // var anchor = document.getElementById('all');
   // anchor.href = "javascript: void(0)";

    //Getting the to be completed tasks
    let todoView = new View('texttodo', 'addtodo');
    todoView.render();

    //Getting the completed tasks
    let div = document.getElementById('viewTasks');
    let childDiv = document.createElement('div');
    childDiv.id = 'childDiv';
    childDiv.innerHTML = 'completed tasks';
    let ul = document.createElement('ul');

    totalTasks.forEach(function (item) {
        if(!item.active){
            var li = document.createElement('li');
            li.innerHTML = item.title;
            ul.appendChild(li);

        }
    });

    childDiv.appendChild(ul);
    div.appendChild(childDiv);
    console.log('all hits');
});

document.getElementById('active').addEventListener('click',function (e) {
    //getActive();
    console.log('active hits');
    //this.render();
    let todoView = new View('texttodo', 'addtodo');
    todoView.render();
});

document.getElementById('completed').addEventListener('click',function (e) {
    console.log('render completed hits ');
    var div = document.getElementById('viewTasks');
    var ul = document.getElementById('viewToDo');
    div.innerHTML = 'Completed Tasks';
    ul.innerHTML = '';
    
    totalTasks.forEach(function (item) {
        if(!item.active){
            var li = document.createElement('li');
            li.innerHTML = item.title;
            ul.appendChild(li);
        }
    });
    div.appendChild(ul);
    console.log('completed hits');
});


// initialize the app
function initialize() {
    console.log('initializing app...');
    var todoView = new View('texttodo', 'addtodo');
    todoView.init();

    // for debug purposes
    window.todoView = todoView;
}

window.addEventListener('load', initialize);