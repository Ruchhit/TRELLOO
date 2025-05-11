let draggedElement = null;

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
