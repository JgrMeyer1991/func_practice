function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!

    if (num <= 0) return;

    var recur = function(){
        operation()
        return repeat.bind(null,(operation, --num))
    }
    return recur
}

function trampoline(fn) {
    while(fn && fn instanceof Function) {
        fn = fn()
    }
    return fn;
}

module.exports = function(operation, num) {
    // You probably want to call your trampoline here!
    trampoline(function() {
        return repeat(operation, num)
    })
}


function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    if (num <= 0) return

    return function() {
        operation()
        return repeat(operation, --num)
    }
}

function trampoline(fn) {
    while (fn && fn instanceof Function) {
        fn = fn();
    }

    return fn;
}

module.exports = function(operation, num) {
    // You probably want to call your trampoline here!
    return trampoline(function() {
        return repeat(operation, num)
    })
}