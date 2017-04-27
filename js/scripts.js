$(function() {
  var height = parseInt(prompt("How tall are you in feet?"));

  if (height >= 5) {
    $(".over5").addClass("bg-success");
  } else if (height < 5) {
    $(".under5").addClass("bg-success");
  }
});
