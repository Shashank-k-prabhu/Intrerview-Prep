const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Alex" }
];

const scores = [
  { id: 1, score: 90 },
  { id: 3, score: 75 },
  { id: 2, score: 85 }
];


// [
//   { id: 1, name: "John", score: 90 },
//   { id: 2, name: "Jane", score: 85 },
//   { id: 3, name: "Alex", score: 75 }
// ]


const lookup = scores.reduce((acc,num)=>{
   
   acc[num.id]=num
   
   return acc; 
},{})

console.log(lookup);


const merge = users.reduce((acc,num)=>{
    let user = lookup[num.id]
   acc.push({...user,...num}) ;
   return acc;
},[])

console.log(merge)
