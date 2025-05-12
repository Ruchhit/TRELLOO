let draggedElement = null;
let rightClickedCard = null;

function addTask(coloumnID){
    const input = document.getElementById(`${coloumnID}-input`)
    console.log(input);
    const inputValue = input.value;
    console.log(inputValue);

    const taskToBeAdded = createElement(inputValue)
    console.log(taskToBeAdded);

    document.getElementById(`${coloumnID}-task`).appendChild(taskToBeAdded)
    input.value = ''
}

function createElement(text){
  const newDiv = document.createElement('div')
  newDiv.classList.add('card')
  newDiv.textContent=text;
  newDiv.draggable = true;
  newDiv.addEventListener('dragstart',dragStart)
  newDiv.addEventListener('dragend',dragEnd)
  newDiv.addEventListener('contextmenu',showContextMenu)
  return newDiv;
}

function dragStart(){
  setTimeout(()=>{
    this.classList.add('draggable');
  },200)
  draggedElement = this;
}

function dragEnd(){
  this.classList.remove('draggable')
  draggedElement = null
}

const taskColoumns = document.querySelectorAll(".tasks") 
console.log('task coloumns',taskColoumns);
taskColoumns.forEach((coloumn)=>{
  coloumn.addEventListener('dragover',dragOver)
})

function dragOver(event){
event.preventDefault();
this.appendChild(draggedElement) // selected task coloumn p wo div append kr rhe
}


function showContextMenu(event){
 event.preventDefault();
 const contextMenu = document.querySelector('.contextMenu')
 rightClickedCard = this; // will use in edit and delete functionality
 console.log(event.pageX,event.pageY);
 contextMenu.style.left = `${event.pageX}px`
 contextMenu.style.top = `${event.pageY}px`
 contextMenu.style.display = 'block'
 document.addEventListener('click',()=>{
  contextMenu.style.display = 'none'
 })
}

function editTask(){
  console.log(rightClickedCard);
  if(rightClickedCard !== null){
    const oldText = rightClickedCard.innerText;
    const newText = prompt("Edit Task = ",oldText);
    if(newText !== ''){
      rightClickedCard.textContent = newText
    }
  }
}

function deleteTask(){
rightClickedCard.remove()
}