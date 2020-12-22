import IsJsonString from '../JS/script.js'

function analysisOfEnvelope(envelop1, envelop2) {
    if (typeof envelop1 !== 'object' || typeof envelop2 !== 'object') return {status: 'Failed', reason:`Type of arguments must be an object`};

    if (!("a" in envelop1) || !("b" in envelop1)) return {status: 'Failed', reason:'Argement: "envelop1" must be an object with keys: a, b'};
    if (!("c" in envelop2) || !("d" in envelop2)) return {status: 'Failed', reason:'Argement: "envelop2" must be an object with keys: c, d'};
    if (envelop2.c <= 0 || envelop2.d <= 0 || envelop1.a <= 0 || envelop1.b <= 0) {
        return {status: 'Failed', reason:'Value of arguments must be bigger then 0'};   
    }

    envelop2.name = 'envelop2';
    envelop1.name = 'envelop1';

    for (let i = 0; i < arguments.length; i++) {
        let arr = Object.values(arguments[i]);
        for (let j = 0; j < arr.length - 1; j++) {
            if (typeof arr[j] !== 'number') {
                return {status: 'Failed', reason:`Type key${j + 1} of argument: "${arguments[i].name}" must be a number`};
            }
        }
    }

    if (envelop1.a - envelop2.c > 0 && envelop1.b - envelop2.d > 0) return 1;
    if (envelop2.c - envelop1.a > 0 && envelop2.d - envelop1.b > 0) return 2;

    return 0;
}

export function task2() {
    console.clear();
    const inpName1 = document.querySelector('.inp--task21');
    const inpName2 = document.querySelector('.inp--task22');
    
    if (inpName1.value === "" || inpName2.value === "") {
        return document.querySelector('.answer--task2').textContent = 'All inputs must contain values';
    }

    if (!IsJsonString(inpName1.value) || !IsJsonString(inpName2.value)) {
        return document.querySelector('.answer--task2').textContent = 'All inputs must contain JSON string';
    }

    const envelop1 = JSON.parse(inpName1.value);
    const envelop2 = JSON.parse(inpName2.value);

    console.log(analysisOfEnvelope(envelop1, envelop2));

    document.querySelector('.answer--task2').textContent = 'The result is in the console';
}
