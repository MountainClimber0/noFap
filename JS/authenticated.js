const userName = localStorage.getItem("auth");

if (!userName) {
  window.location.replace("login.html");
}
