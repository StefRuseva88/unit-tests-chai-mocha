export function sumNum(arr) {
    let sum = 0;
    for (let num of arr){
        sum += Number(num);
    }
    return sum;
}
//module.exports = { sum };  Export the function so it can be used in other modules
