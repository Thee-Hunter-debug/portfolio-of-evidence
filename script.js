
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");

  if (window.scrollY > 50) {
    nav.classList.add(
      "bg-surface/90",
      "backdrop-blur-md",
      "border-b",
      "border-white/5"
    );
  } else {
    nav.classList.remove(
      "bg-surface/90",
      "backdrop-blur-md",
      "border-b",
      "border-white/5"
    );
  }
});


const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});


const projects = [
  {
    title: "WE INNOVATE",
    tags: ["Android Studio", "Java", "SQLite"],
    desc: "A comprehensive innovation platform for entrepreneurs featuring real-time collaboration tools and project tracking.",
    img: "",
    github: "https://github.com/Thee-Hunter-debug",
    status: "Completed",
  },
  {
    title: "Eco Grd12",
    tags: ["Android Studio", "Kotlin", "SQLite"],
    desc: "Grade 12 Economics based game application",
    img: "",
    github: "https://github.com/Thee-Hunter-debug",
    status: "In Progress",
  },
  {
    title: "Task Management Tool",
    tags: ["Node.js","Express.js", "PostgreSQL", "HTML", "TailWind"],
    desc: "Collaborative task manager for remote teams with drag-and-drop boards and time tracking.",
    img: "/assets/taskman.png",
    github: "https://github.com/Thee-Hunter-debug/todo-app",
    status: "Completed",
  },
  {
    title: "Portfolio Dashboard",
    tags: ["HTML", "JavaScript", "TailWind"],
    desc: "Analytics dashboard for tracking portfolio performance with interactive charts.",
    img: "/assets/poe.png",
    github: "https://github.com/Thee-Hunter-debug/poe",
    status: "Completed",
  },
];


const projectsGrid = document.getElementById("projects-grid");

projects.forEach((p) => {
  projectsGrid.innerHTML += `
    <div class="project-card rounded-xl overflow-hidden">
      <div class="aspect-video relative overflow-hidden">
        <img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover">
        <span class="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
          p.status === "Completed"
            ? "bg-green-500/20 text-green-400 border border-green-500/30"
            : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
        }">
          ${p.status}
        </span>
      </div>
      <div class="p-6">
        <div class="flex flex-wrap gap-2 mb-3">
          ${p.tags
            .map(
              (t) =>
                `<span class="text-[10px] font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2 py-1 rounded">${t}</span>`
            )
            .join("")}
        </div>
        <h3 class="text-lg font-bold text-white mb-2">${p.title}</h3>
        <p class="text-gray-400 text-sm mb-4">${p.desc}</p>
        <a href="${p.github}" target="_blank" class="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-semibold">
          View on GitHub
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
        </a>
      </div>
    </div>
  `;
});


document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const btn = e.target.querySelector("button");
  btn.textContent = "Message Sent!";
  btn.classList.add("bg-green-600");

  setTimeout(() => {
    btn.textContent = "Send Message";
    btn.classList.remove("bg-green-600");
    e.target.reset();
  }, 3000);
});


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      mobileMenu.classList.add("hidden");
    }
  });
});