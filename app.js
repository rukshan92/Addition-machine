//ALL HTML ELEMENTS

//THE INPUT AREA FOR THE FRIST NUMBER
const ip1 =document.getElementById('ip1');
//THE INPUT AREA FOR THE SECOND NUMBER
const ip2 =document.getElementById('ip2');
//THE BUTTON THAT WILL CALCULATE THE VALUE OF THE
//TWO INPUTS AND DISPLAY THE RESULT
const calc=document.getElementById('calc');
//THE BUTTON THAT WILL GRNERATE TWO RANDOM NUMBERS
const rand=document.getElementById('rand');
//THE BUTTON THAT WILL CLEAR ALL INPUTS
const clr=document.getElementById('clr');
//THE AREA WHERE THE ANSWER WILL DISPLAY
const result=document.getElementById('result');
//EVENT LISTENER FOR THE CALC BUTTON
calc.addEventListener('click',function(){
// CREATED TWO VARIABLES THAT USE PARSEFLOAT
//  TO CONVERT A STRING TO A NUMBER
    const value1= parseFloat(ip1.value);
    const value2= parseFloat(ip2.value);
    result.innerHTML=value1+value2;
    });
//A FUNCTION THAT A RANDOM NUMBER RETWEEN 0 AND 1000
function random(){
    return Math.floor(Math.random()*1000);
  
}
rand.addEventListener('click',function(){
    ip1.value=random();
    ip2.value=random();
});




//EVENT LISTENER FOR THE CLR BUTTON
clr.addEventListener('click',function(){
ip1.value='';
ip2.value='';
result.innerHTML='';
});