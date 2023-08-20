const navHome = document.querySelector('.nav-home');
const navAbout = document.querySelector('.nav-about');
const navSkill = document.querySelector('.nav-skill');
const navEducation = document.querySelector(".nav-edu");
const navProject = document.querySelector('.nav-project');
const navContact = document.querySelector('.nav-contact');
const btn = document.querySelector('.btn-about');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const skill = document.querySelector('.skills');
const education = document.querySelector(".education");
const project = document.querySelector('.projects');
const contact = document.querySelector('.contacts');
const nav = document.querySelector('.nav');
const skillContainer = document.querySelector('.skill-container');

const navLists = document.querySelectorAll('.navlist');

const mediaQuery = window.matchMedia('(max-width: 896px)');


function liSkill(src, data) {
    const li = document.createElement('li');
    li.classList.add('skill-list')
    const img = document.createElement('img')
    img.setAttribute('src', src);
    img.classList.add('media-skill-img');
    const para = document.createElement('p');
    para.innerText = data;
    para.style.fontSize = '1.5rem';
    li.appendChild(img);
    li.appendChild(para);
    return li;

}

function skillMedia() {
    const ul = document.createElement('ul');
    ul.appendChild(liSkill('html.png', 'HTML'));
    ul.appendChild(liSkill('css.png', 'CSS'));
    ul.appendChild(liSkill('js.png', 'Java Script'));
    ul.appendChild(liSkill('python.png', 'Python'));
    ul.appendChild(liSkill('c.png', 'C'));
    ul.appendChild(liSkill('c++.png', 'C++'));
    ul.appendChild(liSkill('java.png', 'Java'));
    ul.appendChild(liSkill('mySQL.png', 'MySQL'));
    ul.appendChild(liSkill('git.png', 'GIT'));
    ul.appendChild(liSkill('github.png', 'GitHub'));
    skillContainer.innerHTML = '';
    skillContainer.append(ul);
}

window.addEventListener('resize',() => {
    if(window.matchMedia('(max-width: 623px)').matches) {
        console.log(skillContainer);
        skillMedia();
    } else {
        skillContainer.innerHTML = `<div class="box">
        <img src="html.png" alt="HTML" />
        <p>HTML</p>
      </div>
      <div class="box">
        <img src="css.png" alt="CSS" />
        <p>CSS</p>
      </div>
      <div class="box">
        <img src="bootstrap.png" alt="BootStrap" />
        <p>BootStrap</p>
      </div>
      <div class="box">
        <img src="js.png" alt="JS" />
        <p>Java Script</p>
      </div>
      <div class="box">
        <img src="python.png" alt="Python" />
        <p>Python</p>
      </div>
      <div class="box">
        <img src="c.png" alt="C" />
        <p>C</p>
      </div>
      <div class="box">
        <img src="c++.png" alt="C++" />
        <p>C++</p>
      </div>
      <div class="box">
        <img src="java.png" alt="Java" />
        <p>Java</p>
      </div>
      <div class="box">
        <img src="mySQL.png" alt="MySQL" />
        <p>MySQL</p>
      </div>
      <div class="box">
        <img src="git.png" alt="GIT" />
        <p>GIT</p>
      </div>
      <div class="box">
        <img src="github.png" alt="GitHub" />
        <p>GitHub</p>
      </div>`
        ;
    }
})

function addNav() {
    for(let i = 0; i < navLists.length; i ++) {
        navLists[i].classList.add('navigat')
    }
}
function removeNav() {
    for(let i = 0; i < navLists.length; i ++) {
        navLists[i].classList.remove('navigat');
    }
}

function none() {
    home.classList.add('none');
    about.classList.add('none');
    skill.classList.add('none');
    education.classList.add('none');
    project.classList.add('none');
    contact.classList.add('none');
}
function mediaIcon() {
    navHome.innerHTML = '<i class="fa-solid fa-house"></i>';
    navAbout.innerHTML = '<i class="fa-solid fa-user"></i>';
    navSkill.innerHTML = '<i class="fa-solid fa-briefcase"></i>';
    navEducation.innerHTML = '<i class="fa-solid fa-user-graduate"></i>';
    navProject.innerHTML = '<i class="fa-solid fa-diagram-project"></i>';
    navContact.innerHTML = '<i class="fa-solid fa-paper-plane"></i>';
}
function mediaText() {
    navHome.innerText = 'Home';
    navAbout.innerText = 'About';
    navSkill.innerText = 'Skills';
    navEducation.innerText = 'Education';
    navProject.innerText = 'Projects';
    navContact.innerText = 'Contact';
}

window.addEventListener('resize', () => {
    if(window.matchMedia('(max-width: 896px)').matches) {
        none();
        home.classList.remove('none');
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
        navSkill.addEventListener('click', () => {
            none();
            skill.classList.remove('none');
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
        addNav();
    } else {
        nav.classList.remove('nav-media');
        removeNav();
        mediaText();
        home.classList.remove('none');
        about.classList.remove('none');
        skill.classList.remove('none');
        education.classList.remove('none');
        project.classList.remove('none');
        contact.classList.remove('none');
    
    }
})