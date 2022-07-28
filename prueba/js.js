let test = document.getElementById("example");
let prueba = document.getElementById("prueba")


test.addEventListener("mouseover", function (event) {
  //highlight the mouseover target
  prueba.style.visibility = "hidden";
}, false);

test.addEventListener("mouseout", function (event) {
  // highlight the mouseout target
  prueba.style.visibility = "visible";
}, false);