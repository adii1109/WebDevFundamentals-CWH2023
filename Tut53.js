console.log("This tutorial Number : 53");

let name="Aditya";
let name1="Chaitanya";
let name2="Saurabh";
let name3= "Gangaram";

let greedText="Good MOrning"
function boy(name,greedText="Gredding form javascript") 
// greedText this value default :when parameter none that time executed 
// function parameter use that in used
// functioN:use for one function; write read to use

{
    console.log(name +"\t"+greedText); 
    console.log(name+"  is good boy and Inttellight student");
}

 
boy(name,greedText);
boy(name1,greedText);
boy(name2,greedText);
boy(name3,greedText);


function sum(num1,num2,num3){
    return (num1+num2+num3)
    // when u use return :unreachable code
    // console.log(writeen)
}

console.log(sum(2,3,5));