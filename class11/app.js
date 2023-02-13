//dom document object model in 

// console.log(document.childNodes[1].childNodes[0],childNodes[0])     //childnode works like an array
// var a = document.getElementById('abc')
// console.log(a.firstChild)
// function foo(){
//     var a = document.getElementById('inp').setAttribute('class','abc') //hasattribute attribute getattribuite setattribuite
    
//     console.log(a)
// }

// function foo(){
//     var a = document.getElementById('abc').value //inp field me hamesha .value lagega
//     var b = document.getElementById('para').innerHTML = a;

    
// }

// function foo(){
//     var a = document.createElement('li')
//     var b = document.createTextNode('hello world')
//     a.appendChild(b)
//     console.log(a)
// }
var a = document.getElementById('para')

function addTodo(){
var inp = document.getElementById('inp').value
var createLi = document.createElement('li')
var text = document.createTextNode(inp)
createLi.appendChild(text)
a.appendChild(createLi)
}