/*global $*/

Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
};

$("#input").change(generate);
$("#input").keyup(generate);
$("#number").change(generate);
$("#btn").click(findCipherNum);

$("#input").scroll(updateScrollIn);
$("#output").scroll(updateScrollOut);

generate();


function updateScrollIn(){
    $("#output").prop('scrollTop',$("#input").prop('scrollTop'));
}
function updateScrollOut(){
    $("#input").prop('scrollTop',$("#output").prop('scrollTop'));
}

function findCipherNum(){
    let s = document.getElementById("input").value;
    s = s.toLowerCase();
    let results = [];
    for(let i = 0; i <= 25; i++){
        results[i] = stringValue(cipher(s,i));
    }
    let minindex = 0;
    for(let i = 0; i <= 25; i++){
        if(results[i] < results[minindex]){
            minindex = i;
        }
    }
    document.getElementById("number").value = minindex;
    generate();
}

function stringValue(s){
let letterGrade = {
      "E": {
        "Prob": 11.1607
      },
      "A": {
        "Prob": 8.4966
      },
      "R": {
        "Prob": 7.5809
      },
      "I": {
        "Prob": 7.5448
      },
      "O": {
        "Prob": 7.1635
      },
      "T": {
        "Prob": 6.9509
      },
      "N": {
        "Prob": 6.6544
      },
      "S": {
        "Prob": 5.7351
      },
      "L": {
        "Prob": 5.4893
      },
      "C": {
        "Prob": 4.5388
      },
      "U": {
        "Prob": 3.6308
      },
      "D": {
        "Prob": 3.3844
      },
      "P": {
        "Prob": 3.1671
      },
      "M": {
        "Prob": 3.0129
      },
      "H": {
        "Prob": 3.1934
      },
      "G": {
        "Prob": 2.4705
      },
      "B": {
        "Prob": 2.072
      },
      "F": {
        "Prob": 1.8121
      },
      "Y": {
        "Prob": 1.7779
      },
      "W": {
        "Prob": 1.2899
      },
      "K": {
        "Prob": 1.1016
      },
      "V": {
        "Prob": 1.1974
      },
      "X": {
        "Prob": 0.2902
      },
      "Z": {
        "Prob": 0.2722
      },
      "J": {
        "Prob": 0.1965
      },
      "Q": {
        "Prob": 0.1962
      }
};
    s = s.toUpperCase();
    s = s.replace(/[^A-Z]/g,'');
    let freq = frequenzy(s);
    let numLetters = s.length;
    let score = 0;
    for(let i in freq){
        score += (((freq[i][1]/numLetters)*100) - letterGrade[freq[i][0]].Prob)**2;
    }
    return Math.sqrt(score);
    /*const common = [" the "," of "," and "," a "," to "," in "," is "," you "," that "," it "," he "," was "," for "," on "," are "," as "," with "," his "," they "," i "," at "," be "," this "," have "," from "," or "," one "," had "," by "," word "," but "," not "," what "," all "," were "," we "," when "," your "," can "," said "," there "," use "," an "," each "," which "," she "," do "," how "," their "," if "," will "," up "," other "," about "," out "," many "," then "," them "," these "," so ", "some "," her "," would "," make "," like "," him "," into "," time "," has "," look "," two "," more "," write "," go "," see "," number "," no "," way "," could "," people "," my "," than "," first "," water "," been "," call "," who "," oil "," its "," now "," find "," long "," down "," day "," did "," get "," come "," mad e", "may "," part "];
    let value = 0;
    for(let sub of common){
        while(s.indexOf(sub) !== -1){
            value++;
            s = s.replace(sub, "");
        }
    }
    return value;*/
}

function frequenzy(txt) {
    var cs = txt.split(''),
        i = cs.length,
        dct =  {},
        c = '',
        keys;
 
    while (i--) {
        c = cs[i];
        dct[c] = (dct[c] || 0) + 1;
    }
 
    keys = Object.keys(dct);
    keys.sort();
    return keys.map(function (c) { return [c, dct[c]]; });
}

function generate(){
    let s = document.getElementById("input").value;
    let num = parseInt(document.getElementById("number").value);
    if(num >= 26){
        document.getElementById("number").value = num.mod(26);
    }else if(num <= -1){
        document.getElementById("number").value = num.mod(26);
    }
    num = document.getElementById("number").value;
    document.getElementById("output").innerHTML = cipher(s,num);
}


function cipher(s,num){
		let out = ""; 
        for(let c in s){
    		if(isLetter(s[c])){
        	out += rotate(s[c],parseInt(num));
        }else{
        	out += s[c];	
        }
    }
    return out;
}

function isLetter(char){
    if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')){
        return true;
    }
    return false;
}

function rotate(char,num){
	if(char >= 'a' && char <= 'z'){
	    return String.fromCharCode((((char.charCodeAt() - 'a'.charCodeAt()) + num) % 26) + 'a'.charCodeAt());
    }
    return String.fromCharCode((((char.charCodeAt() - 'A'.charCodeAt()) + num) % 26) + 'A'.charCodeAt());
}