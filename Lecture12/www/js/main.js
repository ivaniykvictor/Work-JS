window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("headerBlock").style.height = "75px";
  } else {
    document.getElementById("headerBlock").style.height = "117px";
  }
};

const adaptiveMenu = document.getElementById('adaptiveMenu');

adaptiveMenu.addEventListener('click', function() {
  document.getElementById('menuActive').classList.add("active");
});

const menuClose = document.getElementById('menuClose');

menuClose.addEventListener('click', function() {
  document.getElementById('menuActive').classList.remove("active");
});


