const skills = [
  "HTML",
  "CSS",
  "React",
  "Next Js",
  "JavaScript",
  "TypeScript",
  "Tailwind",
  "Redux",
  "React Query",
  "React Router",
  "Styled Component",
  "Swagger",
  "REST APIs",
  "Git",
  "GitLab",
  "GitHub",
];

const skillsList = document.getElementById("skills-list");

skills.forEach((skill, index) => {
  const li = document.createElement("li");
  li.textContent = skill;
  li.style.animationDelay = `${index * 0.2}s`;
  skillsList.appendChild(li);
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => {
  observer.observe(section);
});

const langToggleBtn = document.getElementById("lang-toggle");
const navbar = document.querySelector(".navbar");
const contentBoxes = document.querySelectorAll(".content-box");
const projects = document.querySelectorAll(".project");

let isEnglish = localStorage.getItem("language") === "fa" ? false : true;

function updateLanguageDisplay() {
  const enElements = document.querySelectorAll(".lang-en");
  const faElements = document.querySelectorAll(".lang-fa");

  if (isEnglish) {
    enElements.forEach((el) => (el.style.display = "inline"));
    faElements.forEach((el) => (el.style.display = "none"));
    langToggleBtn.textContent = "English";
    document.documentElement.lang = "en";
    navbar.removeAttribute("dir");
    contentBoxes.forEach((box) => box.removeAttribute("dir"));
    projects.forEach((project) => project.removeAttribute("dir"));
    localStorage.setItem("language", "en");
  } else {
    enElements.forEach((el) => (el.style.display = "none"));
    faElements.forEach((el) => (el.style.display = "inline"));
    langToggleBtn.textContent = "فارسی";
    document.documentElement.lang = "fa";
    navbar.setAttribute("dir", "rtl");
    contentBoxes.forEach((box) => box.setAttribute("dir", "rtl"));
    projects.forEach((project) => project.setAttribute("dir", "rtl"));
    localStorage.setItem("language", "fa");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateLanguageDisplay();
});

langToggleBtn.addEventListener("click", () => {
  isEnglish = !isEnglish;
  updateLanguageDisplay();
});

document.addEventListener("DOMContentLoaded", function () {
  const navBarControl = document.getElementById("navBarControl");

  const burgurMenu = document.getElementById("burgerEvent");

  burgurMenu.addEventListener("click", () => {
    if (navBarControl.classList.contains("navbarTranslateClose")) {
      navBarControl.classList.remove("navbarTranslateClose");
      navBarControl.classList.add("navbarTranslateOpen");
    } else {
      navBarControl.classList.remove("navbarTranslateOpen");
      navBarControl.classList.add("navbarTranslateClose");
    }
  });
});
