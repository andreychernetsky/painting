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
  const buttons = document.querySelectorAll('.works__nav-link');
  // console.log(buttons);
  const cardItem = document.querySelectorAll('.works__col');
  // console.log(cardItem);

  function filter(category,item){
   item.forEach(elem=>{
     const isFilterNot = !elem.classList.contains(category);
     console.log(isFilterNot);
   })
  }

  buttons.forEach(btn=>{
    btn.addEventListener('click',()=>{
      // console.log(btn.dataset.filter);
      const getFilter = btn.dataset.filter;
      filter(getFilter,cardItem)
    })
  })
}
    