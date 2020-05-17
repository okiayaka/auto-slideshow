'use strict'
{

  // 画像を配列で取得。images[currentIndex]で画像切り替え。
  const images = [
    'img/pig1.jpg',  // 0
    'img/pig2.jpg',  // 1
    'img/pig3.jpg'   // 2
  ];

  // 画像初期は０。
  let currentIndex = 0;

  
  const mainImage = document.getElementById('main');
  mainImage.src = images[currentIndex];


  // nevtボタンを押した時
  const nextBtn = document.getElementById('next');
  nextBtn.addEventListener('click', () => {
    // let target = currentIndex + 1;
    // if (target === images.length) {
    //   target = 0;
    // }
    // currentIndex ++ ;
    // if (currentIndex === images.length) {
    //   currentIndex = 0;
      if (currentIndex < images.length -1) {
        currentIndex + 1;
      } else if (currentIndex === images.length -1) {
        currentIndex = 0;
      }
      // ボタンが押されたか反応をみるため
      console.log("click!")
  })

  // prevボタンを押した時
  const prevBtn = document.getElementById('prev');
  prevBtn.addEventListener('click', () => {
    if (currentIndex === 0) {
      currentIndex = images.length -1;
    } else if (currentIndex > 0) {
      currentIndex --;
    }
  })

}