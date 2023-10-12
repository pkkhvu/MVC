//client page

//selects all of the HTML elements on the page with the class name of ".del" and stores them into deleteBtn
const deleteBtn = document.querySelectorAll('.del')
//selects all of the span elements on the page with the class "not" and stores them into todoNotCompleted
const todoNotCompleted = document.querySelectorAll('span.not')
//selects all of the span elements on the page with the class "cpmpleted" and stores them into todoCompleted
const todoCompleted = document.querySelectorAll('span.completed')

//turns whatever is stored inside deleteBtn into an array, and for each element in the new array; it adds an event listener with the deleteTodo function that gets called when it hears a click
Array.from(deleteBtn).forEach((element) => {
    element.addEventListener('click', deleteTodo)
})

Array.from(todoNotCompleted).forEach((element) => {
    element.addEventListener('click', markIncomplete)
})

Array.from(deleteBtn).forEach((element) => {
    element.addEventListener('click', markComplete)
})

async function deleteTodo(){
    //gets the parent HTML element, and accesses the custom data attribute and it's value
    const todoId = this.parentNode.dataset.id

    //awaits 
    //sent a request to 'todos' to delete an item, specified by todoId
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        //await a response and store it in the data variable
        const data = await response.json()
        console.log(data)
        //reload page
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}