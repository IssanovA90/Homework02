let number = +prompt('Введите трехзначное число')
let num1 =  Math.floor(number / 100)
let num2 = Math.floor(number /10)%10
let num3 = Math.floor(number % 10)

if(num1 == num2 || num2 == num3 || num1 == num3){
        alert('Найдено совпадение цифр');
    }
    else{
        alert('Совпадений не найдено');
    }