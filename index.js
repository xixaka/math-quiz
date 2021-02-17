

function nextpage() {
  var player1_name = document.getElementById("player1_name").value;
  localStorage.setItem("player1name", player1_name);
  var player2_name = document.getElementById("player2_name").value;
  localStorage.setItem("player2name", player2_name);
  console.log("!OMG THE LOCAL STORAGE HAS BEEN SET CHECK APPLICATION TO SEE IF IT WORKED OMG!");
}