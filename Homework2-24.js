let oneSum = +prompt()
let twoSum = +prompt()

function getSumma(oneSum, twoSum){
    if(oneSum != twoSum){
        alert(oneSum * twoSum)
    }
    else if(oneSum == twoSum){
        alert(oneSum * oneSum)
    }
    else{
        alert('error')
    }
    
}
getSumma(oneSum, twoSum)
