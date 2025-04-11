const vibes = [
    "...and you are DA BOMB!",
    "...have a wonderful day!",
    "...and you've got this!",
    "...and so is this puppy! 🐶"
]
//choose a vibe
var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

//add vibe to page
document.querySelector(".vibe").append(vibe);


//JS Function Practice

function add(a,b){
    return a + b;
}

console.log(add(2,3));

const add2 = function(a, b){
    return a+b
}

console.log (add(5,6));