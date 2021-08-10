const menu = document.querySelector('.menu'),
      burger = document.querySelector('.burger'),
      overlay = document.querySelector('.overlay');
    //   console.log(overlay)

    burger.addEventListener('click', ()=>{
        menu.classList.add('open');
        overlay.classList.add('open');
    });

    overlay.addEventListener('click', ()=>{
        menu.classList.remove('open');
        overlay.classList.remove('open');
    });