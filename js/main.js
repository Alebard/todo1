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

const filterByStatus = ['TODO', 'Done', 'In Progress'];
const filterByPriority = ['high', 'mid', 'low'];

const id = 2;

function changeStatus(name, status) {
    let changesTask = list.find(item => item.name === name);
    changesTask.status = status;
}

changeStatus('test', 'In Progress');

function addTask(name, status, priority) {
    let taskId = id + 1;
    list.push({'id': taskId, 'name': name, 'status': status, 'priority': priority});
}

addTask('write code', 'TODO', 'high');

// addTask('read conspect', 'In Progress', 'mid');


function deleteTask(name) {
    let deleteTask = list.findIndex(item => item.name === name);
    list.splice(deleteTask, 1);
}

// deleteTask('test');

function showBy(targetGroup) {
    const isStatus = (targetGroup === 'status');
    const isPriority = (targetGroup === 'priority');
    let groupArr = [];

    if (isStatus){
        groupArr = filterByStatus;
        showList(targetGroup, groupArr);
    } else if (isPriority){
        groupArr = filterByPriority;
        showList(targetGroup, groupArr);
    } else{
        console.log('unknown group')
    }
}

function showList(targetGroup, groupArr) {

    groupArr.forEach(function(item) {
        console.log(item);
        let tasks = '   ';
        for (let task of list){
            let isValidTaskValue = (task[targetGroup] === item);
            if (isValidTaskValue){
                tasks += `"${task.name}", `;
            }
        }

        let NoTasks = (tasks === '   ');
        if (NoTasks){
            tasks = '-';
        }

        console.log(tasks);

    });
}

showBy('priority');



