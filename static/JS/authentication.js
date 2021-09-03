const userName = localStorage.getItem("auth");

if (userName) {
  window.location.replace("currDay.html");
}
