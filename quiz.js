
let questions = [
  { q: "What is Newton's Second Law?", options: ["F=ma", "E=mc^2", "a^2+b^2=c^2", "F=mv"], answer: "A" },
  { q: "Unit of Force?", options: ["Joule", "Newton", "Watt", "Pascal"], answer: "B" }
];

let timer = 20 * 60, interval;

window.onload = () => {
  loadQuiz();
  startTimer();
};

function loadQuiz() {
  const container = document.getElementById("quiz-container");
  questions.forEach((q, i) => {
    let html = `<div><p>${i+1}. ${q.q}</p>`;
    q.options.forEach((opt, j) => {
      html += `<label><input type="radio" name="q${i}" value="${String.fromCharCode(65+j)}"/> ${String.fromCharCode(65+j)}. ${opt}</label><br>`;
    });
    html += `</div>`;
    container.innerHTML += html;
  });
}

function startTimer() {
  interval = setInterval(() => {
    if (timer <= 0) {
      clearInterval(interval);
      submitQuiz();
    } else {
      timer--;
      document.getElementById("time").textContent = 
        String(Math.floor(timer/60)).padStart(2, '0') + ":" + 
        String(timer%60).padStart(2, '0');
    }
  }, 1000);
}

function submitQuiz() {
  clearInterval(interval);
  let score = 0;
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name=q${i}]:checked`);
    if (selected && selected.value === q.answer) score++;
  });
  alert("Your score: " + score + "/" + questions.length);
}
