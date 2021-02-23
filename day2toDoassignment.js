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
        if (this.parentElement == taskEntryUL){
            console.log(this.parentElement)
            taskEntryUL.removeChild(this.parentElement)}
        else {
            completedTasksUL.removeChild(this.parentElement)
        }
       


        })
        
    liItem.appendChild(taskCheckBox)
    taskEntryUL.appendChild(liItem)
    liItem.appendChild(removeButton)
   
    })
