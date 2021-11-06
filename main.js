// Хранилищем будет объект, а имена задач - ключами.
//
//     const list = {
//     "create a task": "In Progress",
//     "make a bed": "Done",
//     "write a post": "To Do",
// }
//
// Функция changeStatus - будет менять статус задачи
//
// changeStatus("write a post", "Done")
//
// Функция addTask - добавляет новую задачу
//
// addTask('have a walk')
//
// Функция deleteTask - удаляет задачу
//
// deleteTask('have a walk')
//
// Функция showList будет выводить весь список дел в виде
//
// Todo:
//     "create a task",
//         "make a bed",
//         In Progress:
//     "write a post"
// Done:
//     -

const list = {
    "create a task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
}

function changeStatus(task, status) {
    list[task] = status;
}

changeStatus("write a post", "Done");

function addTask(task) {
    list[task] = 'To Do';
}

addTask('have a walk')

function deleteTask(task) {
 delete list[task];
}

deleteTask('have a walk')


function showList() {
    console.log('Todo:');
    let countTodo = false;
    let countInProgress = false;
    let countDone = false;
    for (let key in list){
        if ( list[key] === 'Todo' ){
            console.log( key );
            countTodo = true;
        }
    }
    if (!countTodo){
        console.log('-');
    }
    console.log('In progress:');
    for (let key in list){
        if ( list[key] === 'In Progress' ){
            console.log( key );
            countInProgress = true;
        }
    }
    if (!countInProgress){
        console.log('-');
    }
    console.log('Done:');
    for (let key in list){
        if ( list[key] === 'Done' ){
            console.log( key );
            countDone = true;
        }
    }
    if (!countDone){
        console.log('-');
    }

}

showList();



