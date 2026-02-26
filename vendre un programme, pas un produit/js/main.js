/**
 * VITAMAX - Programme Transformation Peau 90 jours
 * Landing "Vendre un programme, pas un produit"
 * FAQ, navigation mobile, top bar hide on scroll
 */

(function () {
  'use strict';

  // ----- FAQ accordion -----
  function initFaq() {
    var questions = document.querySelectorAll('.faq-question');
    if (!questions.length) return;

    questions.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var item = btn.closest('.faq-item');
        var answer = item.querySelector('.faq-answer');
        var isOpen = item.classList.contains('is-open');

        // Close all
        document.querySelectorAll('.faq-item').forEach(function (el) {
          el.classList.remove('is-open');
          var ans = el.querySelector('.faq-answer');
          if (ans) ans.style.maxHeight = '';
          var q = el.querySelector('.faq-question');
          if (q) q.setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
          item.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
          if (answer) {
            answer.style.maxHeight = answer.scrollHeight + 24 + 'px';
          }
        }
      });

      btn.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });
    });
  }

  // ----- Top bar hide on scroll down -----
  function initTopBar() {
    var topBar = document.getElementById('topBar');
    if (!topBar) return;
    var lastScroll = 0;

    function onScroll() {
      var scroll = window.scrollY || document.documentElement.scrollTop;
      if (scroll > lastScroll && scroll > 80) {
        topBar.classList.add('top-bar-hidden');
      } else {
        topBar.classList.remove('top-bar-hidden');
      }
      lastScroll = scroll;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ----- Mobile nav toggle -----
  function initNavToggle() {
    var toggle = document.getElementById('navToggle');
    var nav = document.querySelector('.nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      nav.classList.toggle('nav-open', !expanded);
      document.body.classList.toggle('nav-open', !expanded);
    });

    // Close on link click (anchor links)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('nav-open');
        document.body.classList.remove('nav-open');
      });
    });
  }

  // ----- Smooth scroll for anchor links (backup if CSS scroll-behavior not supported) -----
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      var id = a.getAttribute('href');
      if (id === '#') return;
      a.addEventListener('click', function (e) {
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ----- Run on DOM ready -----
  function run() {
    initFaq();
    initTopBar();
    initNavToggle();
    initSmoothScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
