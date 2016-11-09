/**
 * Created by nethmih on 9/11/16.
 */

function AddNewtodo(){
    console.log("view hits");
    let ctrl = new Controller();
    ctrl.AddNewtodo();
};

 var DisplayTasks = () => {
    let ctrl = new Controller();
    ctrl.DisplayTasks();
};

var SelectAll =() => {
    let ctrl = new Controller();
    ctrl.SelectAll();
};

var SelectActive =() => {
    let ctrl = new Controller();
    ctrl.SelectActive();
};

var SelectCompleted = () => {
    let ctrl = new Controller();
    ctrl.SelectCompleted();
};