function chessBoard(boardLength, boardWidth, symbol) {
    if (!Number.isInteger(boardWidth) || !Number.isInteger(boardLength)) {
      return {status: 'Failed', reason:'Arguments: "boardWidth" and "boardLength" must be integer number'};
    } 
    if (symbol.length !== 1) return {status: 'Failed', reason:'Symbol length must be 1'};
    if (boardLength < 0 || boardWidth < 0)  return {status: 'Failed', reason:'Arguments: "boardWidth" and "boardLength" must be bigger then 0'};
    if (boardLength === 0 || boardWidth === 0)  return "''";

    let string = '';
    for (let i = 0; i < boardLength; i++) {
      let stringN = '';
      let a;
      let b;
  
      if (i % 2) {
        a = symbol;
        b = ' ';
      } else {
        a = ' ';
        b = symbol;
      }
  
      for (let j = 0; j < boardWidth; j++) {
        if (j % 2) {
          stringN += a;
        } else {
          stringN += b;
        }
      }

      string += stringN + '\n';
    }

    return string;
  }

export function task1() {
    console.clear();
    const inpName1 = document.querySelector('.inp--task11');
    const inpName2 = document.querySelector('.inp--task12');
    const inpName3 = document.querySelector('.inp--task13');
    
    if (inpName1.value === "" || inpName2.value === "" || inpName3.value === "") {
        return document.querySelector('.answer--task1').textContent = 'All inputs must contain values';
    }

    if (isNaN(+inpName1.value) || isNaN(+inpName2.value)) {
      return document.querySelector('.answer--task1').textContent = 'Length and width must be type of number';
    } 
      

    const length = +inpName1.value;
    const width = +inpName2.value;
    const s = inpName3.value;

    inpName1.value = '';
    inpName2.value = '';
    inpName3.value = '';

    console.log(chessBoard(length, width, s));

    document.querySelector('.answer--task1').textContent = 'The result is in the console';
}