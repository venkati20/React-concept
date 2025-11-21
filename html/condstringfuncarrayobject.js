// for loop
// for(let i=1;i<=10;i++){
//     console.log(i)
// }
// forloop break
// for(i=1;i<=10;i++){
//     if(i==4){
//         break
//     }
//     else{
//        console.log(i) 
//     }
// }
//  forloop continue
//  for(i=1;i<=10;i++){
//     if(i==4){
//        continue
//     }
//     else{
//        console.log(i) 
//     }
// }

// while loop
// i=1
// while(i<=50){
//     console.log(i)
//     i++
// }
// //  while loop break
// i=1
// while(i<=5){
//     if(i==3){
//         break}
//         else{
//     console.log(i)
//     i++
//         }
// }

//  while loop continue
// i=1
// while(i<=5){
//     if(i==3){
//         console.log("while")
//          i++

//         continue}
//         else{
//     console.log(i)
//     i++
   
//         }
// }

// do while
// i=1
// do{
//     console.log(i)
//     i++
// }
// while(i<10)
//     // do while break
// i=1
// do{
//     if(i==4){
//         break
//     }
//     else{
//         console.log(i)
//         i++
//     }
// }
// while(i<10)

 // do while continue
// i=1
// do{
//     if(i==4){
//         console.log('while')
//         continue
//         i++
//     }
//     else{
//         console.log(i)
//         i++
//     }
// }
// while(i<10)


// string
// concentation
// let firstName="venkat"
// let lastName="reddy"
//  let ans=firstName+" "+lastName
//  console.log(ans)

// string literal
// let ame="venkat"
// let last="reddy"
// let woe=`${ame} ${last}`
// console.log(woe)

// length string

// let ame="venkat"
// let last="reddy"
// console.log(ame.length)

// touppercase

// let last="reddy"
// console.log(last.toUpperCase())

// tolowercase

// let last="REDDY"
// console.log(last.toLowerCase())


// substring

// let last="REDDY"
// console.log(last.substring(2))

// let last="REDDY"
// console.log(last.substring(2,4))

// split sentence

// let last="Reddy is good boy"
// console.log(last.split(" "))

// let last="Reddy \\ is\\ good \\boy"
// console.log(last.split("\\ "))

// join string
// let wer=["reddy","is","good"]
// console.log(wer.join(','))

// function 

// function sum(a,b){
//     let ans=a+b
//     console.log(ans)
// }
// sum(2,4)

// let exp=function(x,y){
//     let ans=x**y
//     console.log(ans)
// }
// exp(2,3)

// let exp=(x,y)=>{
//     let ans=x**y
//   console.log(ans)
// }
// exp(3,3)

// objects

// let obj={
//     name:"venkat",
//     age:24,
//     city:"bangalore",
//     greek:function(){
//         console.log("loreum5")

//     }
    
// }
// console.log(obj)
// obj.greek()

// array
// let arr=[4,3,5,2,1]
// console.log(arr)
// let brr=['love',1,true]
// console.log(typeof(brr))
// brr.push('reddy')
// brr.pop()
// brr.shift()
// brr.slice(1,2)
// brr.splice(1,2,'kanan')
// brr.unshift('velagala')
//  let ans=arr.map((array)=>{
//     return array*array

// })
// console.log(ans)

// let ans=arr.map((value)=>{
//     console.log(value+1)
// })
// console.log(ans)

// let ans=arr.map((number,index)=>
// {
//     console.log(number)
//     console.log(index)
// })

// let ans=arr.filter((number)=>{
//     if(number%2===0){
//         return true
// }
// else{
//     return false
// }})
// console.log(ans)

// let ans=arr.reduce((acc,curr)=>{
//     return acc+curr
// })
// console.log(ans)

// let ans=arr.sort()
// console.log(ans)

// let ans=arr.sort().reverse()
// console.log(ans)

// let ans=arr.indexOf(4)
// console.log(ans)

// forEach----

// let arr=[10,30,40,50]
// arr.forEach((value,index)=>{
//     console.log("number=",value,"index=",index)

// })
// console.log(arr.length)

// for(index=0;index<arr.length;index++){
//     console.log(arr[index])
// }

// forIn-----

// let obj={
//     name:"venkat",
//     age:24,
//     city:"bangalore"
// }
// for(let key in obj){
//     console.log(key," ",obj[key])
// }

// for of----

// let arr="venkat"
// for(let value of arr){
//     console.log(value)
// }