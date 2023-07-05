// 1.what are the projects you worked on and your roles and responsibilities in that


// 2. Diff between let var const with examples and expalination of each declaration works

// var x=10; let y=20; const z=3.141;
// console.log(x+" "+y+" "+z);


// function outter (){
//     var v='var declar';
//     function inner (){
//     var a=123;
//     console.log(a+" @@@@@@@@@@ "+x+" @@@@@@@@@@ "+y+" @@@@@@@@@@@@@@@@@ "+z+" @@@@@@@@@@@@@@@@@ "+v);
//     }
//     inner();
    
// }
// outter();

// inner();

 







// 3. Given a snippet and asked the output
// 4. difference between == and === operator with examples

// var q='123';
// let w=123;
// let ver=function (){
//     if(q==w){
//         console.log("same");
//     }
//     if(q===w){
//         console.log("strict@@@@");
//     }
// }
// ver();


// 5.Given a snippet related to the above question and asked the output
// 6. difference filter and map method in array with examples

// let ar=[1,4,74,54,21];

// let mapEx=ar.map((e)=>{
//     return e*11;
// });
// for(var cv of mapEx){
//     console.log(cv);
// }
// console.log(mapEx.length);

// let filterEx=ar.filter((e)=>{
//     return e%2==0;
// });
// for(var q of filterEx){
//     console.log(q);
// }
// console.log(filterEx.length);


// 7. difference between for of loop and forEach method with syntax

// var arr=new Array(1,2,3,4);
// // arr[0]=10;
// // arr[1]=24;
// // arr[2]=31;
// // arr[3]=45;
// // arr[4]=52;
// // arr[5]=60;

// for(var x of arr){
//     console.log(x*1+1000);
// }
// arr.forEach((el)=>{
//     if(el==3||el==2)
//     console.log(el);
// })







// 8. difference between null and undefined

//null is one of the primitive datatype, which is to be write explicitly in script
//undefined is one of the primitive datatype, which is signed to a variable whenever variable is declared but not initilizated

// console.log(null===undefined);  //false
// console.log(null==undefined);   //true


// var p=null;
// var l;
// console.log(p+"     "+l);
// console.log(typeof(p)+"     "+typeof(l));


// 9. difference between null and Nan

// var arr1=[1,2,3,4,5];
// // arr1=null;
// console.log(arr1);

// arr1.forEach((el)=>{
//     console.log(el);
// })

// obj={
// fN:'hi',
// lN:'hello',
// me:function(){
//     console.log(this.fN+"    "+this.lN);
// }
// }
// obj=undefined;
// console.log(obj);   //undefined



// 10. Given a snippet related to null,undefined and Nan and asked the output with explaination
// 11. data types?
//data types means conatiner's to holds the data    or dataholders
// major there are 2 types 
//primitive data type such as   Number Boolean null undefined String
//non-primitive data type such as   Object,function and Array

// obje={
//     city:'Bangalore',
//     pincode:560024,
//     me:function(){

//     }
// }
// console.log(typeof(obje));      //Object
// console.log(typeof(obje.me));   //function
// console.log(typeof(obje.pincode));  //number


// 12. diff b/w undefined and null?

//  undefined it is implicitily given by compiler, when we delcare a function ,object and variables but not initilizaled
//whenever we intenstionlly what to make a function , object or variables then we can have null.

// let obj;
// console.log(obj);   //undefined

// let objj={
//     na:'ncjkjs',
//     no:852369741
// }
// console.log(objj);
// objj=null;
// console.log(objj);

// 13.what is arrow function and its syntax
    //arrow fuction is the one of the way of decleraing a function and here function keyword is not mandatory
    // let arrayF=()=>{
    //     return 'hi'
    // }
    // console.log(arrayF());

// 14. what is ternary operator and its syntax and how it works
    //ternary operator means it takes 3 operands as arguments
    // let a=10,b=22;
    // let c=(a>b)?{
    //     console.log('True');
    // }:{
    //     console.log('False');
    // };
    // console.log(c);

// 15.what is hoisting in js