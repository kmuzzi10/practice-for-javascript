//setInterval                                //it goes uncountable
//setTimeout                                    //it runs only one time
//clearInterval                                //setinterval set timeout ko rokdega

// var inter = setInterval(function(){
//     console.log('check')
// },1000)                                   //accept 2 parameter first function then time

// setTimeout(function(){
//     clearInterval(inter)
// },1000)



// function hello(){
//     console.log('hello')
// }
// setInterval(hello(),1000)

// setTimeout(function(){
//     console.log('set time chalgaya')
// },3000)


    var min = 0
    var sec = 0
    var msec = 0
    var getmin = document.getElementById('min')
    var getsec = document.getElementById('sec')
    var getmsec = document.getElementById('msec')

    // setInterval(function(){
    //     msec++
    //     getmsec.innerHTML = msec
    //     if(msec>=100){
    //         sec++
    //         getsec.innerHTML = sec
    //         msec = 0
    //     }
    //     else if(sec >= 6){
    //         min++
    //         getmin.innerHTML = min 
    //         sec = 0
    //     }
    // },10)
var inter;
 function started(){
    inter = setInterval(function(){
        msec++
        getmsec.innerHTML = msec
        if(msec>=100){
            sec++
            getsec.innerHTML = sec
            msec = 0
        }
        else if(sec >= 6){
            min++
            getmin.innerHTML = min 
            sec = 0
        }
    },10)
document.getElementById('abc').disable = true
}
function pause(){
    clearInterval(inter)
    document.getElementById('abc').disable = false
}
function reset(){
    min = 0
    sec = 0
    msec = 0
    getmin.innerHTML = min
    getmsec.innerHTML = sec
    getsec.innerHTML = msec
}

