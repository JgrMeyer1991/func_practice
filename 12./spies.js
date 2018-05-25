//wrap de target.method in de spy om de functionaliteit te kunnen afvangen.
//hou een counter bij die elke keer dat target.method aangeroepen wordt ++ doet
//spy moet ervoor zorgen dat eerst de counter ++ gaat,
// en vervolgens call wordt uitgevoerd op method om hem nog gewoon af te laten gaan.
// apply gebruiken
//target.method moet vervangen worden door Spy(target,method) en Spy(target, method) moet target.method wel uitvoeren
const util = require('util')

function Spy(target, method) {
    var counter = {count: 0};
    var originalFunction = target[method];
    target[method] = function(){
        counter.count++;
        originalFunction.apply(target,arguments);
    }
    return counter
}

module.exports = Spy;
