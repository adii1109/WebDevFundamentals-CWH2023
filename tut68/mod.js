function average(arr){
    let sum=0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum/arr.length;
}

// module.exports=average;
//module this is object
module.exports={
    avg:average,
    name:"Aditya",
    role:"FullStack"
}