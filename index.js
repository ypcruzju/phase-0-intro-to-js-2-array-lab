
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat (){
    cats.push("Ralph")
};

function destructivelyPrependCat(){
    cats.unshift( "Bob")
};
function destructivelyRemoveLastCat(){
    cats.pop()
    
};
function destructivelyRemoveFirstCat(){
    cats.shift()
};