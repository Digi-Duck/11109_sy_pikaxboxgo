const listBar = document.querySelector('nav .more');
const list = document.querySelector('nav .list')
const place = document.querySelector('#living-room .big-room')
const rooms = document.querySelector('.rooms');



listBar.addEventListener('click', () => {
        list.classList.toggle('show');

})

rooms.addEventListener('click', () => {
        place.classList.toggle('show');
        rooms.classList.toggle('mblong');
})

let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
                entry.isIntersecting ?
                        entry.target.classList.add('title-fade-in') : ''
        })
}, {
        threshold: 0,
        rootMargin:'0px 0px -200px 0px',
})

const titles = document.querySelectorAll('.section-title')
titles.forEach(title=>{
        observer.observe(title) ;
})