document.addEventListener("DOMContentLoaded", function(){
  //Homepage
  document.querySelector(".about-me").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("About Me clicked");
    const aboutMeElement = document.querySelector(".AboutMe");
    console.log("AboutMe element:", aboutMeElement);
    aboutMeElement.scrollIntoView({behavior: "smooth"});
  });
  
  document.querySelector(".Skills-nav").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    console.log("Skills clicked");
    const skillsElement = document.querySelector(".Skills");
    console.log("Skills element:", skillsElement);
    skillsElement.scrollIntoView({ behavior: "smooth" }); 
  });
  
  document.querySelector(".Projects").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    console.log("Projects clicked");
    const skillsElement = document.querySelector(".projects");
    console.log("Projects element:", skillsElement);
    skillsElement.scrollIntoView({ behavior: "smooth" }); 
  });

  document.querySelector(".Contact-Me").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    console.log("Contact-Me clicked");
    const skillsElement = document.querySelector(".ContactMe");
    console.log("Projects element:", skillsElement);
    skillsElement.scrollIntoView({ behavior: "smooth" }); 
  });
  //About Me
  document.querySelector("#Home").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    console.log("Projects clicked");
    const skillsElement = document.querySelector(".Hero");
    console.log("Projects element:", skillsElement);
    skillsElement.scrollIntoView({ behavior: "smooth" }); 
  });
  document.querySelector("#skills").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    console.log("Skills clicked");
    const skillsElement = document.querySelector(".Skills");
    console.log("Skills element:", skillsElement);
    skillsElement.scrollIntoView({ behavior: "smooth" }); 
  });
  document.querySelector("#projects2").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    console.log("Projects clicked");
    const skillsElement = document.querySelector(".projects");
    console.log("Projects element:", skillsElement);
    skillsElement.scrollIntoView({ behavior: "smooth" }); 
  });
  document.querySelector("#contactme").addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    console.log("Contact-Me clicked");
    const skillsElement = document.querySelector(".ContactMe");
    console.log("Projects element:", skillsElement);
    skillsElement.scrollIntoView({ behavior: "smooth" }); 
  });
})



const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].clientWidth;

const sliderNav = document.querySelector('.slider-nav');
const navButtons = sliderNav.querySelectorAll('a');

let currentIndex = 0;

function updateSliderPosition(index) {
  slider.style.transform = `translateX(-${index * slideWidth}px)`;
}

function updateNavButtons(index) {
  navButtons.forEach((button, i) => {
    if (i === index) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

function next() {
  currentIndex = (currentIndex + 0.5) % slides.length;
  updateSliderPosition(currentIndex);
  updateNavButtons(currentIndex);
}

function prev() {
  currentIndex = (currentIndex - 0.5 + slides.length) % slides.length;
  updateSliderPosition(currentIndex);
  updateNavButtons(currentIndex);
}

updateNavButtons(currentIndex);

document.querySelector('.prev').addEventListener('click', prev);
document.querySelector('.next').addEventListener('click', next);

sliderNav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    const slideNumber = parseInt(e.target.dataset.slide);
    currentIndex = slideNumber - 1;
    updateSliderPosition(currentIndex);
    updateNavButtons(currentIndex);
  }
});

//Project Section
const projectSlider = document.querySelector('.project-slider');
const projectSlides = document.querySelectorAll('.project-slide');
const projectSlideWidth = projectSlides[0].clientWidth;

const projectSliderNav = document.querySelector('.project-slider-nav');
const projectNavButtons = projectSliderNav.querySelectorAll('a');

let currentProjectIndex = 0;

function updateProjectSliderPosition(index) {
  projectSlider.style.transform = `translateX(-${index * projectSlideWidth}px)`;
}

function updateProjectNavButtons(index) {
  projectNavButtons.forEach((button, i) => {
    if (i === index) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

function prevProject() {
  currentProjectIndex = (currentProjectIndex + 1) % projectSlides.length;
  updateProjectSliderPosition(currentProjectIndex);
  updateProjectNavButtons(currentProjectIndex);
}

function nextProject() {
  currentProjectIndex = (currentProjectIndex - 1 + projectSlides.length) % projectSlides.length;
  updateProjectSliderPosition(currentProjectIndex);
  updateProjectNavButtons(currentProjectIndex);

}

updateProjectNavButtons(currentProjectIndex);

document.querySelector('.prev-project').addEventListener('click', prevProject);
document.querySelector('.next-project').addEventListener('click', nextProject);

projectSliderNav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    const slideNumber = parseInt(e.target.dataset.slide);
    currentProjectIndex = slideNumber - 1;
    updateProjectSliderPosition(currentProjectIndex);
    updateProjectNavButtons(currentProjectIndex);
  }
});
