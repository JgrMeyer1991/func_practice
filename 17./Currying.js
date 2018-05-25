function curryN(fn, n) {
    n = n || fn.length;
    if (n > 1) {
        return function (argument) {
            return curryN(fn.bind(null, argument), n - 1)
        }
    }
    return fn
}

/*
*
* */

module.exports = curryN
