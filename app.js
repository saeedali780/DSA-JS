// ====ARRAY TRAVERSING====
// let data = [12,3,45,67,56,39];

// for(let i = 0; i<data.length; i++){
//     // console.log(data[i]);
// }

// ====ARRAY ACCESING====
// let x = data[3];
// // console.log(x);

// ====ARRAY ELEMENT ACCESSING FROM INPUT====

// const btn = document.getElementById("btn");

// function getElement() {
// let el = document.getElementById("element").value;
// parseInt(el)
// if (el<data.length && el<=0) {
//     console.log(data[el]);

// }else{
//     alert("enter valid value")
// }

// };

// btn.addEventListener("click",getElement);

// ====INSERT ELEMENT IN AN ARRAY====

// let data = [25,33,11,44,10,34,66,23];
// let newEl = 222;
// let posistion = 9;
// for(let i = data.length - 1; i>=0; i--){
// console.log(data[i]);
// if (i>=posistion) {
//     data[i+1] =data[i];
//     if (i==posistion) {
//         data[i] = newEl;
//     }
// }
// }
// const insertBtn = document.getElementById("insertBtn");
// const insertElement=()=>{
// let data = [25,33,11,44,10,34,66,23];
// console.log(data);

// let newEl = document.getElementById("newElement").value;
// newEl = parseInt(newEl)
// let position = document.getElementById("position").value;
// position = parseInt(position)
// for(let i = data.length - 1; i>=0; i--){

// if (i>=position) {
//     data[i+1] =data[i];
//     if (i==position) {
//         data[i] = newEl;
//     }
// }
// }
// console.log(data);

// }

// insertBtn.addEventListener("click",insertElement)


//====INSERT ELEMENT FUNCTION====
// function insertElement(data, newElement, posistion) {
//   if (posistion < 0 || posistion > data.length) {
//     return "Invalid position! Position must be between 0 and " + data.length;
//   }
//   for (let i = data.length - 1; i >= 0; i--) {
//     console.log(data[i]);
//     if (i >= posistion) {
//       data[i + 1] = data[i];
//       if (i == posistion) {
//         data[i] = newElement;
//       }
//     }
//   }
//   return data;
// }

// let arr = [10, 20, 30, 40, 50, 60];

// let updatedArray = insertElement(arr,5,0)
// console.log(updatedArray);
