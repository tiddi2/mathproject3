$(".form-control").keyup(calculateWithInput);
var p = document.getElementById("result")
function calculateWithInput(argument) {
    var start = parseInt(document.getElementById("start").value);
    var stop = parseInt(document.getElementById("stop").value);
    var sum = parseInt(document.getElementById("sum").value);
    var diff = calculateS(start,stop,sum);
    if(!isNaN(diff) && diff > 0) {
        p.innerHTML = "Sequence: "
        for(var i = start; i <= stop; i+= diff) {
            p.innerHTML += i;
            if(i != stop) {
                p.innerHTML += ", ";
            }
        }
        p.innerHTML += "<br/> Difference: " + diff;
    }
}
function calculateS(start, stop, s) {
    var steps = s*2/ (start+stop);
    var diff = (stop-start)/(steps-1)
    return diff;
}