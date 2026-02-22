
const box = document.getElementById("examBox");

let time = 25 * 60;

const timerDiv = document.createElement("div");
timerDiv.style.fontSize="20px";
timerDiv.style.marginBottom="20px";
box.appendChild(timerDiv);

function updateTimer(){
let m=Math.floor(time/60);
let s=time%60;
timerDiv.innerHTML=`زمان باقی‌مانده: ${m}:${s.toString().padStart(2,'0')}`;
time--;
if(time<0) submitExam();
}
setInterval(updateTimer,1000);

let html="";

questions.forEach((item,i)=>{
html+=`<div class="question"><h3>${i+1}) ${item.q}</h3>`;
item.options.forEach((opt,j)=>{
html+=`<label><input type="radio" name="q${i}" value="${j}">${opt}</label><br>`;
});
html+=`</div>`;
});

html+=`<button class="btn" onclick="submitExam()">پایان آزمون</button>`;
box.innerHTML+=html;

function submitExam(){
let score=0;
questions.forEach((q,i)=>{
let selected=document.querySelector(`input[name=q${i}]:checked`);
if(selected && parseInt(selected.value)===q.answer) score+=2;
});
let history=JSON.parse(localStorage.getItem("history")||"[]");
history.push({date:new Date().toLocaleString(),score:score});
localStorage.setItem("history",JSON.stringify(history));
localStorage.setItem("score",score);
window.location="result.html";
}
