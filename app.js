const header = document.getElementById("header");
const ms = document.getElementById("models");
const m3 = document.getElementById("model3");
const mx = document.getElementById("modelx");
const my = document.getElementById("modely");
const model = document.getElementById("model");


ms.addEventListener('click',() => {
  header.style.backgroundImage = "url(../images/image-1.png)";
  model.innerHTML = "Model S";
})
// ms.onclick = function() {
//   header.style.backgroundImage = "url(../images/image-1.png)";
// }

m3.onclick = function() {
  header.style.backgroundImage = "url(../images/image-2.png)";
  model.innerHTML = "Model 3";
}

mx.onclick = function() {
  header.style.backgroundImage = "url(../images/image-3.png)";
  model.innerHTML = "Model X";
}

my.onclick = function() {
  header.style.backgroundImage = "url(../images/image-4.png)";
  model.innerHTML = "Model Y";
}