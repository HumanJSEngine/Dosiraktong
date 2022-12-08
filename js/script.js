window.onload = function () {
    //상단 스크롤 기능
    const header = document.querySelector('.header');
    const mbt = document.querySelector('.mbt');

    let scy = 0;
    window.addEventListener('scroll', function() {
        scy = this.document.documentElement.scrollTop;
        if (scy > 0) {
            header.classList.add('active');
            mbt.classList.add('active');
        }else{
            header.classList.remove('active');
            mbt.classList.remove('active');
        }
    });

    const htmlRoot = document.querySelector('html')
    mbt.addEventListener('click', function() {
       const state = this.classList.contains('ani');
        if (state) {
            this.classList.remove('ani');
            htmlRoot.classList.remove('active');
        }else{
            this.classList.add('ani');
            htmlRoot.classList.add('active');
        }
    });

    let winW = window.innerWidth;
    window.addEventListener('resize', function () {
        //웹브라우저 안쪽 너비
        winW = window.innerWidth;
        (winW > 1024) ? (mbt.classList.remove('ani'), htmlRoot.classList.remove('active')) : 
    });

};