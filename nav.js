(function(){
  // Edita SOLO esta lista para añadir/quitar páginas del menú en todo el sitio.
  var links = [
    { label: 'Inicio', href: 'https://focusgodapp.com/' },
    { label: 'Guías', href: '/guias/' },
    { label: 'Fundador', href: '/fundador/' }
  ];

  var container = document.getElementById('site-nav');
  if(!container) return;

  var html = '<div class="menu-wrap">'
    + '<div class="menu-btn" id="menuBtnEl">'
    + '<svg viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>'
    + '</div>'
    + '<div class="menu-dropdown" id="menuDropdownEl">';
  links.forEach(function(l){
    html += '<a href="' + l.href + '">' + l.label + '</a>';
  });
  html += '</div></div>';

  container.innerHTML = html;

  document.getElementById('menuBtnEl').addEventListener('click', function(){
    document.getElementById('menuDropdownEl').classList.toggle('open');
  });

  document.addEventListener('click', function(e){
    var dd = document.getElementById('menuDropdownEl');
    var btn = document.getElementById('menuBtnEl');
    if(dd && dd.classList.contains('open') && !dd.contains(e.target) && !btn.contains(e.target)){
      dd.classList.remove('open');
    }
  });
})();
