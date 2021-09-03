const date = new Date();
const diaDoMes = date.getDate();
const months = [
  "jan",
  "fev",
  "mar",
  "abr",
  "maio",
  "jun",
  "jul",
  "ago",
  "set",
  "out",
  "nov",
  "dez",
];

document.querySelector(".dia").innerHTML = `${diaDoMes} ${
  months[date.getMonth()]
}`;