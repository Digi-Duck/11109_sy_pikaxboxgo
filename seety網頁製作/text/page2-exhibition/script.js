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

const dataObj = async function () {
  const response = await fetch('./dev-data/data.json').then();
  const datas = await response.json();
  console.log(datas);
  renderContent = '';

  datas.forEach((data) => {
    console.log(data);
    let renderContent = document.querySelector('.render-zone');
    // renderContent.innerHTML = '';
    renderContent.innerHTML += `
    <figure class="information-card">
          <div class="container">
            <div class="image-area"><img src="${data.image}" alt="圖"></div>
            <div class="content-area">
              <h1>${data.exhibitionName}</h1>
              <h4>表演者 : ${data.performer}</h4>
              <p>${data.date.begin
                .replace(',', '年')
                .replace(',', '月')
                .concat('日')}</p>
              <a href="">詳細資訊</a>
            </div>
          </div>
        </figure>
    `;
  });
};

dataObj();
