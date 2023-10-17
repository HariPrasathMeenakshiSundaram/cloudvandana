const display=document.querySelector(".display");
const buttons=document.querySelectorAll("button");
const specialCharater=["%","*","/","-","+","="];
let output="";
//calculate based on button clicked

 const calculate=(btnValue) =>{

    if(btnValue==="="&& output !== ""){
        //if o/p is "%",replace with"/100" before evaluating
        output=eval(output.replace("%", "/100"));
    }else if(btnValue==="AC"){
        output="";
    }else if(btnValue==="DEL"){
        output=output.toString().slice(0,-1);
    }else{
        if(output===""&& specialCharater.includes(btnValue))return;
        output +=btnValue;
    }

    display.value=output;
 };






//console.log(display,buttons);

//addEventListener to buttons,call calculator() on click

buttons.forEach((button)=>{
    button.addEventListener("click",(e) => calculate(e.target.dataset.value));

});