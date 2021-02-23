let toDoTextBox = document.getElementById("toDoTextBox")
let btnSubmit = document.getElementById("btnSubmit")

btnSubmit.addEventListener("click",function() {
    let taskName = toDoTextBox.value 
    let liItem = document.createElement("li")
    liItem.innerHTML = taskName 
    
    let removeButton = document.createElement("button")
    removeButton.innerHTML = "Remove"
    removeButton.addEventListener("click", function() { 
        console.log(this)
        console.log(this.parentElement)
        taskEntryUL.removeChild(this.parentElement)

    })
    liItem.appendChild(removeButton)
    taskEntryUL.appendChild(liItem)
    })


