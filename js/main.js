import {ADD, tasksBlock} from "./view.js";

for (let i = 0; i < ADD.BTN.length; i++){
    ADD.BTN[i].addEventListener('click', function () {
        let input = ADD.INPUT[i]
        let taskName = input.value;
        if (!taskName.trim()){
            input.value = ''
            return false;
        }
        let newTask = document.createElement('div');
        newTask.className = `task`;
        newTask.innerHTML = `
                    <label>
                    <div class="checkbox__circle">
                    </div>
                        <input class="checkbox__input" type="checkbox">
                        <span class="task__description"> ${taskName} </span>
                    </label>
                    <div class="task__delete">
                        <img src="icons/delete.png" alt="">
                    </div>`
        tasksBlock[i].append(newTask);
        input.value = ''
        newTask.querySelector('.task__delete').addEventListener('click', deleteTask);
        newTask.querySelector('.checkbox__input').addEventListener('click', taskChangeStatus);
    })

}

function deleteTask() {
    let task = this.parentElement;
    task.remove();
}

function taskChangeStatus () {
    let task = this.parentElement.parentElement;
    task.classList.toggle('checked');
    if (task.classList.contains('checked')){
        let transferTo = this.parentElement.parentElement.parentElement.nextElementSibling;
        transferTo.prepend(task);
    } else {
        let transferTo = this.parentElement.parentElement.parentElement.previousElementSibling;
        transferTo.prepend(task);
    }
}
