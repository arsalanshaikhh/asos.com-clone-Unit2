// let fun2 = document.querySelector("btn2").addEventListener("click", abc);
// let button1 = (document.querySelector("btn1").disabled = true);
// console.log(button1);
let x = document.getElementById("btn2");
x.disabled;

let paymentArr = JSON.parse(localStorage.getItem("paymentData")) || [];
function fun2() {
  console.log("vvv");
  let x = document.querySelector("body");
  x.innerHTML = "";
  //   let div = document.createElement("div");
  let y = document.createElement("img");
  y.setAttribute("id", "gif");
  y.setAttribute(
    "src",
    "https://cdn.dribbble.com/users/3475837/screenshots/11442860/media/8d53857df0ecda3b496bed2d012cbfd9.gif"
  );
  x.append(y);
}
function fun() {
  let cardNumber = document.querySelector("#cardNumber").value;
  //   console.log("cardNumber");

  if (cardNumber.length != 16) {
    alert("Please Enter Correct Credit/Debit Card Number");
  }
  let date = document.querySelector("#date").value;
  if (date.length < 1) {
    alert("Please Enter Expiry Date");
  }
  let name = document.querySelector("#name").value;
  if (name.length < 1) {
    alert("Please Enter Name");
  }
  let cvv = document.querySelector("#cvv").value;
  if (cvv.length != 3) {
    alert("Please Enter Correct Cvv");
  }
  let check = document.querySelector("#check").checked;

  let obj = {
    cardNumber: cardNumber,
    date: date,
    name: name,
    cvv: cvv,
  };
  if (check == true) {
    paymentArr.push(obj);
    localStorage.setItem("paymentData", JSON.stringify(paymentArr));
  }
  x.enable;
  x.style.backgroundColor = "green";
}
