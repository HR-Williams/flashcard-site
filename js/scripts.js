$(document).ready(function() {
  $("div.card .term").click(function(){
    $(this).next().fadeToggle("hidden");
  });
});