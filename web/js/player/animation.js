(() => {

  const playerSprite = document.querySelector(".player--sprite");
  const timeToChangeSprites = 100;
  
  var currentSprite = 0;
  var currentPosition = 0;

  setInterval(changeSprites, timeToChangeSprites);

  function changeSprites() {
    playerSprite.style.top = `${currentPosition - 42}px`;    
    if(currentSprite === 2) return goToFirstSprite();
    goToNextSprite(); 
  }

  function goToFirstSprite() {
    currentSprite = 0;
    currentPosition = 0;
  }

  function goToNextSprite() {
    currentSprite += 1;
    currentPosition -= 42;
  }
})();