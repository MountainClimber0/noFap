const auth = localStorage.getItem("auth");

if (auth) {
  const url = window.location.hostname;
  window.location.replace("index.html");
}
