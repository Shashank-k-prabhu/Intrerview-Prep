const transactions = [
  { id: 1, amount: 100 },
  { id: 2, amount: 200 },
  { id: 1, amount: 300 },
  { id: 3, amount: 150 },
  { id: 2, amount: 100 }
];

// [
//   { id: 1, amount: 400 },
//   { id: 2, amount: 300 },
//   { id: 3, amount: 150 }
// ]


const newar = transactions.reduce((acc,num)=>{
    if(!acc[num.id]){
        acc[num.id]=num
    }
    else{
       acc[num.id].amount+=num.amount
    }
    
    return acc;
},{})

console.log(Object.values(newar))
