//concat()-------------------------------------------------------------------------------------------------------

function cloneConcat(initialString, stringsArr) {

    for (let i = 0; i < stringsArr.length; i++) {
        initialString += stringsArr[i];
    }

    return initialString;
}

//lastIndexOf()-------------------------------------------------------------------------------------------------------

function cloneLastIndexOf(initialString, searchingString, startFrom = initialString.length) {

    let include = cloneIncludes(initialString, searchingString);
    let resSearch = '';

    if (!include) return -1; 
    if (startFrom < 0) startFrom = 0 - startFrom;
    if (startFrom > initialString.length) startFrom = initialString.length;

    for ( startFrom; startFrom > -1; startFrom--) {
        if (searchingString.length > 1 && initialString[startFrom] === searchingString[0]) {

            let i = startFrom;
            let j = i + searchingString.length;

            for (i; i < j; i++) {
                resSearch += initialString[i];
            }

            if (resSearch === searchingString) return startFrom;

        } else {
            if (initialString[startFrom] === searchingString[0]) return startFrom;
        }
    }
}

//includes()-------------------------------------------------------------------------------------------------------

function cloneIncludes(initialString, searchingString, startFrom = 0) {

    let resString = '';
    let i = 0;

    for ( startFrom; startFrom < initialString.length; startFrom++) {
        if (initialString[startFrom] === searchingString[i]) {
            resString += initialString[startFrom];
            i++;
        }
    }
    
    const result = resString === searchingString ? true : false;

    return result;
}

//repeat()-------------------------------------------------------------------------------------------------------

function cloneRepeat(initialString, repeatNumber) {

    repeatNumber = Math.round(repeatNumber);

    if (repeatNumber === 0) return '""';

    if (repeatNumber < 0 || repeatNumber === Infinity) return 'Rangeerror';
 
    const startOfInitialString = initialString;

    for (let i = 1; i < repeatNumber; i++) {
        initialString += startOfInitialString;
    }

    return initialString;
}

//substr()-------------------------------------------------------------------------------------------------------

function cloneSubstr(initialString, startFrom = 0, charNumber = initialString.length) {

    let resString = '';

    if (startFrom < 0 && Math.abs(startFrom) > initialString.length) startFrom = 0;
    if (startFrom < 0) startFrom = initialString.length + startFrom;
    if (charNumber !== initialString.length) charNumber = startFrom + charNumber;
    if (charNumber <=0) return '""';

    for ( startFrom; startFrom < charNumber; startFrom++) {
        resString += initialString[startFrom];
    }

    return resString;
}

//substring-------------------------------------------------------------------------------------------------------

function cloneSubstring(initialString, startFrom = 0, stop = initialString.length) {

    let resString = '';
    
    if (startFrom === stop) return '""';
    if (startFrom > stop) {
        let start = startFrom;
        let stopForBeginStart = stop;
        startFrom = stopForBeginStart;
        stop = start;
    }
    if (startFrom <= 0 || startFrom === NaN) startFrom = 0;
    if (startFrom > initialString.length) startFrom = initialString.length;
    if (stop <= 0 || stop === NaN) stop = 0;
    if (stop > initialString.length) stop = initialString.length;

    for ( startFrom; startFrom < stop - 1; startFrom++) {
        resString += initialString[startFrom];
    }

    return resString;
}
