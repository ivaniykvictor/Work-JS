(function() {

  window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    const headerBlockElement = document.getElementById("headerBlock");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      headerBlockElement.classList.add("header__block-small");
    } else {
      headerBlockElement.classList.remove("header__block-small");
    }
  }
  
  const menuActiveElement = document.getElementById('menuActive');
  
  const adaptiveMenu = document.getElementById('adaptiveMenu');
  adaptiveMenu.addEventListener('click', function() {
    menuActiveElement.classList.add("active");
  });
  
  const menuClose = document.getElementById('menuClose');
  menuClose.addEventListener('click', function() {
    menuActiveElement.classList.remove("active");
  });

})();
