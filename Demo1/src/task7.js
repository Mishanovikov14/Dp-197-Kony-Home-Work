import IsJsonString from '../JS/script.js'

function fibonacciSeries(context) {

    if (typeof context !== 'object') return {status: 'Failed', reason:`Type of "context" must be an object`};
    
    if (!('min' in context) && !('max' in context) && !('length' in context)) {
        return {status: 'Failed', reason:'Object: "context" must have keys: "min", "max" or "length" '};
    }

    if (!('length' in context)) {
        if (!('min' in context) || !('max' in context)) {
            return {status: 'Failed', reason:'Object: "context" must have keys: "min", "max" '};
        }
    }

    let arrArg = Object.values(arguments[0]);
    for (let i = 0; i < arrArg.length; i++) {
        if (typeof arrArg[i] !== 'number') return {status: 'Failed', reason:`Type of key${i + 1} of argument: "context" must be a number`};
        if (!Number.isInteger(arrArg[i])) {
            return {status: 'Failed', reason:`Type of key${i + 1} of argument: "context" must be integer number`};
        }
    }

    if (context.length <= 0) return {status: 'Failed', reason:'Length must be bigger then 0'};
    if (context.min > context.max) return {status: 'Failed', reason:' "min" must be less then "max" '};
    if (context.max <= 0) return {status: 'Failed', reason:' "max" must be bigger then 0'};

    let arr = [];
    let first = 0;
    let second = 1;
    let res = 1;

    if ('length' in context) {
        if (context.length === 1) arr = [0, 1, 1];

        while(true) {
            if (res.toString().length > context.length) break;

            first = second;
            second = res;
            res = first + second;

            if (res.toString().length === context.length) arr.push(res);
        }

        return arr; 
    }

    arr = [0, 1];
    while(true) {
        if (first === context.min) arr.push(first);
        if (res >= context.min) arr.push(res);

        first = second;
        second = res;
        res = first + second;

        if (res > context.max) return arr; 
   }
}


export function task7() {
    console.clear();
    const inpName = document.querySelector('.inp--task7');
    
    if (inpName.value === "") {
        return document.querySelector('.answer--task7').textContent = 'Input must contain values';
    }

    if (!IsJsonString(inpName.value)) {
        return document.querySelector('.answer--task7').textContent = 'Input must contain JSON string';
    }

    const context = JSON.parse(inpName.value);

    console.log(fibonacciSeries(context));

    document.querySelector('.answer--task7').textContent = 'The result is in the console';
}