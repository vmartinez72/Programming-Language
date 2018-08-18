$(document).ready(function() {
 $(".form-group").submit(function(event) {
   event.preventDefault();
  $(".clickable2").click(function() {
    $("#show").toggle();
    $("#hide").toggle();
     console.log(".clickabkle2")
  });
  $(".clickable1").click(function() {
    $("#start").toggle();
    $("#end").toggle();
     console.log(".clickabkle1")
  });


alert("start");
 var answer1 = $("challenge")).val();
 var answer2 = $("tech")).val();
 var answer3 = $("communication")).val();
 var answer4 = $("visual")).val();
 var answer5 = $("break")).val();
alert("end");


  if (answer1 >= 3 || answer2 >=  3  || answer3 3 || answer4 >=  3 || answer5 >= 3) {
    $("#result").show();
    $("#notgoodresult").hide();
   }
   else {
    $("thankyou!").show();
    $("thankyou!1").hide();
   }
 });
});
