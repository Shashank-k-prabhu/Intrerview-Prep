const words = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple",
  "kiwi"
];
// {
//   apple: 3,
//   banana: 2,
//   orange: 1,
//   kiwi: 1
// }


const newAr = words.reduce((acc,num)=>{
    // if(acc[num]){
    //     acc[num] = acc[num]+1
    // }
    // else{
    //     acc[num]=1;
    // }
    // return acc;
    
    acc[num]? acc[num]=acc[num]+1: acc[num] =1
    
    return acc;
},{}) 

console.log(newAr)
