document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section[data-section]');

  sections.forEach(async (section) => {
    const url = section.getAttribute('data-section');
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to load section');
      const html = await response.text();
      section.innerHTML = html;
    } catch (error) {
      section.innerHTML = '<p class="text-red-600">Error loading section content.</p>';
    }
  });

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
