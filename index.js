 

let displayscreen=document.getElementById("result");
document.body.addEventListener("keypress",keypress)

function display(num){
  displayscreen.value+=num;
}
function calculate(){
  try{
    displayscreen.value=eval(displayscreen.value);
  }
  catch(err){
  displayscreen.value="Error";
  }
}
function clr(){
  displayscreen.value="";
}
function del(){
  displayscreen.value=displayscreen.value.slice(0,-1);
} 

function keypress(press){
  let a = document.querySelector("#result")
  if((press.key<10 && press.key>=0) || press.key==="*" || press.key==="-" || press.key==="+" || press.key==="/" || press.key==="." || press.key==="%"){
    a.value += press.key;
    a.slice(0,-1);
    
}else if(press.key==="Enter"){
    calculate()
}
}

