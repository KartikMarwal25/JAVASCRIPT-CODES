const bod = document.querySelector("body");
console.log(bod);
let calculation="";
function a1(){
    calculation+="1";
    document.getElementById("ans").innerHTML=calculation;
    console.log(calculation);
}
function a2(){
    calculation+="2";
    document.getElementById("ans").innerHTML=calculation;
    console.log(calculation);
}
function a3(){
    calculation+="3";
    document.getElementById("ans").innerHTML=calculation;
    console.log(calculation);
}
function a4(){
    calculation+="4";
    document.getElementById("ans").innerHTML=calculation;
    console.log(calculation);
}
function a5(){
    calculation+="5";
    document.getElementById("ans").innerHTML=calculation;
    console.log(calculation);
}
function a6(){
    calculation+="6";
    document.getElementById("ans").innerHTML=calculation;
    console.log(calculation);
}
function a7(){
    calculation+="7";
    document.getElementById("ans").innerHTML=calculation;
    console.log(calculation);
}
function a8(){
    calculation+="8";
    document.getElementById("ans").innerHTML=calculation;
    console.log(calculation);
}
function a9(){
    calculation+="9";
    document.getElementById("ans").innerHTML=calculation;
    console.log(calculation);
}
function a10(){
    calculation+="0";
    document.getElementById("ans").innerHTML=calculation;
    console.log(calculation);
}
function a11(){
    calculation+="+";
    document.getElementById("ans").innerHTML=calculation;
    console.log(calculation);
}
function a12(){
    calculation+="-";
    document.getElementById("ans").innerHTML=calculation;
    console.log(calculation);
}
function a13(){
    calculation+="*";
    document.getElementById("ans").innerHTML=calculation;
    console.log(calculation);
}
function a14(){
    calculation+="/";
    document.getElementById("ans").innerHTML=calculation;
    console.log(calculation);
}
function a15(){
    calculation+=".";
    document.getElementById("ans").innerHTML=calculation;
    console.log(calculation);
}
function a16(){
    
    try{
        document.getElementById("msg").innerHTML=calculation
        calculation=eval(calculation);
        
       document.getElementById("ans").innerHTML=calculation; 
    }
    catch(error){
        document.getElementById("ans").innerHTML="ERROR";
        document.getElementById("msg").innerHTML="Press Clear";
    }
    console.log(calculation);
    
}
function a17(){
    calculation="";
    document.getElementById("ans").innerHTML=calculation;
    document.getElementById("msg").innerHTML="";
    console.log("Cleared.");
}
