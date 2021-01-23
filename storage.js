// Create common arr
let TODOARR = [];
const inputval= document.getElementById("myInput");
inputval.addEventListener("keyup",function(event){
  
  if(event.key==="Enter"){
    document.getElementById("activate").click();
  }
})

function init() {
  const todos = localStorage.getItem('todo');
  
  if (JSON.parse(todos).length) {
    TODOARR.concat(JSON.parse(todos));
    ListElement()
  }
}

init();

// common function to add Element
function addNewElement() {
  const inputval = document.getElementById("myInput").value;
  if (inputval.length) {
    var time=Date.now();
    TODOARR.push({text:inputval,id:time});
    console.log(TODOARR);
    document.getElementById("myInput").value = '';
    localStorage.setItem("todo", JSON.stringify(TODOARR));
    ListElement();
  }
}

function removeElement(position) {
  const removed = TODOARR.splice(position, 1)
  localStorage.setItem("todo", JSON.stringify(TODOARR));
  localStorage.setItem("removedtodo", JSON.stringify(removed));
  ListElement();
}

// on submit button clicked 
function ListElement() {
  
  document.getElementById("myUL").innerHTML = '';
  for (var i = 0; i < TODOARR.length; i++) {
    const Text = TODOARR[i].text;
    const LI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = i;
    checkbox.addEventListener("change", function () {
      
     
      removeElement(this.id)
    });
    LI.addEventListener("dblclick",function(){
      const changeText= document.createElement("input");
      changeText.type="text";
      
    })
    LI.append(checkbox);
    const todoItem = document.createTextNode(Text);
    LI.append(todoItem);
    document.getElementById("myUL").append(LI);
  }
}
function changeText(){
  const li= document.getElementsByTagName("LI");
  
  changeText.className='save';
  LI.appendChild(changeText);
  ListElement();
}
changeText();
