/*// indexOf
var arr = ['saad','muzammil','hasim','khan','hammad','lol','saad']
var arr2 =arr.indexOf('saad')                            //second parameter is optional you give parameter when you start your array
console.log(arr2)                                         //it searh value from start

//lastIndesxOf
var arr3 = arr.lastIndexOf('saad')                       //it search value from last
console.log(arr3)



//charAt
var naam = 'ali'
console.log(naam.charAt(2))                           //it does not support in indexof and last index of
*/

//replace                                 it replace value 
// var text = 'hello world hello'
// var newText = text.replace(/hello/g,'muzammil')            //g represent to global

// console.log(newText)

//rounding number

// var num = 72.3
// var newNum3 = Math.floor(num)
// var newNUm1 = Math.ceil(num)          //it do number greater
// var newNum = Math.round(num)         //it round number
// console.log(newNum)
// console.log(newNUm1)
// console.log(newNum3)


//random number
// var num = Math.random() * 2        //* give limit of number
// console.log(num)

// var pak = prompt('enter your side')
// var ind = prompt('enter your side')
// var toss = Math.random()*2
// var fix = Math.floor(toss)
// if(fix==0){
//     document.write(pak+'win the toss')
// }
// else{
//     document.write(ind+'win the toss')
// }


function abc(a){                               //eval do sum mul div sub
    document.getElementById('inp').value += a
}
function equal(){
    var a= document.getElementById('inp').value
    var b = eval(a)
    var n = a=b 
    document.getElementById('inp').value=n;
}
function clr(){
    var a = document.getElementById('inp').value = '';
}
function del(){
    var a = document.getElementById('inp').value
    a.pop()
    docu

}