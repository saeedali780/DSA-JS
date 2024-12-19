
// ====ARRAY TRAVERSING====
let data = [12,3,45,67,56,39];

// for(let i = 0; i<data.length; i++){
//     // console.log(data[i]);  
// }

// ====ARRAY ACCESING====
// let x = data[3];
// // console.log(x);


// ====ARRAY ELEMENT ACCESSING FROM INPOUT====

const btn = document.getElementById("btn");

function getElement() {
let el = document.getElementById("element").value;
parseInt(el)
if (el<data.length && el<=0) {
    console.log(data[el]);
    
}else{
    alert("enter valid value")
}

};

btn.addEventListener("click",getElement);

