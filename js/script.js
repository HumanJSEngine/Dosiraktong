/** @format */

window.onload = function () {
  // 상단 스크롤 기능
  const header = document.querySelector('.header');
  const mbt = document.querySelector('.mbt');
  let scy = 0;
  // 새로 고침 / URL 입력해서 html 출력시
  // 1. 스크롤바의 픽셀 위치값을 파악해서
  scy = window.document.documentElement.scrollTop;
  // 2. class 적용 여부결정
  if (scy > 0) {
    // 스크롤이 된 상태로 새로고침 됨.
    header.classList.add('active');
    mbt.classList.add('active');
  }

  window.addEventListener('scroll', function () {
    // 스크롤 이동 픽셀값
    scy = this.document.documentElement.scrollTop;
    if (scy > 0) {
      // 스크롤이 되었다면
      header.classList.add('active');
      mbt.classList.add('active');
    } else {
      // 스크롤이 되지 않은 상태이면서 !!!!!!
      const state = navMb.classList.contains('active');
      if (state) {
        // 만약에 모바일 메뉴가 펼쳐진 상태라면
        header.classList.add('active');
        mbt.classList.add('active');
      } else {
        // 그렇지 않다면 원래대로 처리하고..
        header.classList.remove('active');
        mbt.classList.remove('active');
      }
    }
  });

  // 모바일 메뉴 클릭 처리
  const htmlRoot = document.querySelector('html');
  const navMb = document.querySelector('.nav-mb');

  mbt.addEventListener('click', function () {
    // 현재 ani 클래스가 있는지 없는지 파악
    const state = this.classList.contains('ani');
    if (state) {
      this.classList.remove('ani');
      htmlRoot.classList.remove('active');
      navMb.classList.remove('active');
      if (scy > 0) {
        header.classList.add('active');
        mbt.classList.add('active');
      } else {
        header.classList.remove('active');
        mbt.classList.remove('active');
      }
    } else {
      this.classList.add('ani');
      htmlRoot.classList.add('active');
      navMb.classList.add('active');
      header.classList.add('active');
      mbt.classList.add('active');
    }
  });

  let winW = window.innerWidth;
  window.addEventListener('resize', function () {
    winW = window.innerWidth;
    if (winW > 1024) {
      mbt.classList.remove('ani');
      htmlRoot.classList.remove('active');
      navMb.classList.remove('active');
      if (scy > 0) {
        header.classList.add('active');
        mbt.classList.add('active');
      } else {
        header.classList.remove('active');
        mbt.classList.remove('active');
      }
    }
  });

  //비주얼 슬라이드
  //슬라이드 개수 만큼 li를 생성하기
  const swSlideCount = document.getElementsByClassName('swiper-slide').length;

  const swSlidePgUl = document.querySelector('.sw-visual-pg-list');
  let swVisualHtml = ``;
  for (let i = 0; i < swSlideCount; i++) {
    swVisualHtml += `<li>${i + 1}</li>`;
  }
  swSlidePgUl.innerHTML = swVisualHtml;

  //페이지네이션 관련
  const swVisualPgLi = document.querySelectorAll('.sw-visual-pg-list > li');

  const swiper = new Swiper('.sw-visual', {
    effect: 'fade',
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    navigation: {
      nextEl: '.sw-visual-prev',
      prevEl: '.sw-visual-next',
    },
  });
  swiper.on('init', function () {
    swVisualPgLi[0].classList.add('active');
  });
  swiper.on('slideChange', function () {
    swVisualPgLi.forEach((item, index) => {
      if (swiper.realIndex === index) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  });

  swVisualPgLi.forEach((item, index) => {
    item.addEventListener('click', function (){
      //slideTo를 이용하면 원하는 페이지로 이동가능
      //slideTo(index, speed, runCallbacks)
      if(index === 0) {
        index = 1;
      }
      swiper.slideTo(index, 0, false);
    });
  });
};
