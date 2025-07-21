// Example certificate generation
function generateCertificate(name) {
  const doc = new jsPDF();
  doc.text("Certificate of Completion", 20, 30);
  doc.text("Awarded to: " + name, 20, 50);
  doc.save("certificate.pdf");
}
