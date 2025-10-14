/* 
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.

Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

*/

const lampadina = document.getElementById('pic');
const bottone = document.querySelector('bottone');

bottone.addEventListener('click',
  function turnOn() {
    lampadina.src = './assets/img/yellow_lamp.png';
  }
)