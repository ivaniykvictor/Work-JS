window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("headerBlock").style.height = "75px";
  } else {
    document.getElementById("headerBlock").style.height = "117px";
  }
};
