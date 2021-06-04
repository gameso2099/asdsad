let loading = document.querySelector('.loading');
let body = document.querySelector('body>section')
setTimeout(() => {
  loading.setAttribute('class', 'loading hide');
  body.setAttribute('class','d-block')
}, 4000);
{
  var mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}

let li = document.querySelectorAll('.point li')
let midhead = document.querySelector('.midhead');
let logo = document.querySelector('.navbar-brand img')
window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if(scroll > 45){ 
    midhead.firstElementChild.classList.add('fixed-top');
    logo.setAttribute('src','/public/img/logo2.png')
    for (let i = 0; i < li.length; i++) {
      const e = li[i];
      e.firstElementChild.classList.add('fontwq')
    }
  }
  else{
    midhead.firstElementChild.classList.remove('fixed-top');
    logo.setAttribute('src','/public/img/logo1.png')
    for (let i = 0; i < li.length; i++) {
      const e = li[i];
      e.firstElementChild.classList.remove('fontwq')
    }
  }
});

const myRange = document.getElementById('myRange');



