$(function() {
  var height = parseInt(prompt("How tall are you in feet?"));

  if (height >= 5) {
    $("#over5").show();
  } else if (height < 5) {
    $("#under5").show();
  }
});
