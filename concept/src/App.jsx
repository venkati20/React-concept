// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Simple Addition</title>
//         <style>
//             body{
//                 font-family: Arial, sans-serif;
//                 margin: 50px;
//             }
//             input,button{
//                 padding: 8px;
//                 margin: 5px;
//             }
//             #result{
//                 font-weight: bold;
//                 margin-top: 10px;
//             }
//         </style>
//     </head>
//     <script src="second.js"></script>
// <body>
//     <h2>Add two Numbers</h2>
// <input type="number" id="num1" placeholder="Enter Number 1">
// <input type="number" id="num2" placeholder="Enter Number 2">
// <button onclick="add()">Add</button>
// <p id="result"></p>
// </body>
// </html>
 
// function add()
// {
//     const a=Number(document.getElementById('num1').value);
//     const b=Number(document.getElementById('num2').value);
//     document.getElementById('result').innerText=`Sum=${a+b}`;
// }

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//   <title>Task Manager</title>
//   <style>
//     body {
//         font-family: Arial;margin:30px;}
//         .completed{text-decoration: line-through;color:gray;}
//         li{ margin-bottom: 10px;}
//         button{ margin-left: 10px;}
   
//   </style>
//     </head>
//     <body>
// <h2> Task Manager</h2>
// <input type="text" id="taskInput" placeholder="Enter a new task"/>
// <button onclick="addTask()">Add Task</button>
// <ul id="taskList"></ul>
// <script src="third.js"></script>
//     </body>
// </html>


// function addTask()
// {
//     const taskText=document.getElementById("taskInput").value;
//     if(!taskText.trim()) return;
 
//     const li=document.createElement("l1");
//     const span=document.createElement("span");
//     const doneBtn=document.createElement("button");
//     const delBtn=document.createElement("button");
 
//     span.textContent=taskText;
//     doneBtn.textContent="Done";
//     delBtn.textContent="Delete";
//     li.appendChild(span);
//     li.appendChild(doneBtn);
//     li.appendChild(delBtn);
 
//     document.getElementById('taskList').appendChild(li);
//     document.getElementById('taskInput').value="";
 
//     doneBtn.addEventListener("click",()=>{
//         span.classList.toggle("completed");
//     });
//     delBtn.addEventListener("click",()=>{
//         li.remove();
//     });
// }


// 


// (function()
// {
//     console.log("App Initialised")
// })();
// let cart = [];
 
// function addItem(name, price) {
//     cart.push({
//         name,
//         price
//     });
//     updateCartUI();
// }
 
// function removeLastItem() {
//     if (cart.length > 0) {
//         cart.pop();
//         updateCartUI();
//     } else {
//         alert("Cart is already Empty!");
//     }
// }
 
// function clearCart() {
//     cart = [];
//     updateCartUI();
// }
 
// function updateCartUI() {
//     const list = document.getElementById("cartList");
//     const totalDisplay = document.getElementById("totalPrice");
 
//     list.innerHTML = "";
//     cart.forEach((item, index) => {
//         const li = document.createElement("li");
//         li.textContent = `${index+1}.${item.name}-Rs${item.price}`;
//        // li.setAttribute("data-name", item.name);
//        // li.classList.add("cart-item");
//         list.appendChild(li);
//     });
 
//     const total = cart.reduce((sum, item) => sum + item.price, 0);
//     totalDisplay.innerText = total;
// }
 
// function createEmailValidator()
// {
//     const emailRegex=/^[\w.-]+@[a-zA-Z]+\.[a-zA-Z]{2,$}/;
//     return function(email){
//         return emailRegex.test(email);
//     };
 
// }
 
// const validateEmail=createEmailValidator();
 
// function proceedToCheckOut(email,callBack){
//     document.getElementById("emailResult").innerText="Checking EMmail...";
//     setTimeout(()=>
//     {
//         if(callBack(email))
//         {
//             document.getElementById("emailResult").innerText="Email Verified! Proceeding to Payment...";
//         }
//         else{
//             document.getElementById("emailResult").innerText="Invalid Email Format"
//         }
   
//     },1000);
// }
// function validateAndCheckOut()
// {
//     const email=document.getElementById("emailInput").value;
//     proceedToCheckOut(email,validateEmail);
// }