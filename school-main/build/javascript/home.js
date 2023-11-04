const dropIcon = document.querySelector('.menuIcon');

dropIcon.addEventListener('click',() => {
    let dropMenu = document.querySelector('.hyperlink-part');

    if (dropMenu.classList.contains('menuShow')){
        dropMenu.classList.remove('menuShow');
        dropIcon.innerHTML = '<i class="fa-solid fa-bars"></i>'

    }
    
    else{
        dropMenu.classList.add('menuShow');
        dropIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    }

});

const video = document.querySelector('.draw-intro');

babyeyi.addEventListener('click',() => {
    let video = document.querySelector('.about-video');

    if (video.classList.contains('show')){
        video.classList.remove('show');

    }
    
    else{
        video.classList.add('show');
    }

});


let imgShow = document.querySelector('#show');

imgShow.addEventListener('click',() => {
  let img = document.querySelector('.box');
  if (img.classList.contains('container-show')){
    img.classList.remove('container-show');
    imgShow.innerHTML = `<i class="fa-solid fa-search"></i>`;
  }
  else{
    img.classList.add('container-show');
    imgShow.innerHTML = `<i class="fa-brands fa-facebook"></i>`;
  }
});


