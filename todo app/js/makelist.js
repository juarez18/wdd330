const form = document.querySelector('form');
const div = document.querySelector('div');
const btnInsert = document.getElementById('btnInsert');
const input = document.getElementById('item');
let a = 0;

let itemsArray = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

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


btnInsert.onclick = function addItem() {

    if(item){
    itemsArray.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))

    sectionMaker(input.value);
    input.value = '';
    }
  
};

data.forEach((item) => {
    sectionMaker(item)
  })

document.querySelectorAll("input[name=checkbox]").forEach(checkbox => {

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


function showCounter(){
    const completeSection = document.querySelectorAll("section");
    var q = completeSection.length
    document.getElementById("toDoListCounter").textContent = "Total Tasks: " + q;
}

showCounter();

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

allBtn.onclick = function showAll(){
    const Tasks = document.querySelectorAll("section");

    for(let y = 0; y < Tasks.length; y++){
        Tasks[y].style.display = ""
    }
}

resetBtn.addEventListener('click', function () {
    localStorage.clear()
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild)
    }

    
    
  })