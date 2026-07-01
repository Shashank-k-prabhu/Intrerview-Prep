const users = [
  {
    name: "John",
    skills: ["React", "Node"]
  },
  {
    name: "Jane",
    skills: ["Angular", "Java"]
  },
  {
    name: "Alex",
    skills: ["Python"]
  }
];

// [
//   "John - React",
//   "John - Node",
//   "Jane - Angular",
//   "Jane - Java",
//   "Alex - Python"
// ]

const ard = users.reduce((acc,num)=>{
    num.skills.forEach((skill)=>{
        
        let word= num.name + "-" + skill
        acc.push(word);
    })
    
    return acc;
},[])

console.log(ard)
