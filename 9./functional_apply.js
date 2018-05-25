//  * Do not use Function#bind
// * Use Function#apply

var slice = Array.prototype.slice;


function logger(namespace) {
    return function(){
        var jarg = slice.apply(arguments)
        jarg.unshift(namespace);
        console.log.apply(console, jarg)
    };
}



/*
official solution
var slice = Array.prototype.slice
    function logger(namespace) {
      return function() {
        console.log.apply(console, [namespace].concat(slice.call(arguments)))
 */

module.exports = logger;

