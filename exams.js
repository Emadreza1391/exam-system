
let questions = [
{q:"2 + 2 چند می‌شود؟",options:["3","4","5","6"],answer:1}
];

let saved=JSON.parse(localStorage.getItem("bank")||"[]");
if(saved.length>0) questions.push(...saved);
