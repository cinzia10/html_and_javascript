const course1 = {
    name: 'programmatore front end',
    hour: 300,
    ended: false
}

const student1 = {
    name: 'Cinzia',
    surname: 'Ariotti',
    age: 25,
    luogo: 'Genova',
    married: false,
    course: course1,
    vote: [5,8,3],
    genere: 'F'
}

const student2 = {
    name: 'Polina',
    surname: 'Boretc',
    age: 27,
    luogo: 'Chelyaddnsk',
    married: false,
    course: course1,
    vote: [7,8,3],
    genere: 'F'
}

const student3 = {
    name: 'Giovanni',
    surname: 'Cambiaso',
    age: 24,
    luogo: 'Genova',
    married: false,
    course: course1,
    vote: [8,2,4],
    genere: 'M'
}
const student4 = {
    name: 'Mattia',
    surname: 'Della Mutta',
    age: 24,
    luogo: 'Genova',
    married: false,
    course: course1,
    vote: [2,3,2],
    genere: 'M'
}
const student5 = {
    name: 'Mirco',
    surname: 'Faro',
    age: 28,
    luogo: 'Santa Margherita Ligure',
    married: false,
    course: course1,
    vote: [8,6,9],
    genere: 'M'
}
const student6 = {
    name: 'Paolo',
    surname: 'Foppiano',
    age: 24,
    luogo: 'Genova',
    married: false,
    course: course1,
    vote: [5,8,9],
    genere: 'M'
}
const student7 = {
    name: 'Leslie',
    surname: 'Fritas',
    age: 27,
    luogo: 'Lima',
    married: true,
    course: course1,
    vote: [5,6,8],
    genere: 'F'
}
const student8 = {
    name: 'Christopher',
    surname: 'Limone',
    age: 27,
    luogo: 'Genova',
    married: false,
    course: course1,
    vote: [5,7,5],
    genere: 'M'
}
const student9 = {
    name: 'Artem',
    surname: 'Sangiorgio',
    age: 24,
    luogo: 'San Pietroburgo',
    married: false,
    course: course1,
    vote: [9,9,1],
    genere: 'M'
}
const student10 = {
    name: 'Jessica',
    surname: 'Vitanza',
    age: 24,
    luogo: 'Trapani',
    married: false,
    course: course1,
    vote: [6,7,8],
    genere: 'F'
}

const students = [student1, student2, student3, student4, student5, student6, student7, student8, student9, student10];

// // function writeStudentsToDocument(studentsArray) {
// //     const container = document.getElementById('students-container');
// //     for (const students of studentsArray) {
// //         const li = document.createElement('li');
// //         const node = document.createTextNode(students.name + students.surname);
// //         const ageNode = document.createTextNode(' - Età: ' + students.age);
// //         li.appendChild(node);
// //         li.appendChild(ageNode);
// //         container.appendChild(li);
// //     }
// // }

// // writeStudentsToDocument(students);


// //TROVARE ERRORE
    // const container = document.getElementById('students-container');
    // for (const student of students){
    //     const li = document.createElement ('li');
    //     const nameDiv = document.createElement ('div');
    //     const nameNode = document.createTextNode (student.name);
    //     nameDiv.appendChild(nameNode);
    //     li.appendChild(nameNode);
    //     const ageDiv = document.createElement('div');
    //     const ageNode = document.createTextNode('Eta ' + student.age);
    //     ageDiv.appendChild(ageNode);
    //     const courseDiv = document.createElement('div');
    //     const courseNode = document.createTextNode(student.luogo);
    //     courseDiv.appendChild(courseNode);
    //     li.appendChild(courseDiv);
    //     li.appendChild(ageDiv);
    //     container.appendChild(li);
    // }


function createStudentListHtml (){
    const container = document.getElementById('students-container');
    container.innerHTML=''
    for (const student of students){
        const li = document.createElement ('li');
        const nameDiv = document.createElement ('div');
        const nameNode = document.createTextNode (student.name + ' ' + student.surname);
        nameDiv.appendChild(nameNode);
        li.appendChild(nameNode);
        const ageDiv = document.createElement('div');
        const ageNode = document.createTextNode('Eta ' + student.age);
        ageDiv.appendChild(ageNode);
        const courseDiv = document.createElement('div');
        const courseNode = document.createTextNode(student.luogo);
        courseDiv.appendChild(courseNode);
        li.appendChild(courseDiv);
        li.appendChild(ageDiv);
        container.appendChild(li);
    }
}



// function onlyFemaleStudents (){
//     const femaleStudents = students.filter((s)=>s.genere==='F')
//     createStudentListHtml(femaleStudents)
// }


function createStudentListHtml (studentsArray){
    const container = document.getElementById('students-container');
    container.innerHTML=''
    for (const student of studentsArray){
        const li = document.createElement ('li');
        const nameDiv = document.createElement ('div');
        const nameNode = document.createTextNode (student.name + ' ' + student.surname);
        nameDiv.appendChild(nameNode);
        li.appendChild(nameNode);
        const ageDiv = document.createElement('div');
        const ageNode = document.createTextNode('Eta ' + student.age);
        ageDiv.appendChild(ageNode);
        const courseDiv = document.createElement('div');
        const courseNode = document.createTextNode(student.luogo);
        courseDiv.appendChild(courseNode);
        li.appendChild(courseDiv);
        li.appendChild(ageDiv);
        container.appendChild(li);
    }
}

function studentByAge (){
    createStudentListHtml.sort(compareStudentsByAge);
    createStudentListHtml(students);
}

function compareStudentsByAge (stu1, stu2){
    return stu1.age-stu2.age;
}