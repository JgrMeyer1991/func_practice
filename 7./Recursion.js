function reduce(arr, fn, initial) {
    if(arr.length > 0){
        fn(initial, arr[0]);
       const newArr=  arr.slice(1,arr.length);
        return reduce(newArr,fn,initial);
    }
    else{
        console.log(initial);
        return initial
    }
}

module.exports = reduce;



// reduce nabouwen pseudocode
// gebruik functie op elk element van het array
//geef accumulator terug met de waarde in het array bovenop wat hij al is
