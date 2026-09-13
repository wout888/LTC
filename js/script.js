// LTC International Limited — minimal site behavior
// 1) mobile nav toggle
// 2) footer year
// 3) contact form: submit via fetch to Formspree, show inline status, no page reload

document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var navToggle = document.getElementById('navToggle');
  var siteNav = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    siteNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        siteNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');

  if (form && status) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      status.textContent = 'Sending...';

      var data = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            status.textContent = 'Message sent. Thank you.';
            form.reset();
          } else {
            response.json().then(function (json) {
              if (json && json.errors) {
                status.textContent = 'There was a problem sending your message.';
              } else {
                status.textContent = 'There was a problem sending your message.';
              }
            }).catch(function () {
              status.textContent = 'There was a problem sending your message.';
            });
          }
        })
        .catch(function () {
          status.textContent = 'There was a problem sending your message. Please try again later.';
        });
    });
  }
});
