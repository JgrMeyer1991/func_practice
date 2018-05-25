function repeat (operation, num, callback) {
    if (num <= 0) callback(null, num)

    setTimeout(function () {
        operation()
        repeat(operation, --num, callback)
    }, 0)
}

module.exports = repeat;
