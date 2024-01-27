const inputAdd = document.getElementById("inputEnter")
const enterButton = document.getElementById("addButton")
let list = document.getElementById("list")

enterButton.addEventListener("click", () => {
    if(inputAdd.value === ""){
        alert("U obavezi ste da popunite prazno polje!")
        listLi.style.display = "none"
    }

    let listLi = document.createElement("li")
    listLi.className = "listLi"
    list.appendChild(listLi)
    listLi.innerHTML = inputAdd.value
    inputAdd.value = ""

    let editButton = document.createElement("button")
    editButton.innerText = "Edit"
    let deleteButton = document.createElement("button") 
    listLi.appendChild(deleteButton)
    deleteButton.innerText = "Delete"
    deleteButton.addEventListener("click", () => {
        listLi.style.display = "none"
    })
    const buttonDiv = document.createElement("div")
    buttonDiv.appendChild(deleteButton)
    buttonDiv.appendChild(editButton)
    listLi.appendChild(buttonDiv)
    buttonDiv.className = "buttonDiv"
    
    editButton.addEventListener("click", () => {
        const inputEdit = document.createElement("input")
        listLi.appendChild(inputEdit)
        inputEdit.className = "inputEdit"
        buttonDiv.style.display = "none"
        const confirmButton = document.createElement("button")
        confirmButton.innerText = "Confirm"
        confirmButton.className = "confirmButton"
        listLi.appendChild(confirmButton)
        confirmButton.addEventListener("click", () => {
            listLi.innerHTML = inputEdit.value
            buttonDiv.style.display = "flex"
            listLi.appendChild(buttonDiv)
        })
    })
});