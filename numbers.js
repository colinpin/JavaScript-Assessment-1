//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;

console.log(num10 + parseInt(string8) + one);

//2. write a loop that will log only numbers divisible by 3 between 20 - 100
for (i = 20; i < 100; i++) {
    if (([i] % 3) === 0) {
        console.log(i);
    }
};



//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98]; 
var total = 0;

for (var i = 0; i < scores.length; i++) {
    total += scores[i];
}
console.log(total / scores.length);

//or, google taught me:

var average = scores.reduce(add, 0);
function add(a, b) {
    return a + b;
};

console.log(average / scores.length);