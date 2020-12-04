const [form, email, error] = [document.querySelector('form'), document.querySelector('input'), document.querySelector('.error')];
form.addEventListener('submit', validate);
function validate(e){
  e.preventDefault();

  if(email.value === '' || email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1){
    error.classList.add('show');
    setTimeout(() => {
      error.classList.remove('show');
    }, 3000);
  }
}

email.addEventListener('keyup', function(e){
  if(email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1){
    error.classList.add('show');
    setTimeout(() => {
      error.classList.remove('show');
    }, 3000);
  }
})