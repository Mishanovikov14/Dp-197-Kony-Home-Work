// Task 1

function bitCounter(number = 1) {

    let binaryNumber = number.toString(2);

    const binaryNumberArr = binaryNumber.split('');

    let counter = 0;

    binaryNumberArr.forEach((element) => {
        if (element === '1') counter++;   
    });

    console.log(counter);

    return counter;
}

bitCounter(1234);

// Task 2

function sortingString(string) {

    if (string === '') return console.log('');

    const stringArr = string.split(' ');

    let sortedString = stringArr.map((word) => {

        const wordNumber = word.match(/[1-9]/);

        if (wordNumber === null) return word;

        const arrIndex = +wordNumber[0];

        return stringArr[arrIndex - 1];
    });

    console.log(sortedString.join(' '));
}

sortingString('is2 Thi1s T4est 3a');
sortingString('4of Fo1r pe6ople g3ood th5e the2');
sortingString('');