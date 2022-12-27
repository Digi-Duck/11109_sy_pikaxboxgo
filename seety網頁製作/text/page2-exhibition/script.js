const profPic = document.querySelector('.prof-pic');
const nav = document.querySelector('nav');
const navBar = document.querySelector('.nav-bar');
const optList = document.querySelector('.opt-list');
const navList = document.querySelector('.nav-list');
const banner = document.querySelector('.banner');

// functions
window.addEventListener('scroll', () => {
  let scrollHeight = parseInt(window.scrollY);
  let bannerHeight = parseInt(banner.offsetHeight);
  console.log(scrollHeight);
  if (scrollHeight >= bannerHeight - 30) {
    navBar.classList.add('just-center');
    profPic.classList.add('opc');
  } else {
    navBar.classList.remove('just-center');
    profPic.classList.remove('opc');
  }
  if (scrollHeight > bannerHeight + 25) {
    nav.classList.add('top');
  } else if (scrollHeight < bannerHeight - 25) {
    nav.classList.remove('top');
  }
  if (scrollHeight > bannerHeight - parseInt(navList.offsetHeight)) {
    navList.classList.remove('switch');
  }
});

profPic.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

optList.addEventListener('click', () => {
  navList.classList.toggle('switch');
});
