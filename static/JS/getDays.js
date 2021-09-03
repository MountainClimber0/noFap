let days = undefined;

window.onload = async () => {
  const response = await fetch(
    `http://localhost:3333/api/calendar/${userName}`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status != 200) {
    return;
  }

  days = await response.json();
  renderCalendar();
};
