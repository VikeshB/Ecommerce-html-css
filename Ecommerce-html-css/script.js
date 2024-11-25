// script.js

// Wait until the entire page is loaded
window.addEventListener('load', function () {
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');

  // Hide the loader
  loader.style.display = 'none';

  // Show the main content
  content.style.display = 'block';
});
