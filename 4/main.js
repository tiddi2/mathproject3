var start = parseInt(document.getElementById("start").value);
var stop = parseInt(document.getElementById("stop").value);
var product = parseInt(document.getElementById("product").value);
document.getElementById("submit").onclick = calculateWithInput;
console.log()
function calculateWithInput(argument) {
    console.log(calculateP(start,stop,product));
}
function calculateP(start, stop, p) {
    console.log(product);
    for(var x = 1; x < product; x++) {
        var product = 1;
        for(var i = start; i <= stop; i+= x) {
              product *= i; 
        }
        console.log("sum: " + p)
        if(product == p) {
            return i;
        }
    }
    return -1;
}

function calculateS(start, stop, s) {
    console.log(product);
    for(var x = 1; x < product; x++) {
        var s = 0;
        for(var i = start; i <= stop; i+= x) {
              s += i; 
        }
        console.log("sum: " + s)
        if(s == product) {
            return i;
        }
    }
    return -1;
}