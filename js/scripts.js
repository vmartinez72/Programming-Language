$(document).ready(function() {
  $(".backEnd").click(function() {
    $("#backEndInfo").toggle();
    $("#frontEndInfo").toggle();
  });

  $(".frontkEnd").click(function() {
    $("#showFrontInfo").show();
    $("#hideFrontInfo").hide();
  });
});

event.preventDefault()
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
