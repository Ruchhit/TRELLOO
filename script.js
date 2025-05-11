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
  return newDiv
}