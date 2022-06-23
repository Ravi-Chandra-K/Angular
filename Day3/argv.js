                // console.log(process.argv)

                // console.log( parseInt(process.argv[2]) + parseInt(process.argv[3]) )


console.log(process.argv)
const sum=0;
for (i=2; i<process.argv.length; i++)
{
    sum += parseInt(process.argv[i]);
}
console.log(sum)
