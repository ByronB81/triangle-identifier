$(document).ready(function(){
    $("#blanks form").submit(function(event) {
      var angle1 = parseInt($("input#angle1").val());
      var angle2 = parseInt($("input#angle2").val());
      var angle3 = parseInt($("input#angle3").val());

      if (angle1 + angle2 + angle3 !=180) {
         $(".answer").text("not a triangle");
      }

      if (angle1 === angle2 && angle2 === angle3 && angle3 === angle1) {
        $(".answer").text("Is an equilateral triangle");
      }

      if (angle1 === angle2 || angle1 === angle3 || angle2 === angle3) {
        $(".answer").text("is an Isosceles triangle");
      }

      if (angle1 != angle2 && angle1 != angle3 && angle2 != angle3) {
        $(".answer").text("is a Scalene triangle!");
      }

    event.preventDefault();
    });
});
