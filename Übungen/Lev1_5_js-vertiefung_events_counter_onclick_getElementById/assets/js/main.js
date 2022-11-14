const btn = document.getElementById("clickMe");
let count = 0;

// Variante 1:
btn.onclick = function () {
  count += 1;
  btn.innerHTML = `Click me: ${count}`;
};

// Variante 2:
btn.addEventListener("click", () => {
  count += 1;
  btn.innerHTML = `Click me: ${count}`;
});
