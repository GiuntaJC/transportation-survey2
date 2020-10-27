$(document).ready(function() {
  $("form#transportation-survey").submit(function(event) {
    $("input:checkbox[name=work-transportation]:checked").each(function() {
      const workTransportationMode = $(this).val();
      $("#work-responses").append("<li>" + workTransportationMode + "</li>")
    });
    $("input:checkbox[name=other-transportation]:checked").each(function() {
      const otherTransportationMode = $(this).val();
      $("#other-responses").append("<li>" + otherTransportationMode + "</li>")
    });
    $("#responses").show();
    $("#transportation-survey").hide();
    event.preventDefault();
  });
});