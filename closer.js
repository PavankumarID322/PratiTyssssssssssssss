// function a(){
//     let a1=123;
//     console.log(a1);
//    return function b(){
//     console.log(a1+'b');
//     return function c(){
//         console.log(a1+'c');
//         return function d(){
//             console.log(a1+'d');
//         }
//     }
// }
// }

// let demo1=a();     
// console.log(demo1);

// var x=23;
// (function a(){
//     var x=43;
//     (function ran(){
//        x++;
//         console.log(x);
//         var x=11
//     })
//     ();
// })
// ();

function reverseString(str){
    let sp=str.split('');
    let rev=sp.reverse();
    let jo=rev.join('')
    return jo
    
}

console.log(reverseString("how are"));









