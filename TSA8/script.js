
const flexContainer = document.getElementById('flex-cont');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');

const gapInput = document.getElementById('gap');
const rowButton = document.getElementById('row');
const columnButton = document.getElementById('column');

const justifyStartButton = document.getElementById('justify-start');
const justifyCenterButton = document.getElementById('justify-center');
const justifyEndButton = document.getElementById('justify-end');
const justifySpaceBetweenButton = document.getElementById('justify-space-between');
const justifySpaceAroundButton = document.getElementById('justify-space-around');
const justifySpaceEvenlyButton = document.getElementById('justify-space-evenly');

const alignStartButton = document.getElementById('align-start');
const alignCenterButton = document.getElementById('align-center');
const alignEndButton = document.getElementById('align-end');

const resetGrowButton = document.getElementById('reset-grow');
const growAllButton = document.getElementById('grow-all');
const box1GrowInput = document.getElementById('box1-grow');
const box2GrowInput = document.getElementById('box2-grow');
const box3GrowInput = document.getElementById('box3-grow');

const resetButton = document.getElementById('reset');

flexContainer.style.display = 'flex';
flexContainer.style.flexDirection = 'row';
flexContainer.style.justifyContent = 'flex-start';
flexContainer.style.alignItems = 'flex-start';
flexContainer.style.gap = '0px';

box1.style.flexGrow = '0';
box2.style.flexGrow = '0';
box3.style.flexGrow = '0';


rowButton.addEventListener('click', () => {
  flexContainer.style.flexDirection = 'row';

  flexContainer.style.justifyContent = 'flex-start';
});

columnButton.addEventListener('click', () => {
  flexContainer.style.flexDirection = 'column';

  flexContainer.style.alignItems = 'flex-start';
});

justifyStartButton.addEventListener('click', () => {
  flexContainer.style.justifyContent = 'flex-start';
});

justifyCenterButton.addEventListener('click', () => {
  flexContainer.style.justifyContent = 'center';
});

justifyEndButton.addEventListener('click', () => {
  flexContainer.style.justifyContent = 'flex-end';
});

justifySpaceBetweenButton.addEventListener('click', () => {
  flexContainer.style.justifyContent = 'space-between';
});

justifySpaceAroundButton.addEventListener('click', () => {
  flexContainer.style.justifyContent = 'space-around';
});

justifySpaceEvenlyButton.addEventListener('click', () => {
  flexContainer.style.justifyContent = 'space-evenly';
});

alignStartButton.addEventListener('click', () => {
  flexContainer.style.alignItems = 'flex-start';
});

alignCenterButton.addEventListener('click', () => {
  flexContainer.style.alignItems = 'center';
});

alignEndButton.addEventListener('click', () => {
  flexContainer.style.alignItems = 'flex-end';
});

resetGrowButton.addEventListener('click', () => {
  box1.style.flexGrow = '0';
  box2.style.flexGrow = '0';
  box3.style.flexGrow = '0';
  box1GrowInput.value = '0';
  box2GrowInput.value = '0';
  box3GrowInput.value = '0';
});

growAllButton.addEventListener('click', () => {
  box1.style.flexGrow = '1';
  box2.style.flexGrow = '1';
  box3.style.flexGrow = '1';
  box1GrowInput.value = '1';
  box2GrowInput.value = '1';
  box3GrowInput.value = '1';
});

box1GrowInput.addEventListener('input', () => {
  box1.style.flexGrow = box1GrowInput.value;
});

box2GrowInput.addEventListener('input', () => {
  box2.style.flexGrow = box2GrowInput.value;
});

box3GrowInput.addEventListener('input', () => {
  box3.style.flexGrow = box3GrowInput.value;
});

gapInput.addEventListener('input', () => {
  flexContainer.style.gap = `${gapInput.value}px`;
});

resetButton.addEventListener('click', () => {
  flexContainer.style.display = 'flex';
  flexContainer.style.flexDirection = 'row';
  flexContainer.style.justifyContent = 'flex-start';
  flexContainer.style.alignItems = 'flex-start';
  flexContainer.style.gap = '0px';

  box1.style.flexGrow = '0';
  box2.style.flexGrow = '0';
  box3.style.flexGrow = '0';

  gapInput.value = '0';
  box1GrowInput.value = '0';
  box2GrowInput.value = '0';
  box3GrowInput.value = '0';
});
