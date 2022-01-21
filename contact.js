$(document).ready(function(){
  

    
$("form").on("submit", function (e) {
    e.preventDefault();
    var name = $("#inputName").val();
    alert(
      "Hello" +
        " " +
        name +
        ",\nWe have received your message. " +
        "\nThank you for contacting us "
    );
    document.querySelector("form").reset();
  });
});
