function playSound (e) {
    let audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    let key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    key.classList.add('playing')
    if(!audio) return;
    audio.currentTime = 0;
        audio.play();

   }
   function removeTransition (e) {
     if(e.propertyName !== 'transform') return;
     console.log(e.propertyName)
     this.classList.remove('playing')
   }

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
 window.addEventListener('keydown' , playSound);
