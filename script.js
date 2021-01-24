// Create common arr
let TODOARR = [];
//to create an todo item
const inputval= document.getElementById("myInput");
inputval.addEventListener("keyup",function(event){
  
  if(event.key==="Enter"){
    document.getElementById("activate").click();
  }
})
//retrive from the local storage
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
//to remove an element
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
    //delete the list
    const deleteicon= document.createElement("img");
    deleteicon.setAttribute("src","trash.svg");
    deleteicon.className="deleteicon";
    deleteicon.id = i;
    deleteicon.addEventListener("click", function () {
      removeElement(this.id)
    });
    
    LI.appendChild(deleteicon);
    //to check whether the list is completed
    const checkbox = document.createElement("input");
    checkbox.type = "radio";
    
    checkbox.addEventListener("change",function(){
      checkbox.classList.toggle("checked");
    })
    //to eidt the todo item
    const editicon= document.createElement("img");
    
    editicon.setAttribute("src","edit.svg");
    

    editicon.className="icon";
  
    editicon.setAttribute('data-id', TODOARR[i].id);
  
    editicon.addEventListener("click",function(){
      const id= Number(this.getAttribute('data-id'));
      const obj = TODOARR.find(function(element){
        return element.id === id
      }) || null;
      const changeText= document.createElement("input");
      
      changeText.type="text";
      changeText.value = obj ? obj.text : ''
      console.log(obj)
      
      
      LI.innerHTML="";
     })
     LI.appendChild(editicon);
    
     LI.append(checkbox);
    
    const todoItem = document.createTextNode(Text);
    LI.append(todoItem);
    document.getElementById("myUL").append(LI);
  }
}

