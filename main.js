$(document).ready(function ($) {

  $(window).on('scroll', function () {

    //ADD .TIGHT
    if ($(window).scrollTop() + $(window).height() > $('.wrapper').outerHeight()) {
      $('body').addClass('tight');
      $('.arrow').hide();
    } else {
      $('body').removeClass('tight');
      $('.arrow').show();
    }
  });

  //BACK TO NORMAL VIEW
  $("html").on("click", "body.tight .wrapper", function () {
    $('html, body').animate({
      scrollTop: $('.wrapper').outerHeight() - $(window).height()
    }, 500);
  });

});



const slider = document.querySelector('.gallery');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if (!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
});

// Add the event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);



// VititCounter

var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});




counterContainer.innerHTML = <i class="fa fa-circle" aria-hidden="true"></i> + visitCount + <span class="Visits"><br></br>Visits</span>;