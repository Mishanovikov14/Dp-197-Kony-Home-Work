import IsJsonString from '../JS/script.js'

function luckyTickets(context) {

    if (typeof context !== 'object') return {status: 'Failed', reason:`Type of "context" must be an object`};

    if (!('min' in context) || !('max' in context)) return {status: 'Failed', reason:'Object: "context" must have keys: "min", "max" '};

    if (Object.keys(context).length > 2) return {status: 'Failed', reason:'Object: "context" must have only 2 keys: "min", "max" '};

    let arrArg = Object.values(arguments[0]);
    
    for (let i = 0; i < arrArg.length; i++) {
        if (typeof arrArg[i] !== 'number') return {status: 'Failed', reason:`Type of key${i + 1} of argument: "context" must be a number`};
        if (!Number.isInteger(arrArg[i])) {
            return {status: 'Failed', reason:`Type of key${i + 1} of argument: "context" must be integer number`};
        }
    }

    let {max, min} = context;

    if (min > 999999 || max > 999999) return {status: 'Failed', reason:'Lycky tickets contain only 6 number'};
    if (min <= 0 || max <= 0) return {status: 'Failed', reason:'Value of number must be bigger then 0'};

    let count1 = 0;
    let count2 = 0;
    let arr1;
    let arr2;

    if (max.toString().length < 6) {
        arr1 = max.toString().split('');

        while (arr1.length !== 6) {
            arr1.unshift(0);
        }

        max = arr1.join('');
    }

    if (min.toString().length < 6) {
        arr2 = min.toString().split('');

        while (arr2.length !== 6) {
            arr2.unshift(0);
        }

        min = arr2.join('');
    }

    if (min > max) return {status: 'Failed', reason:' "min" must be less then "max" '};

    for (let i = min; i <= max; i++) {

        let arr = i.toString().split('').map(element => +element);
        let firstNuber = arr[0] + arr[1] + arr[2];
        let secondNumber = arr[3] + arr[4] + arr[5];
        if (firstNuber === secondNumber) count1++;
    
        let sum1 = 0;
        let sum2 = 0;
        for (let j = 0; j < arr.length; j++) {
            if (j % 2 === 0) {
                sum1 += arr[j]
            } else sum2 += arr[j]
        }
        if (sum1 === sum2) count2++;
    }

    const result = {
        winner: count1 > count2 ? 'First method is a winner' : 'Second method is a winner',
        firstMethod: count1,
        secondMethod: count2
    }

    if (count1 === count2) result.winner = 'Draw';
    if (count1 === 0 && count2 === 0) result.winner = 'Lucky ticket was not found';

    return result;
}

export function task5() {
    console.clear();
    const inpName = document.querySelector('.inp--task5');
    
    if (inpName.value === "") {
        return document.querySelector('.answer--task5').textContent = 'Input must contain values';
    }

    if (!IsJsonString(inpName.value)) {
        return document.querySelector('.answer--task5').textContent = 'Input must contain JSON string';
    }

    const context = JSON.parse(inpName.value);

    console.log(luckyTickets(context));

    document.querySelector('.answer--task5').textContent = 'The result is in the console';
}