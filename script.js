<script>
// Theme toggle
const btn = document.getElementById('theme-toggle');
btn.addEventListener('click', () => {
  const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  btn.querySelector('.icon').textContent = theme === 'dark' ? '☀️' : '🌙';
});
// Smooth scroll already via CSS
// Contact form demo
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => { e.preventDefault(); alert('Thanks! I will get back to you soon.'); form.reset(); });
</script>
