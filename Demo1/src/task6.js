function naturalNumber(n,m) {
    if (typeof n !== 'number' || typeof m !== 'number') return {status: 'Failed', reason:'Arguments must be type of number'};

    if (!Number.isInteger(n) || !Number.isInteger(m)) return {status: 'Failed', reason:'Arguments must be integer number'};

    if (n < 0) return {status: 'Failed', reason:'Argument "n" must be bigger then 0'};
    if (m <= 0) return {status: 'Failed', reason:'Argument "m" must be bigger then 0'};

    if (n === 0) return "''";

    let resArr = [];

    let i = 1;

    while (resArr.length < n) {
        if (i ** 2 >= m) resArr.push(`${i}`);
        i++;    
    }

    const res = resArr.join(', ');
    
    return res;
}

export function task6() {
    console.clear();
    const inpName1 = document.querySelector('.inp--task61');
    const inpName2 = document.querySelector('.inp--task62');
    
    if (inpName1.value === "" || inpName2.value === "") {
        return document.querySelector('.answer--task6').textContent = 'All inputs must contain values';
    }

    const n = +inpName1.value;
    const m = +inpName2.value;
    
    if (isNaN(n) || isNaN(m)) return document.querySelector('.answer--task6').textContent = 'All inputs must contain numbers';

    console.log(naturalNumber(n,m));

    inpName1.value = '';
    inpName2.value = '';

    document.querySelector('.answer--task6').textContent = 'The result is in the console';
}
