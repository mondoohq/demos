function do_something(e) {
  for (var t = "", n = e.length - 1; n >= 0; n--) t += e[n];
  return t;
}
setTimeout(function () {
  do_elsesomething("XX");
}, 300);
function do_elsesomething(e) {
  document.getElementById("token").value = do_something(
    e + document.getElementById("phrase").value + "XX"
  );
}
