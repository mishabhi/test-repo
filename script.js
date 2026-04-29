const el = document.getElementById('identifier-field');
 
// Log every change
el.addEventListener('input', (e) => alert(e.target.value));
