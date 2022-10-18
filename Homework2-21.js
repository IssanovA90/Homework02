let numOne = +prompt()
let numTwo = +prompt()

function getNumbers(numOne, numTwo){
    if(numOne<numTwo){
        return -1
    }
    else if(numOne>numTwo){
        return 1
    }
    else{
        return 0
    }
}
alert(getNumbers(numOne, numTwo))
