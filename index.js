let addTodoButton = document.getElementById("addTodoButton")

let todoList=[
    {
        text:"Learn HTML",
        uniqueNo:1
    },
    {
        text:"Learn CSS",
        uniqueNo:2
    },
    {
        text:"Learn Bootstrap",
        uniqueNo:3
    },
    {
        text:"Learn JavaScript",
        uniqueNo:4
    },
]


addTodoButton.onclick= function(){
    onTodoAdd()
 }
 

function onlabelStatus(checkboxId , labelId){
    let checkboxElement = document.getElementById(checkboxId)
    console.log(checkboxElement.checked)
    let labelElement = document.getElementById(labelId)
    labelElement.classList.toggle("checked")
  
}

function onDeletedTodoItem(todoId){
    let todoElement = document.getElementById(todoId)
    todoItemsContainer.removeChild(todoElement)
}


function createAppendTodo(todo){
let checkboxId = "checkbox" + todo.uniqueNo
let labelId = "label" + todo.uniqueNo
let todoId = "todo" + todo.uniqueNo

    let todoItemsContainer = document.getElementById("todoItemsContainer")
let todoElement = document.createElement("li")
todoElement.id = todoId
todoElement.classList.add('todo-item-container', 'd-flex' ,'flex-row')
todoItemsContainer.appendChild(todoElement)

let inputElement = document.createElement("input")
inputElement.type ="checkbox"
inputElement.id = checkboxId
inputElement.classList.add("checkbox-input")
inputElement.onclick= function(){
    onlabelStatus(checkboxId , labelId)
}
todoElement.appendChild(inputElement)

let labelContainer = document.createElement("div")
labelContainer.classList.add("label-container", 'd-flex' ,'flex-row')
todoElement.appendChild(labelContainer)

let labelElement = document.createElement("label")
labelElement.textContent = todo.text
labelElement.id = labelId
labelElement.classList.add("checkbox-label")
labelElement.setAttribute("for" , checkboxId)
labelContainer.appendChild(labelElement)

let deleteIconContainer = document.createElement("div")
deleteIconContainer.classList.add("delete-icon-container")
labelContainer.appendChild(deleteIconContainer)

let deleteIcon = document.createElement("li")
deleteIcon.classList.add("far" ,"fa-trash-alt",'delete-icon')
deleteIcon.onclick = function(){
    onDeletedTodoItem(todoId)
}
deleteIconContainer.appendChild(deleteIcon)
}


function onTodoAdd(){
    let todosCount = todoList.length 
    todosCount = todosCount +1 

    let userInputElement = document.getElementById("todoUserInput")
    let userInputValue = userInputElement.value
    if(userInputValue===""){
        alert("Please Enter the Task");
        return;
    }

    let newTodo ={
        text:userInputValue,
        uniqueNo:todosCount
    }
    createAppendTodo(newTodo)
    userInputElement.value="";
}




for(let eachTodo of todoList){
    createAppendTodo(eachTodo)
}