
// setInterval(()=> console.log('hello'),1000) //seconds in ms


const greet = name => {console.log('Hello ' + name)} // Direct wishing
// To wish after 3 sec , after 3 sec.....
//const greet = name => setInterval(() => console.log('Hello ' + name), 2000);
 

const doublegreet= (name1, name2) => {
    name2(name1);
    console.log(name1);
}

doublegreet('Ravi', greet) // greet should be without quotes as it is a function type
//As Ravi is a string to be passed (so with quotes)