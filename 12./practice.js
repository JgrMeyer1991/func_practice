var object1 = {
    addition:function(){
        return this.number1 + this.number2;
    },
    number1: 10,
    number2: 20
}

console.log(object1.addition());

var object2 =
{
    number1: 90,
    number2: 931231
};

var object3 = {
    subtraction: function(){
        return object2.number1 - object2.number2;
    }
}
console.log(object1.addition.apply(object2,[]));

object1.addition = object3.subtraction;

console.log(object1.addition());