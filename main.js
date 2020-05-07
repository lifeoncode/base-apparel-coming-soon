 // grab from element and the input
 const [form, input, respond] = [document.querySelector('form'), document.querySelector('input'), document.querySelector('#respond p')];
 // listen for event
 form.addEventListener('submit', (e) => {
   
   // if the input field is empty -- 
   // stop form from submitting and respond with error animation
   if(input.value === ''){
     e.preventDefault()
     form.classList.add('error');

     setTimeout(() => {
       form.classList.remove('error');
     }, 1000);

   }else{

     // otherwise respond with a message
     form.classList.add('hide');
     document.querySelector('.content_inner p').classList.add('hide');

     setTimeout(() => {
       respond.textContent = 'Check you Inbox.';
     }, 500);

     // still prevent from submitting because... well its not really goind to any database
     e.preventDefault();
   }
   
 })

 // if input is in focus
 // remove the error
 input.addEventListener('focus', (e) => {
   form.classList.remove('error');
 })