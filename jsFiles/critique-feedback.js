var OS = ["OSer1", "OSer2", "OSer3"];
var SSD = ["SSDer1", "SSDer2", "SSDer3"];
var CN = ["CNer1", "CNer2"];
var SMAI = ["SMAIer1", "SMAIer2"];
var image = [1, 2, 3, 4, 5];
var singleValues = "";

//Clicking the submit button will ffetch the form data add it to variable fulltag
//and creates the form and places the form data inside the card block(appends)
$(document).ready(function() {
  $("#sub").click(function() {
    var name = $("input[name=first_name]").val();
    var subject = $("#Subject")
      .find(":selected")
      .val();
    var review = $("#comment").val();
    var professor = $("input[name='prof']:checked").val();
    // var rating = $('input[name=subjectrat]').val();
    var rating = $('input[name="subjectrat"]:checked').val();
    var fulltag =
      '<div class="card"><div class="scrolling-wrapper"><h5>' +
      name +
      "</h5><h3>" +
      subject +
      "</h3><pre>Prof - " +
      professor +
      "<br>Rating - " +
      rating +
      "<br>" +
      review +
      "</pre></div></div>";
    $(".myblock").append(fulltag);
  });
});

//On click dropdown from form this function will create radio button inputs and
//add professors according to Subject drop down
$(function() {
  $("#Subject").change(function() {
    if ($("#Subject").val() == "OS") {
      $("#result").empty(); //If I dont add empty() then each element from drop down is keep on appending
      $.each(OS, function(index, value) {
        $("#result").append(
          '<input type="radio" name="prof" value=' +
            value +
            ">" +
            value +
            "</input>"
        );
      });
    } else if ($("#Subject").val() == "SSD") {
      $("#result").empty();
      $.each(SSD, function(index, value) {
        $("#result").append(
          '<input type="radio" name="prof" value=' +
            value +
            ">" +
            value +
            "</input>"
        );
      });
    } else if ($("#Subject").val() == "CN") {
      $("#result").empty();
      $.each(CN, function(index, value) {
        $("#result").append(
          '<input type="radio" name="prof" value=' +
            value +
            ">" +
            value +
            "</input>"
        );
      });
    } else {
      $("#result").empty();
      $.each(SMAI, function(index, value) {
        $("#result").append(
          '<input type="radio" name="prof" value=' +
            value +
            ">" +
            value +
            "</input>"
        );
      });
    }
  });
  $.each(image, function(index, value) {
    $("#imge").append(
      '<input type="radio" name="subjectrat" value=' +
        value +
        ">" +
        value +
        " " +
        "</input>"
    );
  });
});

/*
      $("#sub").on("click",function(){
        $("#myblock").append("hello word")
          var crd_block = 'div class="card"><div class="scrolling-wrapper"> </div></div>'
          $("#myblock").append(crd_block)
        });


          $(document).ready(function(){
    $("#sub").click(function(){
        $(".myblock").append("<p>Test</p>");
    });
  });$("#onePic").empty();  imgloop()
*/
//post.html image looping and fade n and fadeout
var jpgs = ["jaipur1.jpg", "jaipur2.jpg","jaipur3.jpg"];
$(function imgloop() {
  $.each(jpgs,function(index,value){
    $("#onePic").append(
      '<img src="images/'+value+'" class="mainimg" alt="Hawa Mahal"/>'
    )
  })
});

$(function looper() {
  $("#onePic")
    .fadeIn(1000)
    .fadeOut(1000);
  looper();
});
