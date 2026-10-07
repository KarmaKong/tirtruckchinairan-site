/* Progressive enhancement only. All navigation and copy remain usable without JS. */
(()=>{
  document.documentElement.classList.add('js');
  const mobile=matchMedia('(max-width:760px)');
  const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.site-nav');
  if(menu&&nav){
    const close=()=>{nav.classList.remove('is-open');menu.setAttribute('aria-expanded','false')};
    menu.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');menu.setAttribute('aria-expanded',String(open))});
    nav.addEventListener('keydown',e=>{if(e.key==='Escape'){close();menu.focus()}});
    nav.addEventListener('click',e=>{if(e.target.closest('a'))close()});
    mobile.addEventListener('change',close);
  }
})();
