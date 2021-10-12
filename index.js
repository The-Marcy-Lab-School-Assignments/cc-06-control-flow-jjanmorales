//1
function sumOfThreeAndFive(){
    let sum = 0;
  for(let i = 1; i < 1001; i++){
      if(i % 3 === 0 && i % 5 === 0){
        sum += i;
      }
  }
      return sum
}
console.log(sumOfThreeAndFive());

function greaterNum(num1, num2){
  if(num1 > num2){
      return num1
  }else if(num1 === num2){
      return "Both integers are equal"
  }else if(!Number.isInteger(num1,num2)){
      return null
  }else{
      return num2
  }
}

console.log(greaterNum("4", "5"));

function oddAndEvenInFifteen(){
  for(let i = 0; i <= 15; i++){
      if(i % 2 === 0){
          console.log(`${i} is even`)
      }else{
          console.log(`${i} is odd`)
      }
  }
}

oddAndEvenInFifteen();

function sortThreeNums(){
  
}






