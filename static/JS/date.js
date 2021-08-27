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

// button faces
const msgBox = document.querySelector("#triangulo");
const btns = document.querySelectorAll(".colored-faces button");
const colors = [
  {
    color: "green",
    text: "Tá puro mlk",
  },
  {
    color: "yellow",
    text: "Faça da pedra de tropeço, um degrau de subida. Transforme cada fato negativo, em uma experiência positiva.",
  },
  {
    color: "blue",
    text: "ABANDONE OS ESTIMULOS ARTIFICIAIS!",
  },
  {
    color: "purple",
    text: "Lembre-se: O seu maior adversário é você mesmo!",
  },
  {
    color: "red",
    text: "Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez.",
  },
];
btns.forEach((btn, index) => {
  btn.onclick = () => {
    msgBox.className = colors[index].color;
    msgBox.innerHTML = colors[index].text;
    document.querySelector("#date").className = colors[index].color;
  };
});

