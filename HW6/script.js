//Task1------------------------------------------------------------------------

function ticTacToeChecker(arr) {
    for (let arrI of arr) {
        if (arrI.some(element => element === 0)) return -1;
    }

    function checkWin(arr, number) {
        let arrHight = [];
        let arrCross1 = [];
        let arrCross2 = [];
        let reversedArr = [...arr].reverse();

        for (let i = 0; i < arr.length; i++) {
            arrHight[i] = arr.map(element => element[i]);
            arrCross1[i] = arr[i][i];
            arrCross2[i] = reversedArr[i][i];
        }

        for (let arrI of arrHight) {
            if (arrI.every(element => element === number)) return number;
        }

        for (let arrI of arr) {
            if (arrI.every(element => element === number)) return number;
        }

        if (arrCross1.every(element => element === number) || arrCross2.every(element => element === number)) {
            return number;
        }

        return false;
    }

    if (checkWin(arr, 1) && checkWin(arr, 2)) return 'This is unreal! =)';
    if (checkWin(arr, 1)) return (checkWin(arr, 1));
    if (checkWin(arr, 2)) return (checkWin(arr, 2));

    return 0;    
}

console.log(ticTacToeChecker([
    [2, 2, 1],
    [2, 2, 1], 
    [2, 1, 1]]));

//Task2------------------------------------------------------

function decodder(string) {
    let reg1 =  /[,:;".!?]/g;
    let reg2 =  /[.!?]+\s/g;
    let reg3 = /[,:;".!?']/g;
    let arr = string.split(reg2);

    function pushing(count) {
        let resArr = [];

        let arrI = arr.map((element, index) => {
            if (index === 0) {
                let newStr = element.replace(reg3, '');
                return newStr.split(' ');
            }

            let newStr = element.replace(reg1, '');

            return newStr.split(' ');
        });
    
        arrI[0] = arrI[0].map(element => element.split(''));
        
        for (let i = 0; i < count; i++) {
            let res = arrI[i+1][arrI[0][i].length - 1];
            if (res) resArr.push(res);
        }

        let resultString = resArr.join(' ');
    
        let fixedResultString = resultString[0].toUpperCase() + resultString.slice(1).toLowerCase() + '.';

        return(fixedResultString);
    }

    let count = arr[0].length;

    if (count >= arr.length) {
        count = count - (count - arr.length) - 1;
        return pushing(count);
    }
    
    return pushing(count);
}

console.log(decodder('Yesterday, we bumped into Laura. It had to happen, but you can\'t. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it.'));

console.log(decodder('Yes\'terday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.'));
