//printing array with for loop

// var arr = ['muzzi', 78, 'khan']
// for (var i = 0; i < arr.length; i++)    //lenght start with num1   index start with 0
// {
//     document.write(arr[i],'-')
// }

//break and continue

// for(var i=0;i<=10;i++)            //break statement kay bad document.write nh chalasakty
// {
//     if(i==5)                       //break brokes value after
//     {                              //continue removes value which is to be break then continues
//         continue
//     }
//     document.write(i,"<br>")
// }

//nested loops

// var firstName = ['muzammil','ahmed','khan']
// var lastName = ['shakeel','shafiq']
// // for(var i =0;i<firstName.length;i++)
// // {
// // document.write(firstName[i],' ')
// // }

// for(var i =0;i<firstName.length;i++)
// {
// for(var j=0;j<lastName.length;j++)
// {
//     document.write(firstName[i] +lastName[j])
// }

// }
//task input country that match with array

// var countryName = ['pakistan','newzealand','england','india']
// var user = prompt("enter country name")
// var flag = false
// for(var i = 0;i<countryName.length;i++)
// {
// if(user===countryName[i])
// {
//     flag = true
//     document.write("country found")
//     break
   
// }
// }
// if(flag == false){
//     document.write("country not found")
// }


// var countryNAme="pakistan"
// var userInput = prompt('enter country name')
// var firstLetter = userInput.slice(0,1)
// var changetoUpper = firstLetter.toUpperCase()
// var remainingLetter = userInput.slice(1)
// var changetoLower = remainingLetter.toLowerCase()
// var final = changetoUpper+changetoLower
// console.log(final)
