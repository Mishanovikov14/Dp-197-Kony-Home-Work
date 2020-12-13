//Task1------------------------------------------------------

function resultDecoder(string) {
    function decoder(string) {
        let reg1 =  /[,:;".!?]/g;
        let reg2 =  /[.!?]+\s/g;
        let reg3 = /[,:;".!?']/g;
        let arr = string.split(reg2);
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
    
        let count = arrI[0].length;
    
        if (count >= arr.length) {
            count = count - (count - arr.length) - 1;
        }
        
        if (arr.length > count + 1) {
            count = arr.length;
        }
    
        for (let i = 0; i < count; i++) {
            if (i === arrI[0].length) {
                let newArr = arr.slice(arrI[0].length + 1);
                const stringForNewFunction = newArr.join('. ');
                resArr.push(decoder(stringForNewFunction));
                break;
            }
    
            let res = arrI[i+1][arrI[0][i].length - 1];
            if (res) resArr.push(res);
        }
    
        let resultString = resArr.join(' ');
    
        if (resultString === '') return '';
        
        let fixedResultString = resultString[0].toUpperCase() + resultString.slice(1).toLowerCase();
    
        return(fixedResultString);
    }

    const resultOfDecodder = decoder(string);

    let globalResult;
    
    if (resultOfDecodder === '') return 'Message not found!';

    if (resultOfDecodder[resultOfDecodder.length - 1] === ' ') {
        globalResult = resultOfDecodder.substring(0, resultOfDecodder.length - 1) + '.';
        return globalResult;
    }

    globalResult = resultOfDecodder + '.';

    return globalResult;
}

console.log(resultDecoder('Yesterday, we bumped into Laura. It had to happen, but you can\'t. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it.'));

console.log(resultDecoder('Yes\'terday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first.'));

console.log(resultDecoder('Yes\'terday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first. Yes\'terday, we bumped into Laura. It had to happen, but you can\'t deny the timing couldn\'t be worse. The "mission" to try and seduce her was a complete failure last month. By the way, she still has the ring I gave her. Anyhow, it hasn\'t been a pleasurable experience to go through it. I wanted to feel done with it first. DFsdfsdfsdf dsdgwrsdf fsdf. SD, WSAFASF.'));

// Task2-----------------------------------------------

function damagedOrSunk(board, attacks) {
    const shipSize = board.reduce((acc, row) => {
        row.reduce((shipNumber, element) => {
            if (element !== 0) {
                shipNumber[element] = !shipNumber[element] ? 1 : shipNumber[element] + 1;
            }
            return shipNumber;
        }, acc);

        return acc;
        }, {});

    const counterOfHits = attacks.reduce((acc, attack) => {
        const [ x, y ] = attack;
        const damagedShip = board[board.length - y][x - 1];

        if (damagedShip > 0) {
        acc[damagedShip] = !acc[damagedShip] ? 1 : acc[damagedShip] + 1;
        }

        return acc;
    }, {});

    const result = Object.keys(shipSize).reduce((acc, key) => {
        const amountOfHits = counterOfHits[key] ? counterOfHits[key] : 0;

        if (amountOfHits === 0) {
        acc.notTouched++;
        acc.points--;
        } 

        if (amountOfHits === shipSize[key]) {
        acc.sunk++;
        acc.points++;
        } else {
        acc.damaged++;
        acc.points += 0.5;
        }

        return acc;
    }, { sunk: 0, damaged: 0, notTouched: 0, points: 0 });

    return result;
  }

  console.log(damagedOrSunk(
      [[0,0,5,5,5,5],
       [0,3,0,0,0,0],
       [0,3,0,1,0,0],
       [0,3,0,1,0,0]], [[2, 1], [1, 3], [4, 2]]));