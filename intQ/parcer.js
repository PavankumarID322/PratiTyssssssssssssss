let st='425lcn';
let per=parseInt(st);
console.log(per);


class BaseClass{
    then=1;
    static s1(){
     console.log("I am static method in BaseClass");
    }
    s2(){
        console.log("I am non-static method in BaseClass");
    }
    a=10;
    c=[10,20,30,40];
    b=(a)=>{
        let xyz=a;
        
        return xyz;
    }
}
BaseClass.s1();
let zx=new BaseClass();
zx.s2();
console.log(zx.a);
console.log(zx.b(2456));


class BaseClass1 extends BaseClass{
    then=45;
    b=()=>{
        console.log("this is baseclass1");
    }
    s2(){
        console.log('this baseclass1');
    }
    s1(){
        function fun(){
            console.log("I am fuction");
        }
        fun();
        console.log('non static in baseclass 1');
    }
    
    

}

let bc=new BaseClass1();
// console.log(bc.a);
// bc.b(145);
// console.log(bc.then);
// bc.s2();
// console.log(bc.c);
// bc.s1();
// BaseClass.s1();

bc.s1();

