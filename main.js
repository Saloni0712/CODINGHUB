// Change navbar styles on scroll

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle
  ('window-scroll', window.scrollY > 0)
});

// show/hide faq answer
const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
  faq.addEventListener("click", () => {
      faq.classList.toggle("open");

      // change icon
      const icon = faq.querySelector(".faq__icon i");
      if(icon.className === "uil uil-plus") {
          icon.className = "uil uil-minus"
      } else {
          icon.className = "uil uil-plus";
      }
  });
});

// show/hide nav menu

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  closeBtn.style.display ="none";
  menuBtn.style.display = "inline-block";
})


//   redirect in form 
  document.addEventListener("DOMContentLoaded", function() {
      const tabs = document.querySelectorAll('.tab');
      const tabContent = document.querySelectorAll('.tab-content > div');

      tabs.forEach(tab => {
          tab.addEventListener('click', function() {
              // Remove active class from all tabs and hide all content
              tabs.forEach(t => t.classList.remove('active'));
              tabContent.forEach(content => content.style.display = 'none');

              // Add active class to the clicked tab
              this.classList.add('active');

              // Show the corresponding content
              const targetId = this.querySelector('a').getAttribute('href');
              document.querySelector(targetId).style.display = 'block';
          });
      });

      // Initially hide all tab contents except the first one
      tabContent.forEach((content, index) => {
          content.style.display = index === 0 ? 'block' : 'none';
      });
  });
