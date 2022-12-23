const listBar = document.querySelector('nav .more');
const list = document.querySelector('nav .list');
const place = document.querySelector('#living-room .big-room');
const rooms = document.querySelector('.rooms');
const saturn = document.querySelector('.back-to-top');
const banner = document.querySelector('.banner');

listBar.addEventListener('click', () => {
  list.classList.toggle('show');
});

rooms.addEventListener('click', () => {
  place.classList.toggle('show');
  rooms.classList.toggle('mblong');
});

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? entry.target.classList.add('title-fade-in') : '';
    });
  },
  {
    threshold: 0,
    rootMargin: '0px 0px -200px 0px',
  }
);

const titles = document.querySelectorAll('.section-title');
titles.forEach((title) => {
  observer.observe(title);
});

window.addEventListener('scroll', () => {
  let scrollY = parseInt(window.scrollY);
  let bannerHeight = parseInt(banner.offsetHeight);
  if (scrollY >= bannerHeight) {
    saturn.classList.add('appear');
  } else {
    saturn.classList.remove('appear');
  }
});

// const paths = document.querySelectorAll('#svgPic path')

// for (let i = 0; i < paths.length; i++) {
//         let pL = paths[i].getTotalLength();
//         paths[i].style.strokeDasharray = pL;
//         paths[i].style.strokeDashoffset = pL;

//         setTimeout(() => {
//                 paths[i].style.transition = `stroke-dashoffset 1.5s linear ${1 * i}s ,
//         fill .5s linear ${1 * i}s
//         `
//                 paths[i].style.strokeDashoffset = pL + pL;
//                 setTimeout(() => {
//                         paths[i].setAttribute('fill', '#000')
//                 }, 1500);
//         }, 100);
// }

// const html = document.querySelector('html')
// const loadingPage = document.querySelector('#svgPic')
// window.onload = () => {
//         setTimeout(() => {
//                 loadingPage.classList.add('unshow')
//                 window.scrollTo({
//                         top:"0",
//                         behavior:"auto",
//                 });
//                 html.style.scrollBehavior = "smooth"
//                 setTimeout(() => {
//                         loadingPage.style.display = "none";
//                 }, 3000);
//         }, 8000);

// }
