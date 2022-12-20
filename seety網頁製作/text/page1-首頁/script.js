const listBar = document.querySelector('nav .more');
const list = document.querySelector('nav .list')
const place = document.querySelector('#living-room .big-room')
const rooms =document.querySelector('.rooms');



listBar.addEventListener('click',()=>{
        list.classList.toggle('show');

})

rooms.addEventListener('click',()=>{
        place.classList.toggle('show');
        rooms.classList.toggle('mblong');
})