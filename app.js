'use strict';
const menuButton=document.querySelector('.menu-toggle');
const mobileMenu=document.querySelector('.mobile-menu');
function closeMenu(){menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open menu');mobileMenu.hidden=true;}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));menuButton.setAttribute('aria-label',open?'Open menu':'Close menu');mobileMenu.hidden=open;});
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
window.addEventListener('resize',()=>{if(innerWidth>760)closeMenu();},{passive:true});

const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
const motionButton=document.querySelector('.motion-toggle');
let motionPaused=reducedMotion.matches;
try{motionPaused=reducedMotion.matches||localStorage.getItem('sparoww-motion-paused')==='true';}catch{}
function updateMotion(){document.body.classList.toggle('motion-paused',motionPaused);motionButton.setAttribute('aria-pressed',String(motionPaused));motionButton.setAttribute('aria-label',motionPaused?'Resume animations':'Pause animations');motionButton.querySelector('.motion-label').textContent=motionPaused?'Resume motion':'Pause motion';motionButton.querySelector('.motion-icon').textContent=motionPaused?'▷':'Ⅱ';document.dispatchEvent(new CustomEvent('sparoww:motion',{detail:{paused:motionPaused}}));}
updateMotion();
motionButton.addEventListener('click',()=>{motionPaused=!motionPaused;updateMotion();try{localStorage.setItem('sparoww-motion-paused',String(motionPaused));}catch{}});
reducedMotion.addEventListener('change',e=>{motionPaused=e.matches;updateMotion();});

function updateTime(){document.getElementById('local-time').textContent=new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',timeZone:'Africa/Casablanca'}).format(new Date());}
updateTime();setInterval(updateTime,60000);

(window.SPAROWW_PROJECTS||[]).forEach(project=>{const card=document.querySelector('[data-project="'+project.id+'"]');if(!card)return;
 if(typeof project.behanceUrl==='string'){try{const url=new URL(project.behanceUrl);if(url.protocol==='https:'&&(url.hostname==='www.behance.net'||url.hostname==='behance.net'))card.href=url.href;}catch{}}
 if(project.thumbnail){const image=document.createElement('img');image.src=project.thumbnail;image.alt=project.thumbnailAlt||project.title;image.loading='lazy';image.className='category-thumbnail';card.querySelector('.category-art').replaceWith(image);card.querySelector('.cover-label').hidden=true;}
});

if(matchMedia('(hover: hover) and (pointer: fine)').matches){document.querySelectorAll('[data-tilt]').forEach(el=>{let scheduled=false;let px=0,py=0;const target=el;
 target.addEventListener('pointermove',event=>{if(motionPaused||reducedMotion.matches)return;const r=target.getBoundingClientRect();px=(event.clientX-r.left)/r.width-.5;py=(event.clientY-r.top)/r.height-.5;if(!scheduled){scheduled=true;requestAnimationFrame(()=>{el.style.transform='perspective(1000px) rotateX('+(-py*4)+'deg) rotateY('+(px*4)+'deg) translateY(-3px)';scheduled=false;});}},{passive:true});
 target.addEventListener('pointerleave',()=>{el.style.transform='';},{passive:true});
 document.addEventListener('sparoww:motion',()=>{el.style.transform='';});
});}

// Enter each section and collection with a short, staggered motion.
const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('scroll-seen');revealObserver.unobserve(entry.target);}});},{threshold:.1});
document.querySelectorAll('.section-heading,.project-card,.about-panel,.contact-panel').forEach(el=>{el.classList.add('scroll-reveal');if(motionPaused||reducedMotion.matches)el.classList.add('scroll-seen');revealObserver.observe(el);});
const navObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)document.querySelectorAll('.desktop-nav a').forEach(a=>a.classList.toggle('current',a.getAttribute('href')==='#'+entry.target.id));});},{rootMargin:'-20% 0px -50% 0px',threshold:0});
document.querySelectorAll('#work,#about,#contact').forEach(s=>navObserver.observe(s));

// Scroll-linked depth. Page scrolling stays native; only visible artwork moves.
const progress=document.querySelector('.scroll-progress');
const heroSection=document.querySelector('.hero');
const heroCopy=document.querySelector('.hero-copy');
const heroScene=document.querySelector('.hero-mark');
const aboutSection=document.querySelector('#about');
const identityImage=document.querySelector('.about-backmark');
const visibleCards=new Set();
const artObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)visibleCards.add(entry.target);else visibleCards.delete(entry.target);}));
document.querySelectorAll('.project-card').forEach(card=>artObserver.observe(card));
const clamp=(value,min,max)=>Math.min(Math.max(value,min),max);
let scrollTick=false;
function updateScrollEffects(){
 scrollTick=false;
 const total=document.documentElement.scrollHeight-innerHeight;
 progress.style.width=(total>0?scrollY/total*100:0)+'%';
 const still=motionPaused||reducedMotion.matches;
 const heroRect=heroSection.getBoundingClientRect();
 const depth=still?0:clamp(-heroRect.top/heroRect.height,0,1);
 heroCopy.style.setProperty('--copy-lift',(-depth*24).toFixed(2)+'px');
 heroScene.style.setProperty('--scene-lift',(-depth*58).toFixed(2)+'px');
 visibleCards.forEach(card=>{const art=card.querySelector('.category-art');if(!art)return;const rect=card.getBoundingClientRect();const amount=still?0:clamp((innerHeight/2-rect.top-rect.height/2)/innerHeight,-.65,.65)*24;art.style.setProperty('--art-drift',amount.toFixed(2)+'px');});
 const rect=aboutSection.getBoundingClientRect();
 const turn=still?0:(clamp((innerHeight-rect.top)/(innerHeight+rect.height),0,1)-.5)*26;
 identityImage.style.setProperty('--brand-turn',turn.toFixed(2)+'deg');
}
function requestScrollUpdate(){if(!scrollTick){scrollTick=true;requestAnimationFrame(updateScrollEffects);}}
window.addEventListener('scroll',requestScrollUpdate,{passive:true});
window.addEventListener('resize',requestScrollUpdate,{passive:true});
document.addEventListener('sparoww:motion',requestScrollUpdate);
updateScrollEffects();
