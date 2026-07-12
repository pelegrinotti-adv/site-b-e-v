document.addEventListener('DOMContentLoaded', function(){
  var anoEl = document.getElementById('ano');
  if(anoEl){ anoEl.textContent = new Date().getFullYear(); }

  var menuToggle = document.getElementById('menuToggle');
  var navList = document.getElementById('navList');

  if(menuToggle && navList){
    menuToggle.setAttribute('aria-expanded', 'false');

    menuToggle.addEventListener('click', function(){
      var isOpen = navList.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });

    navList.querySelectorAll('a').forEach(function(link){
      link.addEventListener('click', function(){
        navList.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');
      });
    });
  }
});
