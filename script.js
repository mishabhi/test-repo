const el = document.getElementById('identifier-field');
 
// Log every change
el.addEventListener('input', (e) => console.log('value:', e.target.value));