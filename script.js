window.onload = initDate();

function initDate() {
  var now = new Date();
  now.getDate();
document.getelementbyId("date").innerHTML= now;
var now = new Date();
now.setDate(now.getDate());
document.getelementbyId("date").innerHTML = now.getDate();
}
