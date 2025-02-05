// console.log("Hello pavan");
// let a = 10;
// console.log (a);
// console.log (typeof a);
//  console.log ('2'>10);
// console.log (true == 1);
// console.log (true ===1);
// console.log (10 === 10);



// age=14;

// if(age>18){
//     console.log('Yes');
// }
// else{
//     console.log('No');
// }
// console.log(age>18 ? 'Yes' : 'No')



// age = ;

// if(age>18){
//     console.log('under age');
// }
// else if(age>=30){
//     console.log('ok');
// }
// else{
//     console.log("over age");
// }


// Funcation Declaration:
// sayHi('Pavan');
// function sayHi(name){
//     console.log(`Hello ${name}`);
// }

// Function Expression:

// let sayHi = function(name){
//     console.log(`Hi ${name}`);
// }
// sayHi('Pavan');

// Arrow Functions:

// let sayHi = (name) => console.log(`Good Morning ${name}`)
// sayHi('KLH');

// 26/12/24
// let user={
//     name:"Pavan",
//     age:19
// }

// admin = user;
// admin.name="Sriram"
// console.log(admin.name)
// console.log(user.name)

// Object Copying


// let user={
//     name:"Pavan",
//     age:20,
//     sizes:{
//         width: 20,
//         height:40
//     }
// }
// user1=user;
// user2=Object.assign({},user);

// console.log(user1===user)
// console.log(user2===user)
// user1.name="Somu"
// user2.name="KLH"
// console.log(user.name)


// Deep Clong vs Structured Cloning:


// let user={
//     name:"Ramu",
//     age:20,
//     sizes:{
//         width: 20,
//         height:40
//     }
// }
// user2=Object.assign({},user);
// user3=structuredClone(user);


// console.log(user2.sizes===user.sizes)
// console.log(user3.sizes===user.sizes)


// Methods inside Objects:

// let user={
//     name: "Pavan",
//     age:"25",

//     sayHi: function(){
//         console.log("Hello "+this.name)
//     }
// }
// user.sayHi();


// let user={
//     name: "Pavan",
//     age:"25", 
// }
// function sayHi(){
//     console.log("Hello",this.name);
// }

// user.sayHi=sayHi;

// user.sayHi();


// let user={
//     name: "Pavan",
//     age:"25", 
//     sayHi : () => console.log("Hello "+user.name)

// }

// user.sayHi();



