const happyForm = document.forms['happyForm'];
happyForm.addEventListener('submit', (e) => {
e.preventDefault();
console.log(happyForm['number1']);
console.log(happyForm['operator']); 
console.log(happyForm['number2']);  
});