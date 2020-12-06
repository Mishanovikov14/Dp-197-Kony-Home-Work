//Task 1 -----------------------------------------------------

function sortingInvitedFriends(string) {

    string = string.toUpperCase();

    let arrInv = string.split(';');

    arrInv = arrInv.map(element => element.split(':'));

    arrInv = arrInv.map(element => [element[0], element[1]] = [element[1], element[0]]);

    arrInv = arrInv.map(element => element.join(', '));

    arrInv.sort();

    string = '';

    for (let i = 0; i < arrInv.length; i++) {
        if ( i === arrInv.length - 1) {
            string += `(${arrInv[i]})`;
            break;
        }
        string += `(${arrInv[i]}) `;
    }

    return string;
}

const s = 'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill';

console.log(sortingInvitedFriends(s));

//Task 2------------------------------------------------------

function searchingCheirs(initialArr, need) {
    let nChair = 0;

    let arrCheirs = initialArr.map(element => {
        let cheirs = element[1] - element[0].length;

        if (cheirs < 0) return 0;

        return cheirs;
    });

    for ( let value of arrCheirs) {
        if (nChair === need || nChair > need) {
            nChair = need
            break;
        }
        nChair += value;
    }

    const result = (nChair === need) ? 'Game on' : 'Not enogh';

    return result;
}

console.log(searchingCheirs([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0));

//Task 3 -----------------------------------------------------

function findSmallestDistance(arr) {

    const arr2 = arr.map(element => {
        element = element[1]
        return element; 
    })

    const arr1 = arr.map(element => {
        element = element[0]
        return element; 
    })

    let distance = [];
    for (let i = 0; i < arr.length; i++) {
        let distanceI = [];

        for (let j = 0; j < arr.length; j++) {
            if (arr1[i] === arr1[j]) {

                let res = arr2[i] - arr2[j];
                res = Math.abs(res);

                distanceI.push(res);
            } else {
                let a = arr2[i] - arr2[j];
                a = Math.abs(a);

                let b = arr1[i] - arr1[j];
                b = Math.abs(b);

                let res = (a ** 2) + (b ** 2);
                res = Math.sqrt(res);

                distanceI.push(res);
            }
        }

        distance.push(distanceI);
    }

    distance = distance.map(element => element.sort((a,b) => a - b));

    const resDistance = distance.map(element => element[1]);

    const index1 = resDistance.findIndex(element => element === Math.min.apply(null, resDistance));

    resDistance.reverse();

    const index2 = arr.length - 1 - resDistance.findIndex(element => element === Math.min.apply(null, resDistance));

    return [arr[index1], arr[index2]]; 
}
 
console.log(findSmallestDistance([[2,2], [2,8], [5,5], [6,3], [6,7], [7,4], [7,9], [6,6]]));