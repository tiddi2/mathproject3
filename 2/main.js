
document.getElementById("btn").onclick = generate;

generate();

function generate(){
    document.getElementById("output").innerHTML = "";
    let inputString  = document.getElementById("input").value;
    document.getElementById("output").appendChild(generateTable(inputString));
}

function generateTable(inputString){
    let results = inputString.match(/\w+/g);
    results = Array.from(new Set(results));
    
    let outputTable = document.createElement("TABLE");
    let headerRow = document.createElement("THEAD");
    outputTable.className = "table table-striped table-bordered";
    let outputRow = document.createElement("tr");
    for(let varName of results){
    	let outputCell = document.createElement("th");
      outputCell.innerHTML = varName;
      outputRow.appendChild(outputCell);
    }
    let outputCell = document.createElement("th");
    outputCell.innerHTML = inputString;
    outputRow.appendChild(outputCell);
    headerRow.appendChild(outputRow),
    outputTable.appendChild(headerRow);
    
    
    let tableBody = document.createElement("TBODY");
    for(let iterator = 0; iterator < 1<<results.length;iterator++){
    	outputRow = document.createElement("tr");
    	for(let varName in results){
      	let variableValue = ((iterator&(1<<varName))!=0?1:0);
      	let outputCell = document.createElement("td");
    		outputCell.innerHTML = variableValue;
    		outputRow.appendChild(outputCell);
    		outputTable.appendChild(outputRow);
    		eval("var " + results[varName] + " = " + variableValue);
    	}
      let outputCell = document.createElement("td");
    	outputCell.innerHTML = (eval(inputString)==0?0:1);
    	outputRow.appendChild(outputCell);
    	tableBody.appendChild(outputRow);
    }
    	outputTable.appendChild(tableBody);
    
    return outputTable;
}