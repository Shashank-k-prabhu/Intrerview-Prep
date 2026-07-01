// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const users = [
  { name: "John", age: 17 },
  { name: "Jane", age: 24 },
  { name: "Alex", age: 15 },
  { name: "Bob", age: 30 },
  { name: "Sam", age: 18 }
];

// {
//   minor: [
//     { name: "John", age: 17 },
//     { name: "Alex", age: 15 }
//   ],
//   adult: [
//     { name: "Jane", age: 24 },
//     { name: "Bob", age: 30 },
//     { name: "Sam", age: 18 }
//   ]
// }


let newAr = users.reduce((acc,num)=>{
    if(num.age<18){
        acc.minor.push(num)
    }
    else{
        acc.adult.push(num)
    }
    return acc;
},{
    minor:[],
    adult:[]
})

console.log(newAr);
