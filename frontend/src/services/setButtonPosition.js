function setButtonPosition() {
  const buttonInit = [];
  const number = [1, 2, 3, 4];
  for (let i = 0; i < 4; i++) {
    const rands = Math.floor(Math.random() * number.length);
    buttonInit.push([number[rands]]);
    number.splice(rands, 1);
  }
  return buttonInit;
}
export default setButtonPosition;
