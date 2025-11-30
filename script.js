// Source - https://stackoverflow.com/a
// Posted by Dev, modified by community. See post 'Timeline' for change history
// Retrieved 2025-11-25, License - CC BY-SA 4.0


function sendMail() {
   let params = {
     
      nom:document.querySelector("#fname").value,
      email:document.querySelector("#email").value
      
   } 
   emailjs.send("service_rfxqswj", "template_swdnfus",params).then(function(response) {
   console.log('SUCCESS!', response.status, response.text);
   alert('Informations enregistrées avec succès.');
   }, function(error) {
   console.log('FAILED...', error);
   alert('Informations envoyées avec succès.');
   });  
};


