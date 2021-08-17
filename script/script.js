// const menu = document.querySelector('.menu'),
//       burger = document.querySelector('.burger'),
//       overlay = document.querySelector('.overlay');
//     //   console.log(overlay)

//     burger.addEventListener('click', ()=>{
//         menu.classList.add('open');
//         overlay.classList.add('open');
//     });

//     overlay.addEventListener('click', ()=>{
//         menu.classList.remove('open');
//         overlay.classList.remove('open');
//     });

    // скролл по якорям
    {
        const anchors = document.querySelectorAll('a[href*="#"]');
        // console.log(anchors)
        for(const anchor of anchors) {
            anchor.addEventListener('click', (e)=>{
                e.preventDefault;
                const blockid = anchor.getAttribute('href');
                // console.log(anchor)
                document.querySelector('' + blockid).scrollIntoView({
                    behavior:'smooth',
                    block:'start'
                })
            })
        }
    }
// кнопка вверх
    
function trackScrill() {
    let scrolled = window.pageXOffset;
    let cords = document.documentElement.clientHeight;
 
    if(scrolled>cords) {
        goTopBtn.classList.add('topButton__show');
    } else {
        goTopBtn.classList.remove('topButton__show');
    }

}
function backToTop(){
    if(window.pageXOffset > 0) {
        window.scrollBy(0,-80);
        setTimeout(backToTop,0)
    }
}
const goTopBtn = document.querySelector('.topButton');
window.addEventListener('scroll',trackScrill);
goTopBtn.addEventListener('click',backToTop);


    