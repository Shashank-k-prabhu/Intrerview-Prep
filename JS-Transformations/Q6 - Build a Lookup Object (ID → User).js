const users = [
  { id: 101, name: "John", age: 20 },
  { id: 102, name: "Jane", age: 24 },
  { id: 103, name: "Alex", age: 19 }
];

// {
//   101: { id: 101, name: "John", age: 20 },
//   102: { id: 102, name: "Jane", age: 24 },
//   103: { id: 103, name: "Alex", age: 19 }
// }

const newarr = users.reduce((acc,num)=>{
   acc[num.id]=num
   return acc;
},{})

console.log(newarr)
