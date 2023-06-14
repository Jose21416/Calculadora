const happyForm = document.forms['happyForm'];
const result = document.getElementById('result');

happyForm.addEventListener('submit', (e) => {
e.preventDefault();
const number1 = +happyForm['number1'].value;
const operator = happyForm['operator'].value;
const number2 = +happyForm['number2'].value;

switch (operator)
{
  case '+':
    value = number1 + number2;
    break;
  case '-':
    value = number1 - number2;
    break;
  case '*':
    value = number1 * number2;
    break;
  case '/':
    value = number1 / number2;
    break;
  case '**':
    value = number1 ** number2;
    break;
  case 'raiz':
    value = number1 ** (1/number2);
    break;
    default:
    break;
}
result.textContent = value
});                                    