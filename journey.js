const ticket = document.getElementById('journey-ticket');
ticket.addEventListener('click', () => {
  const stamped = ticket.classList.toggle('stamped');
  ticket.setAttribute('aria-pressed', String(stamped));
  document.getElementById('stamp-status').textContent = stamped ? 'Welcome aboard. Explore the work below ↓' : 'Click to stamp your visit ↗';
});
const toggles = [document.getElementById('recruiter-toggle'), document.getElementById('recruiter-mobile')];
toggles.forEach(toggle => toggle.addEventListener('click', () => {
  const enabled = document.body.classList.toggle('recruiter');
  toggles.forEach(button => {
    button.setAttribute('aria-pressed', String(enabled));
    button.textContent = enabled ? 'Full portfolio' : 'Recruiter mode';
  });
}));
const routeLinks = [...document.querySelectorAll('.route-header a')];
const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    routeLinks.forEach(link => {
      const active = link.hash === '#' + entry.target.id;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
}, { rootMargin: '-10% 0px -55% 0px', threshold: 0 });
routeLinks.forEach(link => observer.observe(document.querySelector(link.hash)));
