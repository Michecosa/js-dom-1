/* 
BONUS

Facciamo accendi e spegni:

Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
E così via...

Per fare questo bonus potremmo aver bisogno di del metodo string.includes()
*/

const lampadina = document.getElementById('pic');
const srcLampOn = './assets/img/yellow_lamp.png';
const srcLampOff = './assets/img/white_lamp.png';
const bottone = document.querySelector('#bottone');

bottone.addEventListener('click', function turnOnOff() {
  const getLampId = lampadina.getAttribute('src');
  if (getLampId.includes('white_lamp.png')) {
    lampadina.src = srcLampOn;
  } else {
    lampadina.src = srcLampOff;
  }
});