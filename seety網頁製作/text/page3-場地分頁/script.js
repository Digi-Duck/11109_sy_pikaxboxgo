const listBar = document.querySelector('nav .more');
const list = document.querySelector('nav .list');




listBar.addEventListener('click', () => {
    list.classList.toggle('show');
  });