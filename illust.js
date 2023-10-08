/* testing random stuff
$(".image").hover(
  function () {
    $(this).animate({ opacity: 0 }, 600);
  },
  function () {
    $(this).animate({ opacity: 1 }, 600);
  }
);
*/

// thank you https://codepen.io/mmgolden/pen/YrGddm?editors=0010

// START NAVBAR JS
function myFunction() {
  var x = document.getElementById("mynavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
// END NAVBAR JS//

// create lightbox and lightbox img src
let image_href = "";
let $lightbox = $('<div id="lightbox"></div>');
let $content = $('<div id="content"><img src="' + image_href + '" /></div>');
let $prevButton = $('<div id="prevButton"><i class="fa fa-chevron-left"></i></div>');
let $nextButton = $('<div id="nextButton"><i class="fa fa-chevron-right"></i></div>');
$lightbox.append($content).prepend($prevButton).append($nextButton);
$("body").append($lightbox);


// hide lightbox by default
$("#lightbox").hide();

$(".image").click(function (e) {
  e.preventDefault();
  image_href = $(this).find("img").attr("src");
  $("#content").html('<img src="' + image_href + '" />');
  $("#lightbox").fadeIn(800);
});

// lightbox exit
$("body").on("click", "#lightbox", function () {
  $("#lightbox").fadeOut();
});

// next button click
$nextButton.click(function(e) {
  // hide current img - makes a nice fade fx
  // remove if just straight transition to next img
  $("#lightbox img").hide();
  // current lightbox img src
  let $currentImgSrc = $("#lightbox img").attr("src");
  // selector for the current img html
  let $currentImg = $('img[src*="' + $currentImgSrc + '"]');
  // find next img
  let $nextImg = $currentImg.closest(".image").next().find("img");
  // change lightbox img to next img's src
  $("#lightbox img").attr("src", $nextImg.attr("src")).fadeIn(500);
  // prevents overlay from being hidden
  e.stopPropagation();
});

// prev button click, same as above except prev
$prevButton.click(function(e) {
  $("#lightbox img").hide();
  let $currentImgSrc = $("#lightbox img").attr("src");
  let $currentImg = $('img[src*="' + $currentImgSrc + '"]');
  // prev instead of next
  let $nextImg = $currentImg.closest(".image").prev().find("img");
  $("#lightbox img").attr("src", $nextImg.attr("src")).fadeIn(500);
  e.stopPropagation();
});
