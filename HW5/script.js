function ipsBetween(firstIP, secondIP) {

    const arrFirstIP = firstIP.split('.').reduce((acc, value) => +acc * 256 + +value);

    const arrSecondIP = secondIP.split('.').reduce((acc, value) => +acc * 256 + +value);

    const result = Math.abs(arrFirstIP - arrSecondIP);

    return result;
}

console.log(ipsBetween("10.0.0.50", "10.0.0.0")); 
console.log(ipsBetween("10.0.0.0", "10.0.1.0")); 
console.log(ipsBetween("20.0.0.10", "20.0.1.0")); 
console.log(ipsBetween("20.1.0.10", "20.0.1.0")); 