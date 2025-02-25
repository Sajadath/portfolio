const skills = [
  "React",
  "HTML",
  "CSS",
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

// Smooth scrolling for nav links
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

// In-view animations
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});
