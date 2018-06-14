allImg = new Array(
    "img/faceOne.png", //One 
    "img/faceTwo.png", //Two
    "img/faceThree.png", //Three
    "img/faceFour.png", //Four
    "img/faceFive.png", //Five
    "img/faceSix.png" //Six
  );


$("#roll").click(function() {
    $.fn.random = function() {
      return this.eq(Math.floor(Math.random() * this.length));
    };
    var img = Math.floor(Math.random() * 6);
    var $this = $(this);
    $(".dice")
        .fadeOut("fast")
        .fadeIn("fast")
    $(".dice:first")
      .queue(function() {
      $(this)
        .css("background-image", "url("+ allImg[img] +")")
        .dequeue();
    });
  });