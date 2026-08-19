(function () {
'use strict';
var root = document.documentElement;
function setTheme(t) {
root.setAttribute('data-theme', t);
try { localStorage.setItem('guide-theme', t); } catch (e) {}
}
function syncThemeButtons() {
var dark = root.getAttribute('data-theme') === 'dark';
document.querySelectorAll('[data-theme-toggle]').forEach(function (b) {
b.setAttribute('aria-pressed', dark ? 'true' : 'false');
});
}
document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
btn.addEventListener('click', function () {
setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
syncThemeButtons();
});
});
syncThemeButtons();
document.querySelectorAll('.nav-item').forEach(function (item) {
var trigger = item.querySelector('.nav-trigger');
if (!trigger) return;
function set(open) { trigger.setAttribute('aria-expanded', open ? 'true' : 'false'); }
item.addEventListener('mouseenter', function () { set(true); });
item.addEventListener('mouseleave', function () { set(false); });
item.addEventListener('focusin', function () { set(true); });
item.addEventListener('focusout', function () {
if (!item.contains(document.activeElement)) set(false);
});
trigger.addEventListener('click', function (e) {
e.preventDefault();
set(trigger.getAttribute('aria-expanded') !== 'true');
item.classList.toggle('open');
});
item.addEventListener('keydown', function (e) {
if (e.key === 'Escape') { set(false); item.classList.remove('open'); trigger.focus(); }
});
});
window.dataLayer = window.dataLayer || [];
function track(name, props) {
var e = Object.assign({ event: name, page: location.pathname, ts: Date.now() }, props || {});
window.dataLayer.push(e);
if (window.gtag) window.gtag('event', name, props || {});
if (window.analytics && window.analytics.track) window.analytics.track(name, props || {});
}
window.guideTrack = track;
document.addEventListener('click', function (e) {
var a = e.target.closest('a.btn, a.tlink, .prod > a, .mega-item');
if (!a) return;
track('cta_click', {
label: (a.textContent || '').trim().slice(0, 60),
href: a.getAttribute('href'),
location: a.closest('header') ? 'header'
: a.closest('footer') ? 'footer'
: a.closest('.hero') ? 'hero' : 'body'
});
});
var depths = [25, 50, 75, 100], fired = {};
window.addEventListener('scroll', function () {
var h = document.documentElement;
var pct = (h.scrollTop + window.innerHeight) / h.scrollHeight * 100;
depths.forEach(function (d) {
if (pct >= d && !fired[d]) { fired[d] = 1; track('scroll_depth', { depth: d }); }
});
}, { passive: true });
if ('IntersectionObserver' in window) {
var sio = new IntersectionObserver(function (es) {
es.forEach(function (en) {
if (!en.isIntersecting) return;
var h = en.target.querySelector('h2');
track('section_view', { section: h ? h.textContent.trim().slice(0, 60) : 'unnamed' });
sio.unobserve(en.target);
});
}, { threshold: 0.4 });
document.querySelectorAll('section').forEach(function (x) { sio.observe(x); });
}
var hdr = document.querySelector('.hdr');
function onScroll() { if (hdr) hdr.classList.toggle('scrolled', window.scrollY > 6); }
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
var burger = document.querySelector('.burger');
var mnav = document.querySelector('.mnav');
if (burger && mnav) burger.addEventListener('click', function () {
var open = mnav.classList.toggle('open');
burger.setAttribute('aria-expanded', open ? 'true' : 'false');
});
var els = document.querySelectorAll('.rv');
if ('IntersectionObserver' in window) {
var io = new IntersectionObserver(function (es) {
es.forEach(function (e) {
if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
});
}, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
els.forEach(function (el) { io.observe(el); });
} else {
els.forEach(function (el) { el.classList.add('in'); });
}
document.querySelectorAll('[data-tabs]').forEach(function (group) {
var tabs = group.querySelectorAll('.tab');
var panels = group.querySelectorAll('.tab-panel');
tabs.forEach(function (tab, i) {
tab.addEventListener('click', function () {
tabs.forEach(function (t) { t.classList.remove('active'); });
panels.forEach(function (pn) { pn.classList.remove('active'); });
tab.classList.add('active');
if (panels[i]) panels[i].classList.add('active');
});
});
});
var wheel = document.querySelector('[data-wheel]');
if (wheel) {
var items = Array.prototype.slice.call(wheel.querySelectorAll('.wheel-item'));
var cap   = document.querySelector('[data-wheel-cap]');
var hint  = document.querySelector('[data-wheel-hint]');
var dots  = Array.prototype.slice.call(document.querySelectorAll('.wheel-dot'));
var n     = items.length;              // 10 slots = 5 screens rendered twice
var pos   = 0;                         // fractional carousel position
var timer = null, raf = null;
var SLIDE = 460;                       // must match the .wheel-item transform transition
var DWELL = 2500;                      // time a screen sits still, front and center
var DELAY = DWELL + SLIDE;
var PX_PER_STEP = 260;                 // drag distance that advances one screen
var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var X = [0, 58, 100, 124, 124];        // % of card width
var Z = [0, -170, -360, -520, -520];   // px
var R = [0, 25, 33, 38, 38];           // deg
var S = [1, 0.88, 0.76, 0.70, 0.70];   // scale
var O = [1, 0.9, 0.42, 0, 0];          // opacity
function sample(t, abs) {
var m = t.length - 1;
var i = Math.min(Math.floor(abs), m);
var j = Math.min(i + 1, m);
var f = Math.min(abs, m) - i;
return t[i] + (t[j] - t[i]) * f;
}
function offset(i) {                    // signed, shortest way round
var d = (i - pos) % n;
if (d > n / 2) d -= n;
if (d < -n / 2) d += n;
return d;
}
function lastLabel() { return cap ? cap.textContent : ''; }
function place() {
items.forEach(function (el, i) {
var d = offset(i), abs = Math.abs(d), sgn = d < 0 ? -1 : 1;
var hidden = abs > 2.6;
el.style.transition = (hidden || wheel.classList.contains('dragging')) ? 'none' : '';
el.style.transform =
'translateX(' + (sgn * sample(X, abs)).toFixed(2) + '%) ' +
'translateZ(' + sample(Z, abs).toFixed(1) + 'px) ' +
'rotateY(' + (-sgn * sample(R, abs)).toFixed(2) + 'deg) ' +
'scale(' + sample(S, abs).toFixed(4) + ')';
el.style.opacity = sample(O, abs).toFixed(3);
el.style.zIndex = String(50 - Math.round(abs * 10));
el.classList.toggle('front', abs < 0.5);
el.setAttribute('aria-hidden', abs < 0.5 ? 'false' : 'true');
el.style.pointerEvents = hidden ? 'none' : 'auto';
});
var slot = ((Math.round(pos) % n) + n) % n;
var label = items[slot].getAttribute('data-label') || '';
var active = parseInt(items[slot].getAttribute('data-slot'), 10) || 0;
dots.forEach(function (dot, i) {
dot.classList.toggle('on', i === active);
dot.setAttribute('aria-current', i === active ? 'true' : 'false');
});
if (cap && label !== lastLabel()) {
cap.classList.add('fading');
setTimeout(function () { cap.textContent = label; cap.classList.remove('fading'); }, 130);
}
}
function go(delta) { pos = Math.round(pos) + delta; place(); }
function goToSlot(slot) {
var best = null, bestDist = 1e9;
items.forEach(function (el, i) {
if (parseInt(el.getAttribute('data-slot'), 10) !== slot) return;
var d = offset(i);
if (Math.abs(d) < bestDist) { bestDist = Math.abs(d); best = d; }
});
if (best !== null) { pos = Math.round(pos) + Math.round(best); place(); }
}
function start() { if (!reduced && !timer) timer = setInterval(function () { go(1); }, DELAY); }
function stop()  { if (timer) { clearInterval(timer); timer = null; } }
function restart() { stop(); start(); }
var dragging = false, startX = 0, startPos = 0, moved = 0;
var lastX = 0, lastT = 0, velocity = 0;
function down(x) {
dragging = true; startX = lastX = x; startPos = pos; moved = 0;
velocity = 0; lastT = performance.now();
wheel.classList.add('dragging');
stop();
if (hint) hint.classList.add('gone');
}
function move(x) {
if (!dragging) return;
moved = x - startX;
var now = performance.now(), dt = now - lastT;
if (dt > 0) velocity = ((x - lastX) / dt) * 0.6 + velocity * 0.4;
lastX = x; lastT = now;
pos = startPos - moved / PX_PER_STEP;
if (!raf) raf = requestAnimationFrame(function () { raf = null; place(); });
}
function up() {
if (!dragging) return;
dragging = false;
wheel.classList.remove('dragging');
var flick = -velocity * 0.28;
pos = Math.round(pos + Math.max(-2, Math.min(2, flick)));
place();
start();
}
wheel.addEventListener('pointerdown', function (e) {
if (e.button !== undefined && e.button !== 0) return;
down(e.clientX);
if (wheel.setPointerCapture && e.pointerId !== undefined) {
try { wheel.setPointerCapture(e.pointerId); } catch (err) {}
}
});
wheel.addEventListener('pointermove', function (e) { move(e.clientX); });
wheel.addEventListener('pointerup', up);
wheel.addEventListener('pointercancel', up);
window.addEventListener('pointerup', up);
wheel.addEventListener('touchstart', function (e) { down(e.touches[0].clientX); }, { passive: true });
wheel.addEventListener('touchmove',  function (e) { move(e.touches[0].clientX); }, { passive: true });
wheel.addEventListener('touchend', up, { passive: true });
wheel.addEventListener('dragstart', function (e) { e.preventDefault(); });
items.forEach(function (el) {
var img = el.querySelector('img');
if (img) { img.draggable = false; }
});
items.forEach(function (el, i) {
el.addEventListener('click', function () {
if (Math.abs(moved) > 6) return;
var d = offset(i);
if (Math.abs(d) >= 0.5) { pos = Math.round(pos) + Math.round(d); place(); restart(); }
});
});
dots.forEach(function (dot, i) {
dot.addEventListener('click', function () { goToSlot(i); restart(); });
});
var ctl = wheel.parentNode || wheel;
ctl.addEventListener('focusin', stop);
ctl.addEventListener('focusout', function (e) {
if (!ctl.contains(e.relatedTarget)) start();
});
document.addEventListener('visibilitychange', function () {
if (document.hidden) stop(); else start();
});
wheel.setAttribute('tabindex', '0');
wheel.addEventListener('keydown', function (e) {
if (e.key === 'ArrowLeft')  { e.preventDefault(); go(-1); restart(); }
if (e.key === 'ArrowRight') { e.preventDefault(); go(1);  restart(); }
});
place();
start();
}
var sBtn = document.querySelector('.icon-btn.search');
var sModal = document.getElementById('search-modal');
if (sBtn && sModal) {
var sInput = sModal.querySelector('.search-input');
var sList = sModal.querySelector('.search-results');
var index = window.GUIDE_INDEX || [];
var lastFocus = null, sel = 0;
function render(q) {
var hits = !q ? index.slice(0, 6) : index.filter(function (it) {
var hay = (it.t + ' ' + it.d + ' ' + (it.k || '')).toLowerCase();
return q.toLowerCase().split(/\s+/).every(function (w) { return hay.indexOf(w) > -1; });
}).slice(0, 8);
sel = 0;
if (!hits.length) { sList.innerHTML = '<p class="search-empty">Nothing matches that. Try "returns" or "pricing".</p>'; return; }
sList.innerHTML = hits.map(function (it, i) {
return '<a class="search-hit' + (i === 0 ? ' sel' : '') + '" href="' + it.u + '">' +
'<strong>' + it.t + '</strong><span>' + it.d + '</span></a>';
}).join('');
if (q) track('search_query', { q: q, results: hits.length });
}
function openS() {
lastFocus = document.activeElement;
sModal.classList.add('open'); document.body.style.overflow = 'hidden';
sInput.value = ''; render(''); sInput.focus(); track('search_open');
}
function closeS() {
sModal.classList.remove('open'); document.body.style.overflow = '';
if (lastFocus) lastFocus.focus();
}
sModal.addEventListener('keydown', function (e) {
if (e.key !== 'Tab') return;
var f = sModal.querySelectorAll('input, a[href], button');
if (!f.length) return;
var first = f[0], last = f[f.length - 1];
if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});
sBtn.addEventListener('click', openS);
sModal.addEventListener('click', function (e) { if (e.target === sModal) closeS(); });
sInput.addEventListener('input', function () { render(sInput.value.trim()); });
document.addEventListener('keydown', function (e) {
if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)) { e.preventDefault(); openS(); }
if (!sModal.classList.contains('open')) return;
if (e.key === 'Escape') closeS();
var hits = sList.querySelectorAll('.search-hit');
if (!hits.length) return;
if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
e.preventDefault();
hits[sel].classList.remove('sel');
sel = (sel + (e.key === 'ArrowDown' ? 1 : -1) + hits.length) % hits.length;
hits[sel].classList.add('sel'); hits[sel].scrollIntoView({ block: 'nearest' });
}
if (e.key === 'Enter') { e.preventDefault(); hits[sel].click(); }
});
}
document.querySelectorAll('[data-year]').forEach(function (el) {
el.textContent = new Date().getFullYear();
});
})();