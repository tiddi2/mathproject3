/*global $*/

addElement(25);
addElement(55);

$("#btnAdd").click(()=>{addElement(document.getElementById("inputAdd").value)});
$("#btnCheck").click(checkStatement);
$(".radio").click(checkStatement);

checkStatement();

function updateColor(){
    let evt = document.getElementById("result");
    evt.className = evt.innerHTML;
}

function addElement(element){
    let table = document.getElementById("elements");
    let row = document.createElement("TR");
    let td = document.createElement("TD");
    let glyph = document.createElement("SPAN");
    glyph.className = "glyphicon glyphicon-remove-sign";
    td.className = "Cell";
    td.dataset.value = element;
    glyph.style.float = "right";
    glyph.onclick = removeParent;
    td.innerHTML = element;
    td.appendChild(glyph);
    row.appendChild(td);
    table.appendChild(row);
    checkStatement();
}

function removeParent(evt){
    let parent = evt.target.parentNode;
    let grandparent = parent.parentNode;
    grandparent.removeChild(parent);
    checkStatement();
}
function checkStatement(){
    let elements = document.getElementsByClassName("Cell");
    var s = document.getElementById("predicateValue").value;
    var bool = 0;
  for(var i=0;i<elements.length;i++){
      let x = elements[i].dataset.value;
      if(eval(s)){
          elements[i].style.backgroundColor="#00C851";
          if(document.getElementById("forSOME").checked){
              document.getElementById("result").innerHTML = "True";
            
              
          }
       bool = 1;
      }else{
          elements[i].style.backgroundColor="#ff4444";
          if(document.getElementById("forALL").checked){
              document.getElementById("result").innerHTML = "False"
              bool = 0;
          }
      }
  }
  
        if(bool == 0){
            document.getElementById("result").innerHTML = "False"
        }else{
            document.getElementById("result").innerHTML = "True";
        }
        updateColor();      
          
  
  
}