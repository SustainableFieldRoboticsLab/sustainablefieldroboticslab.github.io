// Mobile menu
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('site-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
    });
  }
})();

// Publication search and filter
(function () {
  var input = document.getElementById('pub-search');
  if (!input) return;
  var buttons = document.querySelectorAll('.chip-btn');
  var pubs = document.querySelectorAll('.year-block .pub');
  var blocks = document.querySelectorAll('.year-block');
  var count = document.getElementById('pub-count');
  var type = 'all';
  function apply() {
    var q = input.value.trim().toLowerCase(), shown = 0;
    pubs.forEach(function (p) {
      var ok = (type === 'all' || p.dataset.type === type) && (!q || p.dataset.text.indexOf(q) !== -1);
      p.hidden = !ok; if (ok) shown++;
    });
    blocks.forEach(function (b) { b.hidden = !b.querySelector('.pub:not([hidden])'); });
    count.textContent = shown + ' item' + (shown === 1 ? '' : 's');
  }
  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      buttons.forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
      b.setAttribute('aria-pressed', 'true'); type = b.dataset.filter; apply();
    });
  });
  input.addEventListener('input', apply);
  apply();
})();
