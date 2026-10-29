// Contact notes are handed to the visitor's email app; no message is stored or sent by this site.
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  if (!this.reportValidity()) return;
  const name = this.elements.name.value.trim();
  const message = this.elements.message.value.trim();
  if (!name || !message) { document.getElementById('form-status').textContent = 'Please add your name and a message.'; return; }
  const subject = encodeURIComponent('Portfolio conversation from ' + name);
  const body = encodeURIComponent(message + '\n\nFrom: ' + name);
  window.location.href = 'mailto:kh892@cornell.edu?subject=' + subject + '&body=' + body;
  document.getElementById('form-status').textContent = 'Continue in your email app to send your note. If it did not open, email kh892@cornell.edu directly.';
});
