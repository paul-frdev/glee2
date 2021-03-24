$(function () {

  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    // autoplaySpeed: 2000,
  });

});

// document.querySelector('#search').oninput = function () {
//   let val = this.value.trim();
//   let searchItems = document.querySelectorAll('.user-nav__search-input body');
//   if (val != '') {
//     searchItems.forEach(function (elem) {
//       if (elem.innerText.search(val) == -1) {
//         elem.classList.add('hide');
//       } else {
//         elem.classList.remove('hide');
//       }
//     });
//   }
// }