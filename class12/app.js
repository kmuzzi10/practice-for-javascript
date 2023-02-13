var ul = document.getElementById('ul')





function addTodo(){
var inp = document.getElementById('inp')
var li = document.createElement('li')
var liText = document.createTextNode(inp.value)
  li.appendChild(liText)
ul.appendChild(li)

 
//del
var del = document.createElement('button')
var delText = document.createTextNode('Delete')
del.appendChild(delText)
li.appendChild(del)

//edit
var edit = document.createElement('button')
var editText = document.createTextNode('edit')
edit.appendChild(editText)
li.appendChild(edit)

del.setAttribute('onclick','del(this)')
edit.setAttribute('onclick','edit(this)')

}
function del(e){
    //.remove delete element
    // e.remove()
    e.parentNode.remove()


}
function edit(e){
//node value return value of node
var a = prompt('enter new value',e.parentNode.childNodes[0].nodeValue)
e.parentNode.childNodes[0].nodeValue = a
}
function delall(){
   ul.innerHTML = ''
}