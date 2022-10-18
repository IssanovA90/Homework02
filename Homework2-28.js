let hours = +prompt('Напиши часы')
let minute = +prompt('Напиши минуты')
let second = +prompt('Напиши секунды')

if (minute == ""){
    alert(`${hours}` + `:` + "00" + `:` + `${second}` )
}
else if(second == ''){
    alert(`${hours}` + `:` + `${minute}` + `:` + "00")

}
else if(minute == "" && second == ""){
    alert(`${hours}` + `:` + '00' + `:` + '00')

   }
else{
    console.log('error');
    
}







