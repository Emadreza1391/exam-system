
const score=parseInt(localStorage.getItem("score"));
let history=JSON.parse(localStorage.getItem("history")||"[]");

let html=`نمره شما: ${score} از 30<br><br>`;
html+=`<h3>سوابق آزمون:</h3>`;
history.forEach(h=>{
html+=`${h.date} — نمره: ${h.score}<br>`;
});

html+=`<br><button class="btn" onclick="generatePDF()">دانلود PDF</button>
<button class="btn" onclick="location.href='index.html'">بازگشت</button>`;

document.getElementById("result").innerHTML=html;

function generatePDF(){
const { jsPDF } = window.jspdf;
let doc=new jsPDF();
doc.text("Exam Report",20,20);
doc.text("Score: "+score,20,40);
doc.save("report.pdf");
}
