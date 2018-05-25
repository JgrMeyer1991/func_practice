function doubleAll(numbers) {
    function doubler(number){
        return number * 2;
    }
    return numbers.map(doubler)
}


module.exports = doubleAll;
