const small = (event) => {
  event.preventDefault();
  const list = document.getElementById("element").classList;
  list.add("small");
};

const middle = (event) => {
  event.preventDefault();
  const list = document.getElementById("element").classList;
  list.add("middle");
};

const big = (event) => {
  event.preventDefault();
  const list = document.getElementById("element").classList;
  list.add("big");
};
