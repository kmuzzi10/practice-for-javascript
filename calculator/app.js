function display(a){
    document.getElementById("inp").value+=a

}
function calculations(){
    var a = document.getElementById('inp').value
    var b = eval(a)
    document.getElementById('inp').value=b
}
function clr(){
    var a;
  a = document.getElementById('inp').value = '';
}
function del(){
    var a;
    a = document.getElementById('inp').value ;
    a.splice(0,1)
}