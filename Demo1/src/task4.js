function palindrome(number) {   
    if ((number >= 0 && number < 10) || (number > -10 && number <= 0)) {
        return {status: 'Failed', reason:'Modul of argument must be bigger then 9'};
    } 

    const string = number.toString();
    let revStr = string.split('').reverse().join('');

    if (revStr === string) return +string;
    
    let strLength = string.length;

    for (let i = 0; i < string.length; i++) {
        for (let j = 1; j < strLength; j++) {
            let newStr = string.slice(i, j + i + 1);
            let newRevStr = newStr.split('').reverse().join('');

            if (newStr === newRevStr) return +newStr;
        }

        strLength--;
    }

    return 0;
}

export function task4() {
    console.clear();
    const inpName = document.querySelector('.inp--task4');
    
    if (inpName.value === "") return document.querySelector('.answer--task4').textContent = 'Inputs must contain value';
    
    const num = inpName.value;

    if (isNaN(+num)) return document.querySelector('.answer--task4').textContent = 'Input must contain a number';

    console.log(palindrome(num));
    
    inpName.value = '';

    document.querySelector('.answer--task4').textContent = 'The result is in the console';
}