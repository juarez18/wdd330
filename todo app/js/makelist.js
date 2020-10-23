//these constants grab references to the html document and set index for sections

const form = document.querySelector('form');
const div = document.querySelector('#actualList');
const btnInsert = document.getElementById('btnInsert');
const input = document.getElementById('item');
const checkInput = input.value;
let a = 0;

//creates where the to do items will be stored
let itemsArray = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

//function to create section each time an item is added
const sectionMaker = (text) => {
    a++;
    const section = document.createElement('section');
    const check = document.createElement('input');
    const p = document.createElement("p");

    check.setAttribute("type" , "checkbox");
    check.setAttribute("class", "checkComplete");
    check.setAttribute("name", "checkbox");
    p.textContent = text;
    section.setAttribute('class', 'inc');
    
    section.appendChild(check);
    section.appendChild(p);
    div.appendChild(section);
    
  }

//adds item to list when button is clicked and verifies content
btnInsert.onclick = function addItem() {
    if(input.value){
    itemsArray.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))

    sectionMaker(input.value);
    input.value = '';
    showCounter();
    location.reload();
    }

};

data.forEach((item) => {
    sectionMaker(item)
  })

//selects all checkboxs elements in the to do list
document.querySelectorAll("input[name=checkbox]").forEach(checkbox => {

//checks for when the checkboxes change status and updates class accordingly
checkbox.addEventListener( 'change', function updateStatus() {
    const checkboxes = document.querySelectorAll("input[name=checkbox]");
    const completeSection = document.querySelectorAll("section");

   for (let y = 0; y < completeSection.length; y++){
    if(checkboxes[y].checked) {
        completeSection[y].className = "complete"
    } 
    
    else {
       completeSection[y].className = "inc"
    }
}
}
)
})

//shows how many tasks are currently on the list
function showCounter(){
    const completeSection = document.querySelectorAll("section");
    var q = completeSection.length
    document.getElementById("toDoListCounter").textContent = "Total Tasks: " + q;
}

showCounter();

//shows only incompleted tasks
incBtn.onclick = function showinc(){
    const Tasks = document.querySelectorAll("section");
    for(let y = 0; y < Tasks.length; y++){
        if(Tasks[y].className == "inc"){
            Tasks[y].style.display = ""
        }
        else{
            Tasks[y].style.display = "none"
        }
    }
} 

//shows only completed tasks
comBtn.onclick = function showCom(){
    const Tasks = document.querySelectorAll("section");

    for(let y = 0; y < Tasks.length; y++){
        if(Tasks[y].className == "complete"){
            Tasks[y].style.display = ""
        }
        else{
            Tasks[y].style.display = "none"
        }
    }
} 

//shows all tasks
allBtn.onclick = function showAll(){
    const Tasks = document.querySelectorAll("section");

    for(let y = 0; y < Tasks.length; y++){
        Tasks[y].style.display = ""
    }
}

//clears all tasks from list
resetBtn.addEventListener('click', function removeList(){
    localStorage.clear();
    while (div.firstChild) {
      div.removeChild(div.firstChild)
    }
    itemsArray.length = 0;
    showCounter()
    
  })