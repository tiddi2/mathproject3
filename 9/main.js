/*global c3*/
/*global $*/


var chart = c3.generate({
    bindto: '#chart',
    data: {
     x: 'x',
      columns: [
        []
      ],
      type: 'bar'
    }
});

$("#numPeople").change(generate);
$("#numIterations").change(generate);

generate();
    
function generate(){
    let numPeople = document.getElementById("numPeople").value;
    let numIterations = document.getElementById("numIterations").value;
    let x = ["x"];
    for(let i = 0; i <= numPeople; i++){
        x.push(i);
    }
    let data = calculate(numPeople,numIterations);
    data.unshift("Got right hat");
    chart.load({
        columns: [x,data]
    });
    
}

function calculate(numPeople, numIterations){
    let hats = [];
    let counts = [];
    for(let i = 0; i < numPeople; i++){
        hats[i] = i;
    }
    
    for(let i = 0; i <= numPeople; i++){
        counts[i] = 0;
    }
    
    for(let i = 0; i < numIterations; i++){
        hats = shuffle(hats);
        let count = 0;
        for(let j = 0; j < numPeople; j++){
            if(hats[j] == j){
                count++;
            }
        }
        counts[count]++;
    }
    for(let i in counts){
        counts[i] /= numIterations;
    }
    return counts;
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}