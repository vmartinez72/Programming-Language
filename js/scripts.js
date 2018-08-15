$(document).ready(function() {
  $(".clickable2").click(function() {
  // event.preventDefault();
    $("#show").toggle();
    $("#hide").toggle();
  });
  $(".clickable1").click(function() {
    $("#start").toggle();
    $("#end").toggle();
   });
  });

  $(".form-group").submit(funtion(event) {
    alert("Great job!")

    var answer = $(parseInt("1")).val();
    var answer = $(parseInt("2")).val();
    var answer = $(parseInt("3")).val();


    if (answer >= '3') {
      $("#greatJob").show();
      $("#greatJob1").hide();
    } else {
       $("thankyou!").show();
       $("thankyou!1").hide();
    }
  });
