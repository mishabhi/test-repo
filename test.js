function whenReady(id, cb) {
  const el = document.getElementById(id);
  if (el) return cb(el);

  const obs = new MutationObserver(() => {
    const el = document.getElementById(id);
    if (el) {
      obs.disconnect();
      cb(el);
    }
  });
  obs.observe(document.body, { childList: true, subtree: true });
}

whenReady('identifier-field', (el) => {
  el.addEventListener('input', (e) => {
    alert(e.target.value);
  });
});
