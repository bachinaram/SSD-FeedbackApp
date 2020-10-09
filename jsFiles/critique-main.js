//Fade in fadeout function in home page to display and off the
//thumps and thumps down images and it loops the function
$(document).ready(function looper() {
  $("#picOne")
    .fadeIn(200)
    .fadeOut(200);
  $("#picTwo")
    .fadeIn(200)
    .fadeOut(200);
  looper();
});
