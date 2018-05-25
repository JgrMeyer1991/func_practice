// gebruik hasOwnProperty('quack') om te voldoen aan het eigen property enforceren
//call lijkt op inheritance, bit weird for functional
//in doet zoals het klinkt. Kijkt of de gegeven property bestaat in dat object.
//You will be passed 0-20 arguments. Each argument could be of any type with any properties.
// Some of these items will have a 'quack' property.

function hasOwnProperty(obj,x) {
    console.log('hallo');
    return Object.prototype.hasOwnProperty.call(obj, x)
}




function duckCount() {
    var keys = Object.keys(arguments);
    var args = arguments;
    var filterOutNotDucks = function (bird){
       if('quack' in bird){
           return hasOwnProperty(bird, 'quack')
       }
    };
    return keys.map(function(key, index, arr){
        return args[key];
    }).filter(filterOutNotDucks).length

}

module.exports = duckCount;
