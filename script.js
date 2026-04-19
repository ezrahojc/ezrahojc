// ============================================================
// Ezra Ho Jincheng — Portfolio site interactions
// ============================================================

// Footer year
(function () {
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Mobile nav toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('siteNav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    nav.classList.toggle('open');
    toggle.textContent = nav.classList.contains('open') ? 'CLOSE' : 'MENU';
  });

  // Close nav when a link is clicked (useful on mobile)
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.textContent = 'MENU';
    });
  });
})();

// Project filtering (only runs on projects page)
(function () {
  var buttons = document.querySelectorAll('.filter-btn');
  var rows = document.querySelectorAll('.project-row');
  if (!buttons.length || !rows.length) return;

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      var filter = btn.getAttribute('data-filter');

      rows.forEach(function (row) {
        var tags = (row.getAttribute('data-tags') || '').split(' ');
        if (filter === 'all' || tags.indexOf(filter) !== -1) {
          row.style.display = '';
          // re-trigger a subtle fade
          row.style.opacity = '0';
          requestAnimationFrame(function () {
            row.style.transition = 'opacity 0.3s ease';
            row.style.opacity = '1';
          });
        } else {
          row.style.display = 'none';
        }
      });
    });
  });
})();
