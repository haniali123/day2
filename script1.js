var numbers = [];

for(var i=1; i <=500; i++){
  numbers.push(i);
}
for(var j=0, len = numbers.length; j<len; j++){
  numbers.pop();

}
console.log(numbers);