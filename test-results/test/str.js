   // Reverse a string in JavaScript
//let str = "sathish";
//console.log(str.split("").reverse().join(""));
   //palindrome check
   /*let str = "mad";
   let p = (str.split("").reverse().join(""));
   if(p === str){
    console.log("yes")}
    else {
        console.log("no")
    }*/
        // remove duplicate//
       /* let str = "madam";
        let p = [...new Set(str)].join("");
        console.log(p);*/
              //  count char of string//
        /*let str = "madam";
        console.log(str.length);*/
                //factorial number//
   /* let a =5;
    let b =1;
    for(let i=1;i<=5;i++){
        b*=i;
        console.log(b);
    }*/
          // array lenght

const { json } = require("node:stream/consumers");

 /* let a = [1,2,3,4,5];
  console.log(a.[0]);*/
                //odd /even//
/*let a = 11;
if(a %2 ===0){
    console.log("even");}
    else{
console.log("odd");
    }*/
       //swapping two numbers using third variable//
       /*let a = 10;
       let b = 20;
       let c;

        c = a;
        a = b;
        b = c;
        console.log(a,b);*/
        //swapping two numbers using modern method//
       /* let a = 10;
        let b = 20;
        [a,b] = [b,a];
        console.log(a,b);
        console.log("a="+a);*/
         // switchcase//
        /* let days=5;
         switch(days){
        case 1:
        console.log("monday");
        break;

        case 2:
            console.log("tues");
            break;
        case 3:
            console.log("wed");
            break;
        default :
        console.log("no");
         }*/
         //largest of three numbers //
         /*let a = 50;
         let b = 10;
         let c = 15;
         if(a>b && a>c){
            console.log("a is great");
         }
         else if(b>a && b>c) {
            console.log("b is great");
         } 
         else
            {
         
            console.log("c");
         }*/

            // positive and negative//
         /*   let a = -3;
            if(a>0){
                console.log("positive");
            }else if (a<0){
                console.log("neg")
            
            }else{
                console.log("null");
            }*/
              /* ///while loop//
               let i = 1;
               while(i<=5){
                console.log(i);
                i++
               }*/
                /*     //do while
                     let i =1;
                     do{
                        console.log(i);
                        i++;
                     }
                     while(i<=10);*/
                 /* //even number
                  let i = 10;
                  for(i = 1 ; i<=10; i++){
                    if(i%2 ===0){
                        console.log(i);
                    }
                  }*/
                   /*    //odd number//
                       let i =10;
                       for(i=1 ; i<=10;i++){
                       if(i%2 !==0){
                    console.log("odd" , i);
                       }else if 
                        (i==3) {
                                continue;
                              
                       }
                            
                       }*/ 
                        /*  /// sum of 1to 10//
                          let a = 0;
                          for (i=1;i<=20;i++){
                            a= a+i;
                            console.log(a);
                          }*/
                         //factorial number//
                        /* let a = 10;
                         let b = 1;
                         for (i = 1; i<=a; i++){
                            b = b*i;
                            console.log(b);
                         }*/
                          // fibonacci//
                         /* let a = 0;
                          let b = 1;
                          let c;
                          console.log(a);
                          console.log(b);
                          for (i=1;i<10;i++){
                            c= a+b;
                            a=b;
                            b=c;
                            console.log(c);
                          }*/
                         //function call with arguments //
                         /*function add(a,b,c){
                            console.log(a+b+c);
                         }
                         add(2,2,2);*/
                         // return functiom//
                      /*  function add(a,b,c) {
                            return a+b+c;
                        }
                          let  d =add(5,5,5);
                            console.log(d);*/
                         /*   function sub(a,b){
                                return a-b;
                            }
                            let d = sub(10,5);
                            console.log(d)*/
                                //array//
                  /*  let arr =[10,20,]
                    arr.push(30);
                    console.log(arr);
                    console.log(arr[0]);
                    arr.pop()
                    console.log(arr)
                    console.log(arr.join("-"));*/
                      //looping through array//
                     /* let arr =[10,20,30]
                      for (i=0;i<=arr.length;i++){
                        console.log(arr[i])
                      }*/
                                   // sum of value using array//
              /*  let arr =[10,20,30,40,50]
                let b = 0 
                for (i=0; i<arr.length; i++){
                    b= b+arr[i]
                }
                console.log(b);*/
                 //for each loop//
                    // find the largest number in array//
                   /* let arr =[10,20,30,40,50];
                    let large = arr[0];
                    for (let i=0;i<arr.length;i++){
                        if(arr[i] <large ){
                            large = arr[i];
                        }
                    }

console.log(large);*/
                  // find the largest number/
                /*  let arr=[10,20,30,40]
                  let small = arr[0]
                  for(i=0; i<arr.length;i++){
                    if(arr[i]<small){
                        small = arr[i]
                    }
                  }
                    console.log(small);*/
                      //foreach//
                 /*     let fruits = ["apple" , "orange" , "mango"];
                      fruits.forEach(fru => console.log(fru));*/
                      // map()//
                  /*    let arr = [10,20,30,40]
                    let b = arr.map(arr=>arr*5);
                    console.log(b);*/
                     //filter()//
                  /*   let arr = [1,2,3,4,5]
                     let b= arr.filter(arr => arr%2 ===0);
                        console.log(b);*/
                        // reduce()//
                     /*   let arr = [1,2,3,4];

                  let b = arr.reduce((total, arr) => total + arr , 0);

                  console.log(b);*/
              /*    let arr = [1,2,3,4,5,6]
                let b = arr.find( arr=> arr>4);
                console.log(b);     */
                // includes//
               //let fruits = ["apple","orange","mango"];

               // b= (fruits.includes("mango"));                
               // console.log(b);
                    // object creation//
                   /* let players ={
                      batter : 5,
                      bowlers : 5,
                      allrounders : 5,
                    }

                    console.log(players);  */
                    // access object//
                  /*  let players ={
                      batter : 5,
                      bowlers : 5,
                      allrounders : 5,
                    }

                    console.log(players.batter); */
                        // add new property
                    /*    let players ={
                      batter : 5,
                      bowlers : 5,
                      allrounders : 5,
                    }
                    players.substitute = 5;

                    console.log(players); */
                    /// update//
                /*    let players ={
                      batter : 5,
                      bowlers : 5,
                      allrounders : 5,
                    }
                    players.batter = 10;

                    console.log(players); */

              /*   let employees = [
               {name: "Ram", age: 25},
              {name: "Sam", age: 30},
            {name: "John", age: 28}
                 ];

/*console.log(employees);
let b = employees.filter(employees =>employees.age > 26);
console.log(b);*/
            //looping through array of object//
 /* employees.forEach(emp=>{
    console.log(emp.name);
  })*/
                // filter//
   /* b = employees.filter(emp => emp.age >25);
    console.log(b);*/
        //json convert to obj//
 /*       let user = {
  "name": "Sathish",
  "role": "QA",
  "experience": 5
};

console.log(user.age);*/
           //json convert to obj//
/*let obj = {name:"Ram", age:25};

let b = JSON.stringify(obj);
console.log(b);*/
          //convert json to obj//
        /*  let a = '{"name":"Ram","age":25}';
          let b = JSON.parse(a);
          console.log(b.name); */
          // multipily using arrow function//
        /*  let mul = (a,b) =>(a*b);{
            console.log (mul(2,3));
          }*/
       /* let add = (a,b) =>(a+b);
        {
          console.log(add(5,5));
        }*/
                      // promise //
      /*                let myPromise = new Promise((resolve, reject) => {

  let success = null;

  if(success){
    resolve("Task completed")
  }else{
    reject("Task failed");
  }

});

myPromise
.then(result => console.log(result))
.catch(error => console.log(error));*/
                             //closure//
                          /*   function outer() {

  let message = "Hello";

  function inner() {
    console.log(message);
  }
inner();
  
}

outer();*/

 /*function a (){
  message = "won";
 }
function b(){
  console.log(message);
}
 a()
  b()*/
 /* function bankAccount() {

  let balance = 1000;

  return function(amount) {
    balance += amount;
    console.log(balance);
  }

}

let deposit = bankAccount();

deposit(500);
deposit(200);*/
                        //error handling//
 /*   function  money (amount){
      if (amount <100){
        throw("not enough");
      }
        else{
          console.log("ok" + amount);
      }
    }
    try{
      money(sss);

    }catch(error) {
      console.log(error.message);
    }*/

      ///string//
    /*  let a = "       hellow  world     ";
      console.log(a);*/
          //slice//
        /*  let a = "sathish"
          console.log(a.slice(3,7)); */
          ///split//
         /* let a = "a,b,c,d,e";
          let b = a.split(",");
          console.log(b);*/

         /* let a = "sathish";
          console.log(a.split("t"));*/
                // //
       /*         
                
                  }
console.log(isprime?"prime":"not prime ");*/
     // 
                     //   let a = 10;
      /*                   let b = 1;
                         for (i = 1; i<=a; i++){
                            b = b*i;
                            console.log(b);}*/
                            //vowels//
           /*                 let str = "sayhish";
                            let b = 0;
                            for(char of str.toLowerCase()){
                            if("aeiou".includes(char)){
                             
                              b++;
                            }}
   console.log(b);*/
                                 // sum o f two numbers//
                               /*  let arr = [2,7,11,15];
let target = 9;

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === target) {
      console.log(i, j);
    }
  }
}
*/
/*let arr=[1,2,3];
let b= arr.map(arr=>2*arr);
console.log(b);*/
/*let arr =[123];
let b = arr.filter(arr=>arr%2===0);
console.log(b); */
     //prime//
   /* for(num = 1; num <=20; num++){
    let  prime= true;
    
    if(num<2){
      prime = false;
    }
        for(let i=2;i< num;i++){
          if(num%i===0){
            prime = false;
            break;
          }
        } 
   if(prime){
    console.log(num);
   }}*/
  let str = "hellow worlsd";
  /*let b = str.split(" ").map(word=>word.split("").reverse().join(""));
  console.log(b);*/
  let b = str.split("").reverse().join("");
  console.log(b);