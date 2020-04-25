(function(){

  window.onscroll = function() {
    scrollFunction()
  };
  
  function scrollFunction() {
    const headerBlockElement = document.getElementById("headerBlock");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      // try to avoid inline styling as much as possible, rewrite it to add remove classes
      headerBlockElement.style.height = "75px";
    } else {
      headerBlockElement.style.height = "117px";
    }
  };
  
  const menuActiveElement = document.getElementById('menuActive');
  
  const adaptiveMenu = document.getElementById('adaptiveMenu');
  adaptiveMenu.addEventListener('click', function() {
    menuActiveElement.classList.add("active");
  });
  
  const menuClose = document.getElementById('menuClose');
  menuClose.addEventListener('click', function() {
    menuActiveElement.classList.remove("active");
  });

})()
  

