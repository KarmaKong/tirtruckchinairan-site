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
  document.querySelectorAll('[data-mobile-disclosure]').forEach((section,i)=>{
    const heading=section.querySelector(':scope>.section-heading h2,:scope>.disclosure-heading');
    const content=section.querySelector(':scope>.disclosure-content');
    if(!heading||!content)return;
    const button=document.createElement('button');button.type='button';button.className='section-toggle';
    const label=document.createElement('span');while(heading.firstChild)label.append(heading.firstChild);
    button.append(label);button.setAttribute('aria-controls',content.id=`disclosure-${i}`);
    let open=false;
    const render=()=>{
      if(mobile.matches){if(!button.isConnected){button.append(label);heading.append(button)}content.hidden=!open;button.setAttribute('aria-expanded',String(open))}
      else{content.hidden=false;heading.append(label);button.remove()}
    };
    button.addEventListener('click',()=>{open=!open;render()});
    mobile.addEventListener('change',render);render();
  });
})();
