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

/**
 * @function turnOnOff
 * @description Al click del bottone, cambia il src dell'immagine della lampadina,
 *              simulando l'accensione o lo spegnimento. Aggiorna anche il testo del bottone
 *              in base allo stato della lampadina.
 * 
 * Non riceve parametri e non restituisce valori.
 */

bottone.addEventListener('click', 
  function turnOnOff() {
    if (lampadina.src.includes('white_lamp.png')) {
      lampadina.src = srcLampOn;
      bottone.innerHTML = "Spegni";
    } else {
      lampadina.src = srcLampOff;
      bottone.innerHTML = "Accendi";
    }
});