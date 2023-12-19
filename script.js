/* mobile menu */
const burgerMenu = document.querySelector('.burgerIcon');
const header = document.querySelector('.headerContainer');
const links = document.querySelectorAll('nav  ul  li  a');

let image = burgerMenu.getAttribute('src');
burgerMenu.addEventListener('click', () => {
  if (image === 'image/burgerMenu.svg') {
    burgerMenu.setAttribute('src', 'image/x.svg');
    image = burgerMenu.getAttribute('src');
  } else if (image === 'image/x.svg') {
    burgerMenu.setAttribute('src', 'image/burgerMenu.svg');
    image = burgerMenu.getAttribute('src');
  }
  header.classList.toggle('nav-mobile');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    if (image === 'image/burgerMenu.svg') {
      burgerMenu.setAttribute('src', 'image/x.svg');
      image = burgerMenu.getAttribute('src');
    } else if (image === 'image/x.svg') {
      burgerMenu.setAttribute('src', 'image/burgerMenu.svg');
      image = burgerMenu.getAttribute('src');
    }
    header.classList.remove('nav-mobile');
  });
});

// datas for the project/works section
const projects = [
  {
    name: 'Ethio Tech',
    subHeading: 'EMOPOWERING INNOVATION',
    image: 'image/b-2.png',
    description: 'Ethio Tech is a dynamic and forward-thinking technology company that is revolutionizing industries through innovative solutions. With a diverse team of talented professionals, we combine cutting-edge technologies, strategic thinking, and creative expertise to deliver transformative results.',
    technologies: ['ReactJS', 'Redux', 'ExpressJS', 'PostgreSQL'],
    detail: ['Full Stack Dev', '2023'],
    demo: 'https://eat-k84f.onrender.com/',
    sourceCode: 'https://github.com/isume295/ethio-tech-addis',
  },
  {
    name: 'K Hotel',
    subHeading: 'Enjoy Life!',
    image: 'image/hotel.png',
    description: 'Hotel website that lets users get timely information and book different rooms.',
    technologies: ['React', 'css', 'scss', 'javaScript'],
    detail: ['Front End Dev', '2023'],
    demo: 'https://master--mellifluous-custard-e68e03.netlify.app/',
    sourceCode: 'https://github.com/yohanna4/Hotel-Project',
  },
];

// synamically create the project/works section
const workPage = document.getElementById('works');
const div = document.createElement('div');
div.className = 'worksGridContainer';
workPage.appendChild(div);

div.innerHTML = projects.reduce((output, project) => (
  `${output
  }
  
<div class="worksFlexContainer">
<div class="workImgContainer">
 <img class="workImg" src=${project.image} alt="project 1">
</div>
<div class="workDetailContainer">
 <h3 id="h" class="projecTitle txtWrapper">${project.name}</h3>
 <div class="canopyContainer">
 <h4>${project.subHeading}</h4>
 <ol class="projectOrderedList">
  <li>${project.detail[0]}</li>
  <li>${project.detail[1]}</li>
 </ol>
 </div>
 <p class="projectDetail txtWrapper">${project.description.split(' ').slice(0, 20).join(' ')} .......</p>
 <ul class="projectUnorderdList">
  <li>${project.technologies[0]}</li>
  <li class="mobileNone">${project.technologies[1]}</li>
  <li>${project.technologies[2]}</li>
  <li>${project.technologies[3]}</li>
 </ul>
 <div class="btnWrapper">
 <button class="btn-project project1">See Project</button>
</div>
</div>
</div>
`
), '');

const reverse = document.querySelectorAll('.worksFlexContainer');
reverse.forEach((rev, index) => {
  if (index % 2 !== 0) {
    rev.classList.toggle('flexReverse');
  }
});

const modalPage = document.getElementById('modal');
const modalDiv = document.createElement('div');
modalDiv.className = 'modal-main-container';
modalPage.appendChild(modalDiv);
const seeProjectBtn = document.querySelectorAll('.project1');
const modal = document.querySelector('.modal-main-container');

seeProjectBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    modalDiv.innerHTML = `
    
    <div class="modal-container">
    <div class="close-btn">
      <h3 class="projecTitle">${projects[index].name}</h3>
      <img src="image/close.svg" alt=""> 
    </div>
    <div class="modal-heading canopyContainer">
      <h4>${projects[index].subHeading}</h4>
      <ol class="projectOrderedList">
       <li>${projects[index].detail[0]}</li>
       <li>${projects[index].detail[1]}</li>
      </ol>
    </div>
    <div class="modal-img">
      <img src=${projects[index].image} alt="">
    </div>
    <div>
    <div class="modal-detail">
    <p class="projectDetail txt-width">${projects[index].description}</p>
     
    <div class="modal-btn-container">
      <ul class="projectUnorderdList">
        <li>${projects[index].technologies[0]}</li>
        <li class="mobileNone">${projects[index].technologies[1]}</li>
        <li>${projects[index].technologies[2]}</li>
        <li>${projects[index].technologies[3]}</li>
      </ul>
      <div class="btn">
        <div class="btnWrapper modal-btn">
          <button class="btn-project"><a class="live project-link" href=${projects[index].demo} target="_blank">See live</a><img src="image/live.svg" alt=""></button>
          <button class="btn-project"><a class="source project-link" href=${projects[index].sourceCode} target="_blank">See source</a><img src="image/source.svg" alt=""></button>
         </div>
      </div>
    </div>
    

  </div>
     
    `;

    modal.classList.toggle('active');
    const modalCloseBtn = document.querySelector('.modal-main-container .close-btn img');
    modalCloseBtn.addEventListener('click', () => {
      modal.classList.toggle('active');
    });
  });
});

const form = document.querySelector('form');
const email = document.querySelector('#email');
const emailError = document.querySelector('.error');

form.addEventListener('submit', (event) => {
  const validEmail = email.value.toLowerCase();
  emailError.textContent = '';
  if (email.value !== validEmail) {
    event.preventDefault();
    const message = document.createTextNode('Email Must be lowercase');
    emailError.appendChild(message);
    emailError.style.color = 'white';
  }
});

const inputEmail = document.querySelector('#email');
const inputName = document.querySelector('#name');
const inputMessage = document.querySelector('#message');
const savedData = localStorage.getItem('contact-data');
const formData = savedData ? JSON.parse(savedData) : {};

const saveFormData = () => {
  localStorage.setItem('contact-data', JSON.stringify(formData));
};

inputName.addEventListener('input', () => {
  formData.name = inputName.value;
  saveFormData();
});

inputMessage.addEventListener('input', () => {
  formData.message = inputMessage.value;
  saveFormData();
});

inputEmail.addEventListener('input', () => {
  formData.email = inputEmail.value;
  saveFormData();
});

inputName.value = formData.name || '';
inputMessage.value = formData.message || '';
inputEmail.value = formData.email || '';

function toggleContent(id, type) {
  const content = document.getElementById(id);
  const img = document.querySelector(`.${type} img`);
  const div = document.querySelector(`.${type}`);

  if (content.style.display === 'none') {
    content.style.display = 'flex';
    div.classList.remove('border');
    img.src = 'image/Union2.svg'; // Set the src attribute of the image to the desired path
  } else {
    content.style.display = 'none';
    img.src = 'image/Union.svg';
    div.classList.add('border');
  }
}

if (0 > 1) {
  toggleContent();
}