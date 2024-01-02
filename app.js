const navHome = document.querySelector('.nav-home');
const navAbout = document.querySelector('.nav-about');
const navEducation = document.querySelector(".nav-edu");
const navProject = document.querySelector('.nav-project');
const navContact = document.querySelector('.nav-contact');

const btn = document.querySelector('.btn-about');

const home = document.querySelector('.home');
const about = document.querySelector('.about');
const education = document.querySelector(".education");
const project = document.querySelector('.projects');
const contact = document.querySelector('.contacts');

const nav = document.querySelector('.nav');

const navLists = document.querySelectorAll('.navlist');

const burger = document.querySelector('.hamburger');
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')


let start = 1;

function addNavigat() {
    for(let i = 0; i < navLists.length; i ++) {
        navLists[i].classList.add('navigat')
    }
}
function removeNavigat() {
    for(let i = 0; i < navLists.length; i ++) {
        navLists[i].classList.remove('navigat');
    }
}
function removeNavList() {
  for(let i = 0; i < navLists.length; i ++) {
    navLists[i].classList.toggle('none');
  }
}

const navigation = [home, about, education, project, contact]

// Display None
function none() {
  for(let i = 0; i < navigation.length; i++) {
    navigation[i].classList.add('none');
  }
}
function removeNone() {
  for(let i = 0; i < navigation.length; i++) {
    navigation[i].classList.remove('none');
  }
}

function mediaIcon() {
  navHome.innerHTML = '<i class="fa-solid fa-house"></i>';
  navAbout.innerHTML = '<i class="fa-solid fa-user"></i>';
  navEducation.innerHTML = '<i class="fa-solid fa-user-graduate"></i>';
  navProject.innerHTML = '<i class="fa-solid fa-diagram-project"></i>';
  navContact.innerHTML = '<i class="fa-solid fa-paper-plane"></i>';
}

function mediaText() {
  navHome.innerText = 'HOME';
  navAbout.innerText = 'ABOUT';
  navEducation.innerText = 'EDUCATION';
  navProject.innerText = 'PROJECTS';
  navContact.innerText = 'CONTACT';
}
  
const mediaQuery = () => {
    const screenWidth = window.innerWidth;
    if(screenWidth <= 703) {
      nav.classList.remove('nav-media');
      removeNavigat();
      mediaText();
      removeNone();
      start = 1;
      burger.classList.remove('none')
    }
    else if(screenWidth <= 896 && screenWidth >= 704) {
      if(start == 1) {
        none();
        home.classList.remove('none');
        start ++;  
      }
      removeNavList()
      mediaIcon();
      navHome.addEventListener('click', () => {
        none();
        home.classList.remove('none');
      })
      navAbout.addEventListener('click', () => {
        none();
        about.classList.remove('none');
      })
      btn.addEventListener('click', () => {
        none();
        about.classList.remove('none');
      })
      navEducation.addEventListener('click', () => {
        none();
        education.classList.remove('none');
      })
      navProject.addEventListener('click', () => {
        none();
        project.classList.remove('none');
      })
      navContact.addEventListener('click', () => {
        none();
        contact.classList.remove('none');
      })
      nav.classList.add('nav-media');
      addNavigat();
      burger.classList.add('none')

    } else if (screenWidth >= 704) {
      nav.classList.remove('nav-media');
      removeNavigat();
      removeNavList()
      mediaText();
      removeNone();
      start = 1;
      burger.classList.add('none')
    }
}
mediaQuery();
window.addEventListener('resize', mediaQuery);
burger.addEventListener('click', () => {
  removeNavList()
  line1.classList.toggle('left')
  line2.classList.toggle('none')
  line3.classList.toggle('right')
})
removeNavList()