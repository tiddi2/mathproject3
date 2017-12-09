/*global c3*/
/*global $*/
$("#input").change(calculate);
//document.getElementById("input").onclick = calculate;


var chart = c3.generate({
    bindto: '#chart',
    data: {
        x: 'x', 
      columns: [
        ['x'],
        ['Probability']
      ]
    }
});


calculate();

function calculate(){

    //creating the static results array if it has not aready been made
    if ( typeof calculate.results == 'undefined' ) {
        calculate.x = [];
        calculate.x[0] = 'x';
        calculate.results = [];
        calculate.data = []
        calculate.data[0] = "Probability";
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
        calculate.x.push(parseInt(num));
        calculate.data.push(calculate.results[num]);
    }
    
    //display result
    document.getElementById("output").value = calculate.results[num];
    updateGraph(calculate.data,calculate.x);
}

function updateGraph(data,x){
    chart.load({
        columns: [x,data]
    });
}