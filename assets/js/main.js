let img1 = "<img src='../img/sun-and-moon-icon-vector-20268417.jpeg'";

function getDark() {
  const wrapper = document.querySelector("body"); //Greifen uns das HTML Element
  wrapper.classList.toggle("dark"); //Toggeln mit einer Class
}

$(document).ready(function () {
  $(".container").click(function () {
    $(".stick").toggleClass(function () {
      return $(this).is(".open, .close") ? "open close" : "open";
    });
  });
});
