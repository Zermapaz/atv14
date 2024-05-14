const form = document.getElementById('payrollForm');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const employeeName = document.getElementById('employeeName').value;
  const salary = parseFloat(document.getElementById('salary').value);
  const inssDiscountRate = 0.08;
  const inssValue = salary * inssDiscountRate;
  const netSalary = salary - inssValue;

  result.innerHTML = `
    <span>Nome do empregado: ${employeeName}</span>
    <span>Salário bruto: ${salary.toFixed(2)}</span>
    <span>Valor do INSS: ${inssValue.toFixed(2)}</span>
    <span>Salário líquido: ${netSalary.toFixed(2)}</span>
  `;

  console.log(`Employee Name: ${employeeName}`);
  console.log(`Gross salary: ${salary}`);
  console.log(`Valor do INSS: ${inssValue}`);
  console.log(` Salário líquido: ${netSalary}`);
});