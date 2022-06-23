console.log(process.argv);

const numbers = process.argv;
const integers = numbers.map(n => parseInt(n)); // Aumatically taking all into a map of int

console.log(integers)


let sum = 0;
integers.forEach((n, index) => {
    //console.log(index)
    if(index>1)
    {
        sum += n;
    }
});
console.log(sum);