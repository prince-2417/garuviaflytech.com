/* CANVAS PARTICLE ANIMATION */
(function () {
    var cv = document.getElementById('hero-canvas'), ctx = cv.getContext('2d'), cw, ch;
    var bc = { r: 209, g: 214, b: 218 }, R = 7, balls = [], af = 0.03, ll = 0.8, dl = 260;
    var mb = { x: 0, y: 0, vx: 0, vy: 0, r: 0, type: 'mouse' };
    function rn(a, b) { return Math.random() * (b - a) + a; }
    function ra(a) { return a[Math.floor(Math.random() * a.length)]; }
    function rsp(l) { return Math.ceil(Math.random() * l); }
    function gs(p) {
        var mn = -1, mx = 1;
        if (p === 'top') return [rn(mn, mx), rn(0.1, mx)];
        if (p === 'right') return [rn(mn, -0.1), rn(mn, mx)];
        if (p === 'bottom') return [rn(mn, mx), rn(mn, -0.1)];
        if (p === 'left') return [rn(0.1, mx), rn(mn, mx)];
        return [0, 0];
    }
    function gb() {
        var p = ra(['top', 'right', 'bottom', 'left']), s = gs(p);
        if (p === 'top') return { x: rsp(cw), y: -R, vx: s[0], vy: s[1], r: R, alpha: 1, phase: rn(0, 10) };
        if (p === 'right') return { x: cw + R, y: rsp(ch), vx: s[0], vy: s[1], r: R, alpha: 1, phase: rn(0, 10) };
        if (p === 'bottom') return { x: rsp(cw), y: ch + R, vx: s[0], vy: s[1], r: R, alpha: 1, phase: rn(0, 10) };
        return { x: -R, y: rsp(ch), vx: s[0], vy: s[1], r: R, alpha: 1, phase: rn(0, 10) };
    }
    function rballs() { balls.forEach(function (b) { if (!b.hasOwnProperty('type')) { ctx.fillStyle = 'rgba(' + bc.r + ',' + bc.g + ',' + bc.b + ',' + b.alpha + ')'; ctx.beginPath(); ctx.arc(b.x, b.y, R, 0, Math.PI * 2, true); ctx.closePath(); ctx.fill(); } }); }
    function uballs() { var nb = []; balls.forEach(function (b) { b.x += b.vx; b.y += b.vy; if (b.x > -50 && b.x < (cw + 50) && b.y > -50 && b.y < (ch + 50)) nb.push(b); b.phase += af; b.alpha = Math.abs(Math.cos(b.phase)); }); balls = nb.slice(0); }
    function gd(b1, b2) { var dx = b1.x - b2.x, dy = b1.y - b2.y; return Math.sqrt(dx * dx + dy * dy); }
    function rlines() { for (var i = 0; i < balls.length; i++) { for (var j = i + 1; j < balls.length; j++) { var fr = gd(balls[i], balls[j]) / dl; if (fr < 1) { ctx.strokeStyle = 'rgba(208,213,216,' + (1 - fr) + ')'; ctx.lineWidth = ll; ctx.beginPath(); ctx.moveTo(balls[i].x, balls[i].y); ctx.lineTo(balls[j].x, balls[j].y); ctx.stroke(); ctx.closePath(); } } } }
    function aball() { if (balls.length < 20) balls.push(gb()); }
    function render() { ctx.clearRect(0, 0, cw, ch); rballs(); rlines(); uballs(); aball(); requestAnimationFrame(render); }
    function ic() { cv.width = window.innerWidth; cv.height = document.getElementById('hero').offsetHeight || window.innerHeight; cw = cv.width; ch = cv.height; }
    window.addEventListener('resize', ic);
    cv.addEventListener('mouseenter', function () { balls.push(mb); });
    cv.addEventListener('mouseleave', function () { balls = balls.filter(function (b) { return !b.hasOwnProperty('type'); }); });
    cv.addEventListener('mousemove', function (e) { mb.x = e.clientX; mb.y = e.clientY; });
    ic();
    for (var i = 0; i < 30; i++) { var s = gs('top'); balls.push({ x: rsp(cw), y: rsp(ch), vx: s[0], vy: s[1], r: R, alpha: 1, phase: rn(0, 10) }); }
    requestAnimationFrame(render);
})();

/* HEADER SCROLL */
var hdr = document.getElementById('site-header');
window.addEventListener('scroll', function () { window.scrollY > 50 ? hdr.classList.add('scrolled') : hdr.classList.remove('scrolled'); });

/* HAMBURGER */
document.getElementById('hbg').addEventListener('click', function () { document.getElementById('mnav').classList.toggle('hidden'); });

/* BACK TO TOP */
var btt = document.getElementById('btt');
window.addEventListener('scroll', function () {
    if (window.scrollY > 400) { btt.style.opacity = '1'; btt.style.pointerEvents = 'auto'; }
    else { btt.style.opacity = '0'; btt.style.pointerEvents = 'none'; }
});
btt.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

/* SCROLL REVEAL */
document.querySelectorAll('.reveal').forEach(function (el) {
    new IntersectionObserver(function (e) { if (e[0].isIntersecting) e[0].target.classList.add('visible'); }, { threshold: 0.1 }).observe(el);
});

/* COUNTER */
var counted = false;
var allSections = document.querySelectorAll('section');
var cntSection = null;
allSections.forEach(function (s) { if (s.querySelector('.count')) cntSection = s; });
if (cntSection) {
    new IntersectionObserver(function (e) {
        if (e[0].isIntersecting && !counted) {
            counted = true;
            document.querySelectorAll('.count').forEach(function (c) {
                var t = parseFloat(c.dataset.target), s = 0, st = t / 125;
                var dec = c.dataset.decimal ? parseInt(c.dataset.decimal) : 0;
                var tm = setInterval(function () {
                    s += st;
                    if (s >= t) {
                        var val = t.toFixed(dec);
                        c.textContent = val.replace('.', ',');
                        clearInterval(tm);
                    } else {
                        var val = s.toFixed(dec);
                        c.textContent = val.replace('.', ',');
                    }
                }, 16);
            });
        }
    }, { threshold: 0.5 }).observe(cntSection);
}

/* MARQUEE */
var tr = document.getElementById('logos-tr');
if (tr) { tr.innerHTML += tr.innerHTML; var off = 0; (function al() { off += 0.5; if (off >= tr.scrollWidth / 2) off = 0; tr.style.transform = 'translateX(-' + off + 'px)'; requestAnimationFrame(al); })(); }





tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                nunito: ['Nunito', 'sans-serif'],
                rubik: ['Rubik', 'sans-serif'],
            },
            colors: {
                primary: '#6254E7',
                dark: '#3b3663',
                body: '#696687',
            },
            animation: {
                'fade-up': 'fadeUp .8s ease forwards',
                'fade-up-2': 'fadeUp .8s ease .3s forwards',
                'fade-up-3': 'fadeUp .8s ease .5s forwards',
                'fade-up-4': 'fadeUp .8s ease .7s forwards',
                'fade-up-5': 'fadeUp .8s ease .9s forwards',
                'fade-up-6': 'fadeUp .8s ease 1.1s forwards',
                'pulse-dot': 'pdot 2s infinite',
                'bounce-y': 'bncY 2s infinite',
            },
            keyframes: {
                fadeUp: { from: { opacity: '0', transform: 'translateY(30px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
                pdot: { '0%,100%': { transform: 'scale(1)', opacity: '1' }, '50%': { transform: 'scale(1.4)', opacity: '.7' } },
                bncY: { '0%,100%': { transform: 'translateX(-50%) translateY(0)' }, '50%': { transform: 'translateX(-50%) translateY(8px)' } },
            },
            backgroundImage: {
                'hero-overlay': 'linear-gradient(135deg,rgba(15,14,26,.7) 0%,rgba(15,14,26,.4) 60%,rgba(98,84,231,.15) 100%)',
            }
        }
    }
}




 // Dynamically position mega dropdown so it never overflows screen
    const megaTrigger = document.querySelector('li.group');
    const megaPanel = document.getElementById('megaPanel');
    if (megaTrigger && megaPanel) {
      function positionMega() {
        megaPanel.style.left = '0';
        megaPanel.style.transform = 'none';
        const panelRect   = megaPanel.getBoundingClientRect();
        const triggerRect = megaTrigger.getBoundingClientRect();
        const viewW       = window.innerWidth;
        const padding     = 16;
        const panelW      = megaPanel.offsetWidth;

        // ideal center under trigger
        let idealLeft = triggerRect.left + triggerRect.width / 2 - panelW / 2;

        // clamp within viewport
        if (idealLeft + panelW + padding > viewW) idealLeft = viewW - panelW - padding;
        if (idealLeft < padding) idealLeft = padding;

        // convert to offset relative to the li
        megaPanel.style.left = (idealLeft - triggerRect.left) + 'px';
      }
      megaTrigger.addEventListener('mouseenter', positionMega);
      window.addEventListener('resize', positionMega);
    }

    