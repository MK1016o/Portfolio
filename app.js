// Tab Switching
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-tab");

      // reset buttons
      tabs.forEach((t) => t.classList.remove("bg-purple-600", "text-white"));
      tabs.forEach((t) => t.classList.add("bg-gray-800"));

      tab.classList.add("bg-purple-600", "text-white");

      // toggle content
      contents.forEach((c) => c.classList.add("hidden"));
      document.getElementById(target).classList.remove("hidden");
    });
  });

  // Typing Effect
    const words = ["Full Stack Developer", "Problem Solver", "Tech Enthusiast"];
    let i = 0, j = 0, currentWord = "", isDeleting = false;
    function type() {
      currentWord = words[i];
      document.getElementById("typing").textContent =
        isDeleting ? currentWord.substring(0, j--) : currentWord.substring(0, j++);
      if (!isDeleting && j === currentWord.length + 1) {
        isDeleting = true; setTimeout(type, 1500);
      } else if (isDeleting && j === 0) {
        isDeleting = false; i = (i + 1) % words.length; setTimeout(type, 200);
      } else { setTimeout(type, isDeleting ? 50 : 100); }
    }
    type();
    // Mobile toggle
  const toggleButton = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  toggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
      mobileMenu.classList.remove('show');
    });
  });

  // Scroll events: navbar background + active link
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {

    // Active section
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks.forEach(link => {
      const section = document.querySelector(link.getAttribute('href'));
      if(section) {
        const offsetTop = section.offsetTop - 100;
        const offsetBottom = offsetTop + section.offsetHeight;
        if(window.scrollY >= offsetTop && window.scrollY < offsetBottom){
          link.classList.add('active');
        }
      }
    });
  });