const auth = localStorage.getItem("auth");

if (!auth) {
  window.location.replace("login.html");
}
