const employees = [
  { id: 1, name: "John", dept: "IT" },
  { id: 2, name: "Jane", dept: "HR" },
  { id: 3, name: "Alex", dept: "IT" },
  { id: 4, name: "Bob", dept: "Sales" },
  { id: 5, name: "Sam", dept: "HR" }
];

// {
//   IT: [
//     { id: 1, name: "John", dept: "IT" },
//     { id: 3, name: "Alex", dept: "IT" }
//   ],
//   HR: [
//     { id: 2, name: "Jane", dept: "HR" },
//     { id: 5, name: "Sam", dept: "HR" }
//   ],
//   Sales: [
//     { id: 4, name: "Bob", dept: "Sales" }
//   ]
// }

const newarr = employees.reduce((acc,num)=>{
   let dept=num.dept;
   if(acc[dept])
   acc[dept].push(num)
   else{
   acc[dept]=[];
   acc[dept].push(num)
   }
   return acc
},{})

console.log(newarr);
