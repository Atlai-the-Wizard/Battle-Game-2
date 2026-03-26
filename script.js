const powerLevels = {
  playerOne: 2,
  playerTwo: 2,
  playerThree: 2,
  playerFour: 2,
}

const moneyCount = {
  playerOne: 2,
  playerTwo: 2,
  playerThree: 2,
  playerFour: 2,
}

// power buttons
const powerButtonsInc = document.querySelectorAll('.power-btn-inc');

powerButtonsInc.forEach(button => {
  button.addEventListener('click', function() {
      const playerPower = this.getAttribute('data-player-power');
      powerLevels[playerPower]++;
      const stats = document.getElementById(`${playerPower}-power`);
      stats.textContent = powerLevels[playerPower];
  });
});

const powerButtonsDec = document.querySelectorAll('.power-btn-dec');

powerButtonsDec.forEach(button => {
  button.addEventListener('click', function() {
    const playerPower = this.getAttribute('data-player-power');
    powerLevels[playerPower]--;
    const stats = document.getElementById(`${playerPower}-power`);
    stats.textContent = powerLevels[playerPower];
  });
});

// money buttons

const moneyButtonsInc = document.querySelectorAll('.money-btn-inc');

moneyButtonsInc.forEach(button => {
  button.addEventListener('click', function() {
    const playerMoney = this.getAttribute('data-player-money');
    moneyCount[playerMoney]++;
    const stats = document.getElementById(`${playerMoney}-money`);
    stats.textContent = moneyCount[playerMoney];
  });
});

const moneyButtonsDec = document.querySelectorAll('.money-btn-dec');

moneyButtonsDec.forEach(button => {
  button.addEventListener('click', function() {
    const playerMoney = this.getAttribute('data-player-money');
    moneyCount[playerMoney]--;
    const stats = document.getElementById(`${playerMoney}-money`);
    stats.textContent = moneyCount[playerMoney];
  });
});

// player select

const playerImages = document.querySelectorAll('.selectable');

playerImages.forEach(img => {
  img.addEventListener('click', (e) => {
    const clickedImg = e.currentTarget;
    const parentGallery = clickedImg.closest('.player-select');
    parentGallery.querySelectorAll('.selectable').forEach(i => i.classList.remove('active'));
    clickedImg.classList.add('active');
    parentGallery.classList.add('selection-made');
  });
});