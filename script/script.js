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
    {
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
        
        
    }
    // slider
    {
        {
            class SlideShow {
              constructor(startIndex, element) {
                this.startIndex = startIndex;
                this.currentIndex = this.startIndex;
                this.element = element;
                this.slides = this.element.querySelectorAll('.slideshow__slider');
                
                this.setActiveSlide();
                this.next();
                this.prev();
              }
        
              setActiveSlide() {
                this.slides.forEach((item, index) => {
                  if (index === this.currentIndex
                  ) {
                    item.classList.add('active');
                  }
                  else {
                    item.classList.remove('active');
                  }
                })
              }
        
              next() {
                let nextBtn = this.element.querySelector('[data-way="next"]');
                nextBtn.addEventListener('click', () => {
                  if (this.currentIndex === this.slides.length - 1
                  ) {
                    this.currentIndex = 0;
                  }
                  else {
                    this.currentIndex++;
                  }
                  this.setActiveSlide();
                })
              }
        
              prev() {
                let prevBtn = this.element.querySelector('[data-way="prev"]');
                prevBtn.addEventListener('click', () => {
                  if (this.currentIndex === 0
                  ) {
                    this.currentIndex = this.slides.length - 1;
                  }
                  else {
                    this.currentIndex--;
                  }
                  this.setActiveSlide();
                })
              }
            }
        
            let slideShow = document.querySelectorAll('.slideshow');
            slideShow.forEach(item => {
                new SlideShow(0, item)
              })
          };
       
    }

// filter
{
  const buttons = document.querySelectorAll('.button'); //1
    const cardItem = document.querySelectorAll('.works__col') //5 

    function filter(category, item) { //4
        item.forEach((item) => { //6
            const getFiltrCard = !item.classList.contains(category); //7,8
            const isShowAll = category.toLowerCase() === 'all';//13
            if (getFiltrCard && !isShowAll) {//9,14 если карточка должна быть отфильтрована и пользователь не нажал на all тогда мы что-то скрываем
                item.classList.add('animete')
            } else {
                item.classList.remove('hide');
                item.classList.remove('animete');
            }
        })
    }
    buttons.forEach((btn) => { //2
        btn.addEventListener('click', () => {
            const currentCategory  = btn.dataset.filter//10 
            filter(currentCategory,cardItem);//11 
           
        });
    });

    cardItem.forEach(card=>{//15
        card.ontransitionend = function(){//16
            if(card.classList.contains('anime')) {//17
                card.classList.add('hide')//18
            }
        }
    })
}
    