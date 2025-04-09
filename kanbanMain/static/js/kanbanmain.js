import {newTaskPopup} from './templates.js';

let addNewTask = document.querySelector("#addNewTaskButton");
addNewTask.addEventListener('click', () => {
  // alert('WORKING')
  addNewTaskPopup()
})

//let newTaskPopu = `<p>SUPP</p>`

function addNewTaskPopup() {
  // alert('hello')
  // console.log(newTaskPopup)
  let body = document.querySelector('body');
  let popUp = document.createElement('div');
  popUp.id = 'addTaskPopup';
  popUp.innerHTML = newTaskPopup
  body.appendChild(popUp)
}
