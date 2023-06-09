let block1 = document.querySelector("#block-1");
let line1 = document.querySelectorAll(".line-1");
// let line2 = document.querySelectorAll(".line-2");
// let line3 = document.querySelectorAll(".line-3");
// let line4 = document.querySelectorAll(".line-4");
let line5 = document.querySelectorAll(".line-5");
// let line6 = document.querySelectorAll(".line-6");
let nums = document.querySelectorAll(".num");

for (let elem of nums) {
  elem.addEventListener("click", (e) => {
    block1.innerText += elem.innerText;
  });
}

let [line11, line12, line13, line14] = line1;

line11.addEventListener("click", (e) => {
  let str = block1.innerText;
  let arr1 = str.split("");
  arr1.pop();
  block1.innerText = arr1.join("");
});

line13.addEventListener("click", () => {
  block1.style.backgroundColor = "#62b195";
});

line13.addEventListener("click", () => {
  block1.innerText = null;
});

line14.addEventListener("click", () => {
  block1.style.backgroundColor = "black";
});
line14.addEventListener("click", () => {
  block1.innerText = null;
});

let [line51, line52, line53, line54] = line5;

line53.addEventListener("click", (e) => {
  let arr = block1.innerText;
  for (let elem of arr) {
    if (elem === "+") {
      let res1 = arr.split("+");
      block1.innerText = parseFloat(res1[0]) + parseFloat(res1[1]);
    } else if (elem === "-") {
      let res2 = arr.split("-");
      block1.innerText = parseFloat(res2[0]) - parseFloat(res2[1]);
    } else if (elem === "*") {
      let res3 = arr.split("*");
      block1.innerText = parseFloat(res3[0]) * parseFloat(res3[1]);
    } else if (elem === "*") {
      let res4 = arr.split("*");
      block1.innerText = parseFloat(res4[0]) * parseFloat(res4[1]);
    }
  }
});
