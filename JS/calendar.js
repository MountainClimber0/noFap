function renderCalendar() {
  const monthDays = document.querySelector(".days");
  const date = new Date();

  const option = {
    year: "numeric",
    month: "long",
    weekday: "long",
    day: "numeric",
  };

  // Title

  const currentDate = date.toLocaleDateString("pt-br", option);

  document.querySelector(".date p").innerHTML =
    currentDate[0].toUpperCase() + currentDate.slice(1);

  // Calendar
  const currDate = date.getDate();
  const firstDate = date;
  firstDate.setDate(1);
  const firstDateIndex = firstDate.getDay();
  const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const lastDay = lastDate.getDate();
  const lastDayIndex = lastDate.getDay();
  const previousLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  for (let x = firstDateIndex; x > 0; x--) {
    monthDays.innerHTML += `<div class="previous-date">${
      previousLastDay - x + 1
    }</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    let day = document.createElement("div");
    day.innerHTML = String(i);

    let dayGetted = days.find((element) => element.date == i);

    if (dayGetted) {
      day.classList.add(`${dayGetted.color}-day`);
    }

    if (i === currDate) {
      day.classList.add(`current-day`);
    }

    monthDays.appendChild(day);
  }

  for (let j = 1; j < 7 - lastDayIndex; j++) {
    monthDays.innerHTML += `<div class="previous-date">${j}</div>`;
  }
}
