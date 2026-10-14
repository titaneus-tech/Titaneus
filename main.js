(function(){
var email=document.body.dataset.email;
document.querySelectorAll('[data-email]').forEach(function(a){a.href='mailto:'+email;a.textContent=email});
document.getElementById('year').textContent=new Date().getFullYear();
var btn=document.querySelector('.nav-btn'),nav=document.getElementById('nav');
btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded',false)}});
// Forms: open the visitor's email app. Swap for Formspree/Netlify Forms later (see README).
document.querySelectorAll('form[data-mail]').forEach(function(f){f.addEventListener('submit',function(e){
e.preventDefault();var d=new FormData(f),body=[];d.forEach(function(v,k){body.push(k+': '+v)});
location.href='mailto:'+email+'?subject='+encodeURIComponent(f.dataset.subject)+'&body='+encodeURIComponent(body.join('\n'));
f.parentNode.querySelector('.status').textContent='Opening your email app. Press send there to finish.'})});
// Hero sheen: one sweep on load, then follows the pointer.
var g=document.getElementById('sheen'),hero=document.getElementById('top');
if(g&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
var set=function(x){g.setAttribute('x1',x-120);g.setAttribute('x2',x)};
set(-400);var t0=null;
var sweep=function(t){t0=t0||t;var p=Math.min((t-t0)/1800,1);set(300+p*620);if(p<1)requestAnimationFrame(sweep)};
setTimeout(function(){requestAnimationFrame(sweep)},400);
hero.addEventListener('pointermove',function(e){var r=hero.getBoundingClientRect();set(380+((e.clientX-r.left)/r.width)*520)});}
})();
