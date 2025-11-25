// bubbling

// document.querySelector("#grandparent")
//     .addEventListener("click",()=>{
//         console.log("grandparentclick")
//     },true)
//  document.querySelector("#parent")
//     .addEventListener("click",()=>{
//         console.log("parentclick")
//     },true) 
//  document.querySelector("#child")
//     .addEventListener("click",()=>{
//         console.log("childclick")
//     },true)     

// capturing
// document.querySelector("#grandparent")
//     .addEventListener("click",()=>{
//         console.log("grandparentclick")
//     },true)
//  document.querySelector("#parent")
//     .addEventListener("click",()=>{
//         console.log("parentclick")
//     },true) 
//  document.querySelector("#child")
//     .addEventListener("click",()=>{
//         console.log("childclick")
//     },true)     

    // stoppropogation using bubbling

//     document.querySelector("#grandparent")
//     .addEventListener("click",()=>{
//         console.log("grandparentclick")
//     },false)
//  document.querySelector("#parent")
//     .addEventListener("click",(e)=>{
//         console.log("parentclick")        
//     },false) 
//  document.querySelector("#child")
//     .addEventListener("click",(e)=>{
//         console.log("childclick")
//         e.stopPropagation()
//     },false)  
    
    
    // stoppropogation using capturing

    document.querySelector("#grandparent")
    .addEventListener("click",(e)=>{
        console.log("grandparentclick")
        e.stopPropagation()
    },true)
 document.querySelector("#parent")
    .addEventListener("click",(e)=>{
        console.log("parentclick")        
    },true) 
 document.querySelector("#child")
    .addEventListener("click",(e)=>{
        console.log("childclick")
        
    },true)     

