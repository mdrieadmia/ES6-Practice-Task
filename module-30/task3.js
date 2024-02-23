const sumOfSquared = (x) => {
    let squared = x.map((n) => n*n);
    let sum = squared.reduce((p, c) => p + c, 0)
    const result = (sum / squared.length)
    return result;
}

const number = sumOfSquared([2, 3, 5, 10]);
console.log(number);