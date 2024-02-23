const findMax = (arr1, arr2) =>{
    const number = [...arr1, ...arr2]
    const max = Math.max(...number);
    return max;
}

const result = findMax([2, 5, 3], [7, 5, 8]);
console.log(result);
