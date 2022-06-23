// Its best practice to use const (local)
function add (a,b)
{
    const result = a + b
    console.log(result)
}
add(1,2);

const adder = function(a,b)  // Anonymous function (no name) is sent to adder which acts as name
{
    const result = a + b
    console.log(result)
}
adder(3,4);

//Es6 arrow function
const sum = (a,b)  => {
    const result = a + b
    console.log(result)
}
sum(5,6);   




const greet = () => console.log('Hello')
greet();

const greet1 = (name) => console.log('Hello '+ name)
greet1('Ravi');

const greet2 = (name1,name2) => console.log('Hello '+ name1 + ' ' +name2)
greet2('Ravi','Chandra');


// It even allows this for 1 variable
const greet3 = name => console.log('Hello '+ name)
greet3('Ravi');