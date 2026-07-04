document.addEventListener('DOMContentLoaded', function () {
  // 1. フェードイン: IntersectionObserver で .fade-in 要素に .visible を付与
  var fadeEls = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // IntersectionObserver 非対応環境ではすべて表示
    fadeEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // 2. ヘッダー: スクロールでシャドウを付与
  var header = document.getElementById('site-header');

  function updateHeaderShadow() {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  if (header) {
    updateHeaderShadow();
    window.addEventListener('scroll', updateHeaderShadow, { passive: true });
  }

  // 3. スムーズスクロールは CSS (html { scroll-behavior: smooth }) で実装済み
});
