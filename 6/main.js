/*global $*/
$(".input").change(calculate);


const num = 12;
let pascal = generatePascal(num);

calculate();

function calculate(){
    let a = document.getElementById("numberA").value;
    let b = document.getElementById("numberB").value;
    let n = document.getElementById("numberN").value;
    markPascalRow(n);
    document.getElementById("output").innerHTML = a + b + n;
}

function markPascalRow(row){
    for(let r in pascal){
        resetRow(r);
    }
    for(let c of pascal[row]){
        c.id = "current";
    }
}

function resetRow(row){
    for(let c of pascal[row]){
        c.id = "";
    }
}

function generatePascal(rows){
    let elements = [];
    let pascal = document.getElementById("pascal");
    pascal.innerHTML = "";
    for(let i = 0; i < rows; i++){
        let line = document.createElement("DIV");
        line.className = "pascalLine";
        
        let row = [];
        
        for(let j = 0; j <= i; j++){
            let pas = document.createElement("DIV");
            pas.className = "pascal";
            
            if (i == j || j == 0){
                pas.innerHTML = 1;
            }else{
                pas.innerHTML = parseInt(elements[i-1][j-1].innerHTML) + parseInt(elements[i-1][j].innerHTML);
            }
            row.push(pas);
            line.appendChild(pas);
        }
        elements.push(row);
        pascal.appendChild(line);
    }
    return elements;
}