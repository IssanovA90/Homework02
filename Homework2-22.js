let num  = +prompt()
function getFactorial(num){
    if(num === 1 ){
        return 1
    }
    else{
        return num * getFactorial(num -1)
         
    }
}
alert(getFactorial(num))


