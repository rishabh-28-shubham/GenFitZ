const tabs = document.querySelectorAll('.nav-tabs li');
const forms = document.querySelectorAll('.form-container form');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    forms.forEach(f => f.style.display = 'none');
    tab.classList.add('active');
    forms[index].style.display = 'block';
  });
});
