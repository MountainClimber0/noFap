const btnConfirm = document.querySelector(".confirm");
const form = document.querySelector("form");

const day = {
  color: "",
};

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

form.onsubmit = (e) => e.preventDefault();

btns.forEach((btn, index) => {
  btn.onclick = () => {
    msgBox.className = colors[index].color;
    msgBox.innerHTML = `<p>${colors[index].text}</p>`;

    day.color = colors[index].color;
    day.date = date.getDate();
  };
});

btnConfirm.onclick = async () => {
  const request = {
    name: userName,
    day,
  };

  const response = await fetch("https://nofap-api.herokuapp.com/api/day", {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (response.status != 200) {
    return;
  }

  document.querySelector("#date").className = day.color;
  console.log(await response.json());
};
