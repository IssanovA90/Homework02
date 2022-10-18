let num = +prompt("5 разрядное число")
let num1 =  Math.floor(num / 10000)
let num2 = Math.floor(num / 1000) % 10
let num4 = Math.floor(num / 10) % 10
let num5 = Math.floor(num % 10)

if( num1 == num5 && num2 ==num4){
    alert("является палиндромом")
}
else{
    alert("не является палиндромом")
}