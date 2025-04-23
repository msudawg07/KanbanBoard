import {newTaskPopup} from './templates.js';

let addNewTask = document.querySelector("#addNewTaskButton");
addNewTask.addEventListener('click', () => {
  // alert('WORKING')
  addNewTaskPopup()
})

function addNewTaskPopup() {
  // alert('hello')
  // console.log(newTaskPopup)
  let body = document.querySelector('body');
  let popUp = document.createElement('div');
  popUp.id = 'addTaskPopup';
  popUp.innerHTML = newTaskPopup
  body.appendChild(popUp)

  document.addEventListener('click', (event) => {
    console.log(event.target.id)
    if(event.target.id !== 'addTaskPopup') {
      console.log("YOOO")
    }
  })
}
