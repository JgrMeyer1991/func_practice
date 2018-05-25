module.exports = function arrayMap(arr, fn) {
   return arr.reduce(function(arrayOfJustice,current){
        arrayOfJustice.push(fn(current));
        return arrayOfJustice;
    }, [])
}


