
let bank=JSON.parse(localStorage.getItem("bank")||"[]");
render();

function addQ(){
let item={
q:q.value,
options:[o1.value,o2.value,o3.value,o4.value],
answer:parseInt(ans.value)
};
bank.push(item);
localStorage.setItem("bank",JSON.stringify(bank));
render();
}

function render(){
let html="<h3>سوالات ذخیره شده</h3>";
bank.forEach((b,i)=>{
html+=`<div class="card">${b.q}
<button onclick="delQ(${i})">حذف</button></div>`;
});
list.innerHTML=html;
}

function delQ(i){
bank.splice(i,1);
localStorage.setItem("bank",JSON.stringify(bank));
render();
}
