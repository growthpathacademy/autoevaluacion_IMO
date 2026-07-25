document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if(toggle && nav){
    toggle.addEventListener('click', function(){
      nav.classList.toggle('open');
    });
  }
  // Mobile: tap on a dropdown parent (e.g. "Academia BPO ▾", "BPO360™ ▾") opens
  // its submenu instead of navigating away. Supports any number of dropdowns.
  document.querySelectorAll('.has-dropdown').forEach(function(dropdownWrap){
    var dropdownParent = dropdownWrap.querySelector('.nav-link');
    if(dropdownParent){
      dropdownParent.addEventListener('click', function(e){
        if(window.innerWidth <= 960){
          e.preventDefault();
          dropdownWrap.classList.toggle('open');
        }
      });
    }
  });
  // Footer year
  var y = document.querySelector('#footYear');
  if(y){ y.textContent = new Date().getFullYear(); }
});
