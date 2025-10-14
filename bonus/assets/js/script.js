/* 
BONUS

Facciamo accendi e spegni:

Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
E così via...

Per fare questo bonus potremmo aver bisogno di del metodo string.includes()
*/

const lampadina = document.getElementById('pic');

lampadina.addEventListener('click',
  function turnOn() {
    lampadina.src = './assets/img/yellow_lamp.png';
  }
)