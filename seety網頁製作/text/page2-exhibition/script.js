const banner = document.querySelector('.banner');
const saturn = document.querySelector('.back-to-top');
const blockAll = document.querySelector('.block-all');

// functions
window.addEventListener('scroll', () => {
  let scrollHeight = parseInt(window.scrollY);
  let bannerHeight = parseInt(banner.offsetHeight);
  // console.log(scrollHeight);
  if (scrollHeight >= bannerHeight) {
    saturn.classList.add('appear');
  } else {
    saturn.classList.remove('appear');
  }
});

blockAll.addEventListener('click', () => {
  if (blockAll.classList.contains('show')) {
    blockAll.classList.remove('show');
  }
});

let showArr = [];

const dataObj = async function () {
  const response = await fetch('./dev-data/data.json').then();
  const datas = await response.json();
  console.log(datas);
  renderContent = '';

  datas.forEach((data) => {
    // console.log(data);
    let renderContent = document.querySelector('.render-zone');
    showArr.push(`
    <div class="image-area"><img src="${data.image}" alt="圖"></div>
            <div class="content-area">
              <h1>${data.exhibitionName}</h1>
              <h4>表演者 : ${data.performer}</h4>
              <p>${data.performerDescription}</p>
              <p>${data.date.begin
                .replace(',', '年')
                .replace(',', '月')
                .concat('日')}</p>
              <p>${data.description}</p>
            </div>
    `);
    renderContent.innerHTML += `<figure class="information-card"><div class="container"><div class="image-area"><img src="${
      data.image
    }" alt="圖"></div><div class="content-area"><h1>${
      data.exhibitionName
    }</h1><h4>表演者 : ${data.performer}</h4><p>${data.date.begin
      .replace(',', '年')
      .replace(',', '月')
      .concat('日')}</p><button data-id="${
      data.id
    }"class="alink">詳細資訊</button></div></div></figure>`;
  });
  const alink = document.querySelectorAll('.alink');
  alink.forEach((link) => {
    link.addEventListener('click', () => {
      blockAll.classList.add('show');
      blockAll.innerHTML = `${showArr[link.dataset.id]}`;
    });
  });
  console.log(showArr);
};

dataObj();
