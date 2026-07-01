const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 1, name: "John" },
  { id: 3, name: "Alex" },
  { id: 2, name: "Jane" }
];

// [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
//   { id: 3, name: "Alex" }
// ]


const ar = users.reduce((acc,num)=>{
  let dup=false;
  acc.forEach((user)=>{
      if(user.id == num.id)
        {
            dup=true;
            return 
        }
  })
  
  if(!dup)
    acc.push(num);
  
  return acc
},[])

console.log(ar);
