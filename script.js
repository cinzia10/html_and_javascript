
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

// function logToDos (todoArray){
//     for (const todo of todoArray) {
//         console.log(todo.name + " - Priorità: " + todo.priority)
//     }
// }



// /// getElementById  // PRENDE UN ELEMENTO ALL'INTERNO DEL DOCUMENTO HTML 
// const container = document.getElementById("todo-container");

// /// createElement   // CREA UN ELEMENTO ALL'INTERNO DEL DOCUMENTO HTML
// const par = document.createElement("p");

// /// createTextNode  // CREA DEL TESTO ALL'INTERNO DEL DOCUMENTO HTML
// const textNode = document.createTextNode('Ciao');

// /// appendChild     // AGGIUNGE UN FIGLIO ALL'INTERNO DI UNA VARIABILE ALL'INTERNO DI UN DOCUMENTO HTML
// par.appendChild(textNode);
// container.appendChild(par);


// function writeToDosToDocument(todoArray) {
//     const container = document.getElementById('todo-container');
//     for (const todo of todoArray) {
//         const li = document.createElement('li');
//         li.classList.add('list-element');
//         const node = document.createTextNode(todo.name);
//         const priorityNode = document.createTextNode(' - Priorità: ' + todo.priority)
//         const br = document.createElement('br');
//         li.appendChild(node);
//         li.appendChild(br)
//         li.appendChild(priorityNode);
//         container.appendChild(li);
        
//     }
// }

// writeToDosToDocument(todoList);




function showList(){
    const container = document.getElementById('todo-container');
    container.innerHTML = '';
    for (const todo of todoList) {
        const li = document.createElement('li');
        li.classList.add('list-element');
        const node = document.createTextNode(todo.name);
        const priorityNode = document.createTextNode(' - Priorità: ' + todo.priority)
        const br = document.createElement('br');
        li.appendChild(node);
        li.appendChild(br)
        li.appendChild(priorityNode);
        container.appendChild(li);
        
    }
}