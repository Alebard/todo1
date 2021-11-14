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


const list = [
    {
        id: 1,
        name: 'create a post',
        status: 'TODO',
        priority: 'low',
    },
    {
        id: 2,
        name: 'test',
        status: 'Done',
        priority: 'high'
    }
]

function changeStatus(name, status) {
    let newTask = list.find(item => item.name === name);
    newTask.status = status;
}

changeStatus('test', 'In progress');

function addTask(name, status, priority) {
    let id = list.length + 1;
    list.push({ 'id': id, 'name': name, 'status' : status, 'priority' : priority});
}

addTask('write code', 'TODO', 'high');
addTask('read conspect', 'In Progress', 'mid');



function deleteTask(name) {
    let deleteTask = list.findIndex(item => item.name === name);
    list.splice(deleteTask, 1);
}
// deleteTask('test');

// console.log(list);

function showBuy(val){
    if(val === 'priority'){
        let hasHighPriority = false;
        let hasMidPriority = false;
        let hasLowPriority = false;

        console.log('high');
        for (let i=0; i<list.length; i++){
            if( list[i].priority === 'high'){
                console.log(`    ${list[i].name}`);
                hasHighPriority = true;
            }

        }
        if (!hasHighPriority){
            console.log('   -')
        }
        console.log('mid');
        for (let i=0; i<list.length; i++){
            if( list[i].priority === 'mid'){
                console.log(`    ${list[i].name}`);
                hasMidPriority = true;
            }
        }
        if (!hasMidPriority){
            console.log('   -')
        }
        console.log('low');
        for (let i=0; i<list.length; i++){
            if( list[i].priority === 'low'){
                console.log(`    ${list[i].name}`);
                hasLowPriority = true;
            }

        }
        if (!hasLowPriority){
            console.log('   -')
        }
    }
    if(val === 'status'){
        let hasInProgressStatus = false;
        let hasTodoStatus = false;
        let hasDoneStatus = false;

        console.log('ToDo');
        for (let i=0; i<list.length; i++){
            if( list[i].status === 'TODO'){
                console.log(`    ${list[i].name}`);
                hasTodoStatus = true;
            }

        }
        if (!hasTodoStatus){
            console.log('   -')
        }
        console.log('In Progress');
        for (let i=0; i<list.length; i++){
            if( list[i].status === 'In Progress'){
                console.log(`    ${list[i].name}`);
                hasInProgressStatus = true;
            }
        }
        if (!hasInProgressStatus){
            console.log('   -')
        }
        console.log('Done');
        for (let i=0; i<list.length; i++){
            if( list[i].status === 'Done'){
                console.log(`    ${list[i].name}`);
                hasDoneStatus = true;
            }

        }
        if (!hasDoneStatus){
            console.log('   -')
        }
    }


}



showBuy('status');



