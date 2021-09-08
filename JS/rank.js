const table = document.querySelector("tbody");

window.onload = async () => {
  const response = await fetch("https://nofap-api.herokuapp.com/api/rank");
  const data = await response.json();

  data.forEach((user, index) => {
    if (index == 0) {
      const firstPlaceName = document.querySelector("#first-place .name");
      const firstPlaceScore = document.querySelector("#first-place .score");

      firstPlaceName.innerHTML = user.name;
      firstPlaceScore.innerHTML = `${user.total}pt`;
      return;
    } else if (index == 1) {
      const secondPlaceName = document.querySelector("#second-place .name");
      const secondPlaceScore = document.querySelector("#second-place .score");

      secondPlaceName.innerHTML = user.name;
      secondPlaceScore.innerHTML = `${user.total}pt`;
      return;
    } else if (index == 2) {
      const thirdPlaceName = document.querySelector("#third-place .name");
      const thirdPlaceScore = document.querySelector("#third-place .score");

      thirdPlaceName.innerHTML = user.name;
      thirdPlaceScore.innerHTML = `${user.total}pt`;
      return;
    }

    table.innerHTML += `<tr><td>${index + 1}</td><td>${user.name}</td><td>${
      user.total
    }</td></tr>`;
  });
};
