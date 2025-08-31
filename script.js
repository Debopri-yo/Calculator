let a=0,b=0,x=0,operator,ans=0,justCalculated=false;
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
    return subtract(a,b);
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
    if(justCalculated) {
      screen.textContent = "";
      justCalculated = false;  
    }
    screen.textContent += digit.textContent;
    x=screen.textContent;
  })                                                  
}                                                  
const symbols= document.querySelectorAll('.symbol');
for (const symbol of symbols){
  symbol.addEventListener("click",()=>{
    operator=symbol.textContent;
    if(justCalculated==false){
      a=Number(x);
    }else {
      a=ans;justCalculated=false;
    }
    x=0;
    const screen = document.querySelector('#screen');
    screen.textContent = "";
  });
}
const clr=document.getElementById("clr");
clr.addEventListener('click',function(){
  const screen = document.querySelector('#screen');
  screen.textContent = "";
  a=0;x=0;b=0;operator=0;
  justCalculated=false;
});
const eql=document.getElementById("eql");
eql.addEventListener('click',function(){
  b=Number(x);
  if(b === 0 && operator === '/') {
    const screen = document.querySelector('#screen');
    screen.textContent = "Error";
    return;screen.textContent = "";
  a=0;x=0;b=0;operator=0;
  justCalculated=false;
  }else{
  ans=operate(a,b,operator);
  const screen = document.querySelector('#screen');
  screen.textContent = ans;justCalculated=true;
  }
});