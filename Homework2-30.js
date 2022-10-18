let second = +prompt('Haw many second?')

hourse = second / 3600
remainder = second % 3600
minute = remainder / 60 
remainderSecond = remainder % 60


alert(Math.floor(hourse) + `:` + Math.floor(minute) + `:` + remainderSecond)
