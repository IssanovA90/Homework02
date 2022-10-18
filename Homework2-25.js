// let n = prompt('введите начальное число диапозона', '0');
// let k = prompt('введите конечное число диапозона', '0' );
// let a = [];


// while (n <= k) {
//     a.push(n++);
// }
// console.log('Числа заданного диапозона: ' + a);

// function arraySum(arr, elm) {
//     arr = arr.slice(0);   
//     for(var sum = 0, a; a = arr.pop();) 
//     sum += !elm || elm=="четное" && !(a & 1) || elm== "нечетное" && a & 1 ? a : 0; 
//     return sum
// }
// console.log("Сумма всех чисел: ", arraySum(a)); //сумма всех чисел
// console.log("Сумма четных чисел: ",  arraySum(a, 'четное')); //сумма четных чисел
// console.log("Сумма нечетных чисел: ",arraySum(a, 'нечетное')); //сумма нечетных чисел


function insertNodeAtTail(head,data){
  let node = head
  while(node.next){
    node = node.next
  }
  let newNode = new SinglyLinkedListNode(data)
  node.

}
function main()