
//Input
const arr = [
  ["name", "Shashank"],
  ["age", 24],
  ["city", "Bangalore"]
];
//Ouput
{
  name: "Shashank",
  age: 24,
  city: "Bangalore"
}

//Solution

const arr = [
  ["name", "Shashank"],
  ["age", 24],
  ["city", "Bangalore"]
];


const ar = arr.reduce((acc,num)=>{
   acc[num[0]]=num[1]
   return acc;
},{})

console.log(ar);
