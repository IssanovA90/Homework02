let rounding = +prompt('rounding')
let perimeter = +prompt('perimeter')

if((rounding / 3,14) > (perimeter / 4 * 14.14)){
    alert("Круг поместиться")
}
else if((rounding / 3,14) < (perimeter / 4 * 14.14)){
    alert("Круг не поместиться")
}
else{
    alert('Error')
}

