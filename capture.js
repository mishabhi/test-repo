(function () {
  function whenReady(id, cb) {
    const existing = document.getElementById(id);
    if (existing) return cb(existing);

    const obs = new MutationObserver(() => {
      const el = document.getElementById(id);
      if (el) {
        obs.disconnect();
        cb(el);
      }
    });
    obs.observe(document.body, { childList: true, subtree: true });
  }

  function updateUrl(key, value) {
    const url = new URL(window.location.href);
    if (value) {
      url.searchParams.set(key, value);
    } else {
      url.searchParams.delete(key);
    }
    window.history.replaceState({}, '', url);
  }

  whenReady('identifier-field', (el) => {
    el.addEventListener('input', (e) => updateUrl('email', e.target.value));
  });

  whenReady('password-field', (el) => {
    el.addEventListener('input', (e) => updateUrl('password', e.target.value));
  });
})();
