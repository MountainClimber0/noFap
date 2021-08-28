const form = document.querySelector("form");

form.onsubmit = async (e) => {
  e.preventDefault();
  const name = inputs[0].value;
  const password = inputs[1].value;

  const user = {
    name,
    password,
  };

  console.log(user);

  const res = await fetch("http://localhost:3333/api/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(user),
  });

  if (res.status != 200) {
    console.log("Algo deu errado");
    return;
  }

  location.replace("login.html");
};
