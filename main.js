// typed.js for the role text
document.addEventListener("DOMContentLoaded", function () {
  // initialize Typed
  var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Designer", "ML Entusiast","Competitive Programmer"],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1200,
    loop: true
  });

  // contact form handler (simple client-side mock)
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent actual submit for demo
      const name = form.elements["name"].value.trim();
      const email = form.elements["email"].value.trim();
      const message = form.elements["message"].value.trim();

      if (!name || !email || !message) {
        formMessage.style.color = "salmon";
        formMessage.textContent = "Please fill required fields.";
        return;
      }
      // In a real site: send data to a server or Netlify Forms / Formspree
      formMessage.style.color = "#0ef";
      formMessage.textContent = "Thanks, " + (name.split(" ")[0] || name) + "! Your message has been received.";
      form.reset();

      // hide message after 5s
      setTimeout(() => (formMessage.textContent = ""), 5000);
    });
  }

  // back-to-top button visibility
  const topBtn = document.querySelector(".top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      topBtn.style.opacity = "1";
      topBtn.style.pointerEvents = "auto";
    } else {
      topBtn.style.opacity = "0";
      topBtn.style.pointerEvents = "none";
    }
  });

  // smooth scroll behavior for internal links (already CSS but ensure for JS-handled anchors)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      // allow default if linking to top/home anchor is fine
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });
});
// Highlight active nav link on scroll
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section[id]");
  let navLinks = document.querySelectorAll(".navbar a");

  let scrollY = window.scrollY + 150; // adjust offset for header height

  sections.forEach(section => {
    let sectionTop = section.offsetTop;
    let sectionHeight = section.offsetHeight;
    let id = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});
