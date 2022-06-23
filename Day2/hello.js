function myfun()
{
    console.log(" I am in hello.js file")

    var a = 10;
    var b = 5;
    console.log(a-b);

    var a = 10;
    var b = '5';
    console.log(a-b);

    // + symbol is used to add, to concatenate too, magic operator


    var user = {
        fname: 'Ravi',
        lname: 'Chandra',
        phone: 38819891830,
        tell: function(input) {console.log('Happy Bday '+this.fname + input)}
    }
    console.log(user);
    console.log(user.phone);

    console.log(user.tell(2));

}

myfun();