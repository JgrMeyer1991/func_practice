function fruitBasket(fruit1,fruit2,fruit3,fruit4){
    return "this fruitbasket contains " + arguments.length +  " pieces of fruit. They are :" + fruit1+ " "+ fruit2 + " " + fruit3 + " " + fruit4
}


var standardBasket = function(fruit1){
    return function(fruit2){
        return "this fruitbasket contains 2 pieces of fruit. They are :" + fruit1+ " "+ fruit2
    }
}

var bananaBasket = standardBasket("banana");

var curry4 = function(fruit1){
    return function(fruit4){
        return function(fruit3){
            return function(fruit2){
                return function(){
                    return"this fruitbasket contains " + arguments.length +  " pieces of fruit. They are :" + fruit1 + " "+ fruit2 + " " + fruit3 + " " + fruit4

                }
            }
        }
    }
}

var allCurriedOut = curry4("banana")("melon")("mango")('starfruit');


function curryFunctionWith1Arg(fn){
    return function(argument){
        fn(argument)
    }
}

function curryFunctionWith2Arg(fn){
    return function(argument1){
        return function(argument2){
            fn(argument1,argument2)
        }
    }
}

function curryFunctionWith2ArgKai(fn){
    return function(argument1){
        curryFunctionWith1Arg(fn.bind(null,argument1))
    }
}

function curryFunctionWith3Arg(fn){
    return function(argument){
        curryFunctionWith2Arg(fn.bind(null,argument))
    }
}

// console.log(allCurriedOut())
// var curriedBasket = currying(fruitBasket)

function curryFunctionWithNArg(fn,n){
    if(n > 1) {
        return function (argument) {
            console.log('basket check')
            return curryFunctionWithNArg(fn.bind(null, argument), n - 1)
        }
    }
    else {
        console.log('final check');
        return fn
    }
}

var testbasket = curryFunctionWithNArg(fruitBasket,4);
console.log("here is your testbasket sir: " + testbasket("banana")("melon")("mango")('starfruit'));
