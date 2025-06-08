document.addEventListener("DOMContentLoaded", () => {
  // تحديد الأقسام وروابط التنقل
  let section = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

  // زر القائمة والقائمة نفسها
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  // تفعيل زر القائمة في الجوال
  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };

  // عند التمرير، نفعل رابط القسم ونخفي القائمة
  window.onscroll = () => {
    let top = window.scrollY;

    section.forEach(sec => {
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
        });

        let activeLink = document.querySelector('header nav a[href*="' + id + '"]');
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    // نخفي القائمة في الجوال عند التمرير
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  };

  // إغلاق القائمة عند الضغط على أي رابط
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
    });
  });

  // إعدادات ScrollReveal
  ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });

function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

function closeMenu() {
  document.getElementById("menu").classList.remove("active");
}
  
  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
});
