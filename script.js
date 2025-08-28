let a=0,b=0,x=0,operator;
function add(a,b){
  return a+b;
}
function subtract(a,b){
  return a-b;
}
function multiply(a,b){
  return a*b;
}
function divide(a,b){
  return a/b;
}
function operate(a,b,operator){
  if(operator==='+'){
    return add(a,b);
  }
  else if(operator==='-'){
    return substract(a,b);
  }
  else if(operator==='*'){
    return multiply(a,b);
  }
  else if(operator==='/'){
    return divide(a,b);
  }
}
const digits = document.querySelectorAll('.digit');
for(const digit of digits){
  digit.addEventListener("click",()=>{
    const screen = document.querySelector('#screen');
    screen.textContent += digit.textContent;
    x=screen.textContent;
  })
}

const clr=document.getElementById("clr");
clr.addEventListener('click',function(){
  const screen = document.querySelector('#screen');
  screen.textContent = "";
  a=0;x=0;b=0;operator=0;
});