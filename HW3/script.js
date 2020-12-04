let arr1 = [1, 2, 3, 4];
let arr2 = [10, 20, 30, 40];

//pop()--------------------------------------------------------

function clonePop(arr) {

    const lastIndex = arr.length - 1;
    
    const lastElementArr = arr[lastIndex];

    arr.length--;

    return lastElementArr;
}

// console.log(arr1, clonePop(arr1));

//push()--------------------------------------------------------

function clonePush(arr) {

    let lastIndex = arr.length;

    for (let i = 1; i < arguments.length; i++){

        arr[lastIndex] = arguments[i];

        lastIndex++;
    }

    return arr;
}

// console.log(clonePush(arr1, 5, 6));

//unshift()--------------------------------------------------------

function cloneUnshift(arr) {

    for (let i = 1; i < arguments.length; i++){
        arr = [arguments[i], ...arr];
    }

    return arr;
}

// console.log(cloneUnshift(arr1, 9, 8));

//shift()--------------------------------------------------------

function cloneShift(arr) {
    
    const firstElementArr = arr[0];

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i+1];
    }

    arr.length--;
    
    return firstElementArr;
}

// console.log(cloneShift(arr1), arr1);

//concat()--------------------------------------------------------

function cloneСoncat(arr) {

    for (let i = 1; i < arguments.length; i++){

        if (Array.isArray(arguments[i])) {
            arr = [...arr, ...arguments[i]];
        } else {
            arr = [...arr, arguments[i]];
        }
    }

    return arr;
}

// console.log(cloneСoncat(arr1, 5, 6, arr2));

//map() => reduce()--------------------------------------------------------

const newArr = ['Яблоко', 'Банан' ,'Ананас'].reduce((acc, currentValue, index, array) => {
    const lastIndex = array.length;

    array.push(currentValue[0]);
    array[index] = array[lastIndex];
    array.pop();

    return array;
}, '');

console.log(newArr);

//filter() => reduce()--------------------------------------------------------

const newArr2 = ['Яблоко', 'Анекдот', 'Банан' ,'Ананас', 'asdasd'].reduce((acc, currentValue, index, array) => {
    if (currentValue[0].toLowerCase() === 'a') {  
        return array;
    }

    array.splice(index, 1);

    return array;
}, '');

console.log(newArr2);

//forEach() => reduce()--------------------------------------------------------

const newArr3 = ['Яблоко', 'Банан', 'Ананас'].reduce((acc, currentValue, index, array) => {
    const lastIndex = array.length;

    currentValue = `${index + 1}: ${currentValue}`;
    
    array.push(currentValue);
    array[index] = array[lastIndex];
    array.pop();

    return array;
}, '');

console.log(newArr3);