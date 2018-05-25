function repeat(operation, num) {
    function repeater() {
        for (var i = 0; i > num; i--) {
            operation();
        }
    }
    return repeater
}

// Do not remove the line below
module.exports = repeat
