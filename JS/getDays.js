let days = [];

window.onload = async () => {
  const response = await fetch(
    `https://nofap-api.herokuapp.com/api/calendar/${userName}`,
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
