let toDoTextBox = document.getElementById("toDoTextBox")
let btnSubmit = document.getElementById("btnSubmit")

btnSubmit.addEventListener("click",function() {
    let taskName = toDoTextBox.value 
    let liItem = document.createElement("li")
    liItem.innerHTML = taskName 
    let taskCheckBox = document.createElement("input")
    taskCheckBox.setAttribute("type", "checkbox")
    taskCheckBox.addEventListener("change", function(){
        if (this.checked) {
        console.log(this.parentElement) 
        completedTasksUL.appendChild(this.parentElement)}
        else {
            taskEntryUL.appendChild(liItem)
        }
    }) 
    let removeButton = document.createElement("button")
    removeButton.innerHTML = "Remove"
    
    removeButton.addEventListener("click", function() { 
        this.parentElement.remove()
       


        })
        
    liItem.appendChild(taskCheckBox)
    taskEntryUL.appendChild(liItem)
    liItem.appendChild(removeButton)
   
    })
