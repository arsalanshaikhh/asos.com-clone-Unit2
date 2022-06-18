let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
btn2.disabled;
btn3.disabled;
btn4.disabled;

function fun1() {
  let First = document.querySelector("#First").value;
  if (First.length < 1) {
    alert("Please Enter First Name");
  }
  let Last = document.querySelector("#Last").value;
  if (Last.length < 1) {
    alert("Please Enter Last Name");
  }
  let Mobile = document.querySelector("#Mobile").value;
  if (Mobile.length < 10 && Mobile.length < 10) {
    alert("Please Enter Correct Mobile Number");
  }
  let Address = document.querySelector("#Address").value;
  if (Address.length < 1) {
    alert("Please Enter Correct Address");
  }
  let City = document.querySelector("#City").value;
  if (City.length < 1) {
    alert("Please Enter City Name");
  }
  let Country = document.querySelector("#Country").value;
  if (Country.length < 1) {
    alert("Please Enter Country Name");
  }
  let Postcode = document.querySelector("#Postcode").value;
  if (Postcode.length < 6 && Postcode.length > 6) {
    alert("Please Enter Correct City");
  }

  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");
  let p5 = document.createElement("p");
  let p6 = document.createElement("p");
  let h1 = document.createElement("h1");

  h1.innerText = `DELIVERY ADDRESS`;
  p1.innerText = `${First} ${Last}`;
  p2.innerText = Address;
  p3.innerText = City;
  p4.innerText = Postcode;
  p5.innerText = Country;
  p6.innerText = Mobile;
  let box = document.querySelector(".box");
  box.innerHTML = "";
  box.append(h1, p1, p2, p3, p4, p5, p6);
  btn2.enable;
  btn2.style.color = "black";
  btn3.enable;
  btn3.style.color = "black";
  btn4.enable;
  btn4.style.backgroundColor = "green";
}

function fun2() {
  window.location.href = "payment.html";
}
