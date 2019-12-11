
// Background color change on scroll down
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });


  //Modal clear button
  $(".clear").bind("click", function() {
  $("input[type=text], input[type=email], input[type=email]").val("");
  $("#course").val("");
});