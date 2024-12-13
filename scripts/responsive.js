// menu-toggle.js
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('hidden'); // Show or hide the menu
  menu.classList.toggle('flex'); // Apply flex display
  menu.classList.toggle('flex-col'); // Ensure vertical alignment
});
