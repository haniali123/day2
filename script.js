 var input1 = prompt("Enter a starting number");
 var input2 = prompt("Enter an ending number");

if( input1 || input2 !== isNaN){
     result1 = parseInt(input1);
     result2 = parseInt(input2);
      console.log(result1);
      console.log(result2);
 }else{
   alert("404: Not Found");
}
if (input1 > input2){
  alert("The start must be smaller than the end");
}else{
  
  if(input1 && input2 % 2 === 0)
{
    alert ('is even');
  }else{
    alert('is odd');
  }
 
}
