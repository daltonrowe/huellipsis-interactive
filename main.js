const output = document.querySelector('#output');

const numGradsInput = document.querySelector('#numgrads');
const numGradsLabel = document.querySelector('label[for="numgrads"]');

const lengthInput = document.querySelector('#length');
const lengthLabel = document.querySelector('label[for="length"]');

const updateOutput = function () {
  const length = lengthInput.value;
  const numGrads = numGradsInput.value;
  console.log('updating!', numGrads, length);

  const degSteps = 360 / numGrads;
  const outputStyles = [];

  for (let i = 0; i < numGrads; i++) {
    const nextGradStep = `linear-gradient(${degSteps * i}deg, hsl(${degSteps * i}deg, 100%, 50%), transparent ${length}%)`
    outputStyles.push(nextGradStep);
  }

  output.style.background = outputStyles.join(',')
}

const updateNumgrads = function() {
  numGradsLabel.textContent = `Number of Gradients (${numGradsInput.value})`;
  updateOutput();
}

const updateLength = function() {
  lengthLabel.textContent = `Gradient Length (${lengthInput.value}%)`
  updateOutput();
}

const attachControlListeners = function() {
  numGradsInput.addEventListener('input', updateNumgrads);
  lengthInput.addEventListener('input', updateLength);
}

attachControlListeners();
updateOutput();