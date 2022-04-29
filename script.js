
const todo1 = {
    name: 'Compra il pane',
    priority: 3
}

const todo2 = {
    name: 'Ripassa HTML',
    priority: 5
}

const todo3 = {
    name: 'Ripassa CSS',
    priority: 7
}

const todo4 = {
    name: 'Studia JavaScript',
    priority: 9
}

const todo5 = {
    name: 'Compra il regalo alla mamma',
    priority: 10
}

const todoList = [todo1, todo2, todo3, todo4, todo5];

function logToDos (todoArray){
    for (const todo of todoArray) {
        console.log(todo.name + " - Priorità: " + todo.priority)
    }
}

logToDos(todoList)