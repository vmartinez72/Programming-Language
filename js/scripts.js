$(document).ready(function() {
   $(".clickable2").click(function() {
    $("#show").show();
    $("#hide").hide();
  });
    $(".clickable1").click(function() {
   $("#start").toggle();
   $("#end").toggle();
  });
});


//   $("backEnd").click(function(event) {
//     alert(start);
//     $("#backEndInfo").toggle();
//     $("#frontEndInfo").toggle();
//   });
//

//
// event.preventDefault();
// var answr1 = $("#challenge").val();
// var answr2 = $("tech").val();
// var answr3 = $("commuication").val();
// var answr4 = $("visual").val();
// var answr5 = $("break").val();
//
// if (answr1 === 1 && answr2 === 2 && answer 3 && answer === 5) {
//   $('#backEnd').show();
// } else {
//   $('#frontEnd').show();
// }
//
//
//  event.preventDefault()
