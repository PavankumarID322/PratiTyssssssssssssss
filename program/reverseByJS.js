let str="Pavan";
for(let i=str.length-1;i>-1;i--){
    //  console.log(str.charAt(i));
}

let reverseStr="";
for(const c in str){
   reverseStr=str.charAt(c)+reverseStr;
}
console.log(reverseStr);
