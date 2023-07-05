// sony-2nd round
// 1.Introduce yourself.
// 2.what is promise and how it works
// let pro=new Promise((resloved,rejected)=>{
    
//         const ranNum=Math.random(10,100);

//         if(ranNum>.5)
//             resloved(ranNum);
//         else
//             rejected(new Error('Rejected'));
           
//         });

//      pro.then((resloved)=>{
//         console.log(resloved+" resloved");
//      }).catch((rejected)=>{
//         console.log(rejected+" rejected");
//      });     

    //  const ranNum=Math.random(10,100);

    //     if(ranNum>.5)
    //         console.log(ranNum+` resolved`);
    //     else
    //         console.log('Rejected');
           
//    let p1= new Promise((resolve,reject)=>{
//         let ex=24;
//         if(ex==24){
//             resolve('resolved');
//         }
//         else
//         reject('rejected');
//     })


//     let p2=new Promise((resolve,reject)=>{
//         let h=852;
//         if(h==852)
//         resolve('promsie 2 resolved');
//         else
//         reject('Promsie 2 rejected')
//     })

//     let p3=new Promise((resolve,reject)=>{
//         let k=321;
//         if(k==321)
//         resolve('Promsie 3 resloved');
//         else
//         reject('Promise 3 rejected')
//     })

//     p1.then((re1)=>{
//         console.log(re1);
//         p2();
//     }).then((re)=>{
//         console.log(re);
//         p3();
//     }).then((re)=>{
//         console.log(re);
//     }).catch((er)=>{
//         console.log(er);
//     }).finally(()=>{
//         console.log("Finally");
//     });










// 3.what is promise.all and its syntax
// 3.what is the difference between cypress and automation



// let ab=[1,2,3];
// let a=1/ab[2];
// console.log(a);
// console.log(typeof(a));









// 4.Given a scenario and told me to write a logic for it












// 5.Given a scenario in case of frames and told me tom write logic
// 6.what is the difference between $ and element ,$$ and elements











// 7.difference between browser.pause() and wait.until()
// 8.Given an array and told me to use for of loop and forEach loop and told me to perform operation

const arr=[12,21,41,54];
// x=arr.map((ele)=>{
//    return ele*2;
// });
// console.log(x);

// for(const a1 of arr){
//     console.log(a1);
// }



// 9.write a logic like when i click on a button counter value should increase
// 10.Given standard function and function expression and asked me how it works
// function sample(){
//     return 'hi';
// }
// sample();




// 11.Rest and spread with syntax and example

function restEx(a,b,c,d,...re){
    console.log(a+b+c+d+re);
}
let arEx=[20,10,2,4,21,3];
// restEx(...arEx);


//example for rest
// function re12(l,m,...p){
//     console.log(l+m+p);
// }
// let g1='a',g2='b',g3='c',g4='d';
// re12(g1,g2,g3,g4);

//example for spread

// let a=[7,8,6,7,2,3];
// function spreadEx(a,b,c,d,e,f){
//     console.log(a+b+c+d+e+f);
// }
// spreadEx(...a);

// setTimeout(()=>{
//     console.log("setTimeOut Example");
//     console.log("setTimeOut Example");
//     console.log("setTimeOut Example");
//     console.log("setTimeOut Example");
//     console.log("setTimeOut Example");
//     console.log("setTimeOut Example");
//     console.log("setTimeOut Example");
//     console.log("setTimeOut Example");
//     console.log("setTimeOut Example");
// },10000)

// console.log("setTimeOut Example nnnnnnnnnn");
// console.log("setTimeOut Example nnnnnnnnnn");
// console.log("setTimeOut Example nnnnnnnnnn");
// console.log("setTimeOut Example nnnnnnnnnn");
// console.log("setTimeOut Example nnnnnnnnnn");
// console.log("setTimeOut Example nnnnnnnnnn");

// setTimeout(()=>{
//     console.log('I am another settimeout  ########################');
// },1);
// console.log("setTimeOut Example nnnnnnnnnn");









// 12.difference between isDisplayed(),isClickabe(),isEnabled()