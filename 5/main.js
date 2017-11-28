calculate();

document.getElementById("input").onchange = calculate;

function calculate(){
    
    //creating the static results array if it has not aready been made
    if ( typeof calculate.results == 'undefined' ) {
        calculate.results = [];
    }
    
    //finding input
    let num = document.getElementById("input").value;
    
    //if not already calculated calculate and save
    if(! calculate.results[num]){
        let result = 1;
        for(let i = 0; i < num; i++){
            result *= ((365-i)/365);
        }
        calculate.results[num] = 1 - result;
    }
    
    //display result
    document.getElementById("output").value = calculate.results[num];
}