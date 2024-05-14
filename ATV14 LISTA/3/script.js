const form = document.getElementById('salaryForm');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const salary = parseFloat(document.getElementById('salary').value);
  let discountRate;
  let discountAmount;

  if (salary <= 1000) {
    discountRate = 0.08;
    discountAmount = salary * discountRate;
  } else if (salary > 1000 && salary <= 1500) {
    discountRate = 0.085;
    discountAmount = salary * discountRate;
  } else {
    discountRate = 0.09;
    discountAmount = salary * discountRate;
  }

  result.innerHTML = `
    <span>Salário em consideração: ${salary.toFixed(2)}</span>
    <span>Taxa de desconto: ${discountRate.toFixed(2)}</span>
    <span>Valor do desconto: ${discountAmount.toFixed(2)}</span>
  `;

  console.log(`Salário em consideração: ${salary}`);
  console.log(`Taxa de desconto: ${discountRate}`);
  console.log(`Valor do desconto: ${discountAmount}`);
});