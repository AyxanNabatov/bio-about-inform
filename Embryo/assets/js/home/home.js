let swiper = new Swiper(".mySwiper", {
  loop: true,
});

function openTabMenu(evt, TabMenu) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(TabMenu).style.display = "block";
  evt.currentTarget.className += " active";
}



var swiper1 = new Swiper("#tab-menu .mySwiper1", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000,
  },
});





var swiper3 = new Swiper("#tab-menu .mySwiper3", {
  slidesPerView: 4,
  spaceBetween: 30,
});

var swiper4 = new Swiper("#tab-menu .mySwiper4", {
  slidesPerView: 4,
  spaceBetween: 30,
});



  


 

