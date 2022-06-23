                // let a = 3;
                // let b = a;
                // b = 9
                // Math.sqrt(b)  // This statement wont change the value of b
                // // b = Math.sqrt(b) // This will
                // console.log(a,b)

    // let p = [1,2,3,4]
    // let q = p // Mutating the original array
    // q.push(5)
    // console.log(p,q)

                // let x = [1,2,3,4]
                // let y = p
                // y = [1,2,3,4,5,6]
                // console.log(x,y)

                // //In js, numbers + strings + enum....are  called primitive variables
                // //objects + arrays ..... are reference variables


    // //SPREAD OPERATOR - Used in es6
    // let list1 = [1,2,2,3,3,3]
    // let list2 = [...list1] 

    // list2.push(1)
    // console.log(list2)

                // //SPREAD OPERATOR - Used in es6
                // let list1 = [1,2,2,3,3,3]
                // let list2 = [...list1] 

                // list2.pop()
                // console.log(list2,list1)

    //SPREAD OPERATOR - Used in es6
    let list3 = [1,2,3]
    let list4 = [4,5,6]

    let list5 = [...list3,11,22, ...list4]  //spread operator (es6), any number of arrays can be appended
    let list6 = list3.concat(list4); // es5 - can join only 2 arays at a time

    console.log(list5,list6)
    
    