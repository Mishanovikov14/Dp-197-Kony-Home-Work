import IsJsonString from '../JS/script.js'

function sortingTriangles(arr) {
    if (!Array.isArray(arr)) return {status: 'Failed', reason:'Function must have an array as argement'};

    let count = 0;
    let str;
    let newArr = [Object.values(arr[0])[0]];

    for (let i = 1; i < arr.length; i++) {
        let arrObj = Object.values(arr[i]);
        newArr.push(arrObj[0]);
        if (newArr[i] === newArr[i - 1]) return {status: 'Failed', reason:'The name of traingle must be unique'};
    }

    for (let i of arr) {
        if (typeof i !== 'object') return {status: 'Failed', reason:'Type of array elements must be an object'};

        const arrObj1 = Object.values(i);
        const arrObj2 = arrObj1.slice(1);

        if (typeof arrObj1[0] !== 'string') return {status: 'Failed', reason:'Type of the name of traingle must be a string'};
        if (arrObj1[0].toUpperCase() !== arrObj1[0]) return {status: 'Failed', reason:'The name of traingle must contain upper case letter'};

        for (let key of arrObj2) {
            if (typeof key !== 'number') return {status: 'Failed', reason:`Type of vertices must be a number`};
            if (key <= 0) return {status: 'Failed', reason:`Value of vertices must be bigger then 0`};
        }

        if (i.vertices.length !== 3 || i.vertices.length + 1 !== Object.keys(i).length) {
            return {status: 'Failed', reason:'Traingle must have 3 vertices'};
        }


        str = i.vertices
            .split('')
            .map((value => value.toLowerCase()));

        for (let j = 0; j < 3; j++) {
            if (str[j] !== Object.keys(i)[1 + j]) return {status: 'Failed', reason:'Traingle name must contain names of 3 vertices'};
        }

        count++;
    }


    let resArr = [];

    for (let triangle of arr) {
        let arrLength = Object.values(triangle);
        let p = (0.5 * (arrLength[1] + arrLength[2] + arrLength[3]));
        let s = Math.sqrt(p * (p - arrLength[1]) * (p - arrLength[2]) * (p - arrLength[3]));
        resArr.push({name: arrLength[0], s: s});
    }

    let result =  resArr
        .sort((a, b) => b.s - a.s)
        .map(element => element.name);

    return result;
}

export function task3() {
    console.clear();
    const inpName = document.querySelector('.inp--task3');
    
    if (inpName.value === "") {
        return document.querySelector('.answer--task3').textContent = 'Input must contain values';
    }

    if (!IsJsonString(inpName.value)) {
        return document.querySelector('.answer--task3').textContent = 'Inputs must contain JSON string';
    }

    const arr = JSON.parse(inpName.value);

    console.log(sortingTriangles(arr));

    document.querySelector('.answer--task3').textContent = 'The result is in the console';
}
