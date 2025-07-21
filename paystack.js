
function payAndLogin() {
  let matric = prompt("Enter Matric Number:");
  let rrr = prompt("Enter RRR:");
  let handler = PaystackPop.setup({
    key: 'pk_live_691f0137e7ce1a10814b51da0710d626f7c1ed38',
    email: matric + "@student.edu",
    amount: 20000,
    currency: "NGN",
    ref: '' + Math.floor((Math.random() * 1000000000) + 1),
    onClose: function() {
      alert('Payment cancelled');
    },
    callback: function(response) {
      localStorage.setItem("matric", matric);
      localStorage.setItem("paid", "true");
      window.location.href = "quizzes/quiz.html";
    }
  });
  handler.openIframe();
}
