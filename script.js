  let indexs = 0; // 0 se start karna hai
  const slides = document.querySelectorAll(".main-carousel img");

  function showSlide(n) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === n) slide.classList.add("active");
    });
  }

  function nextSlide() {
    indexs = (indexs + 1) % slides.length; // 0 → 6 loop chalega
    showSlide(indexs);
  }

  function prevSlide() {
    indexs = (indexs - 1 + slides.length) % slides.length;
    showSlide(indexs);
  }

  // Auto run every 3s
  setInterval(nextSlide, 3000);

    // Auto Carousel Function
    function autoCarousel(selector, interval = 3000) {
      const images = document.querySelectorAll(selector + " img");
      let i = 0;
      setInterval(() => {
        images[i].classList.remove("active");
        i = (i + 1) % images.length;
        images[i].classList.add("active");
      }, interval);
    }

    autoCarousel("#sideAuto", 2500);
    autoCarousel("#bottomAuto", 2000);

    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modalClose');
    const modalName = document.getElementById('modalName');
    const modalLocation = document.getElementById('modalLocation');
    const modalPhone = document.getElementById('modalPhone');
    const modalDays = document.getElementById('modalDays');
    const modalDescription = document.getElementById('modalDescription');
    const modalImage = document.getElementById('modalImage');
    const modalCall = document.getElementById('modalCall');
    const modalRoute = document.getElementById('modalRoute');

    document.querySelectorAll('.view-details').forEach(btn => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.campus-card');
        modalName.textContent = card.dataset.name;
        modalLocation.textContent = card.dataset.location;
        modalPhone.textContent = card.dataset.phone;
        modalDays.textContent = card.dataset.days;
        modalDescription.textContent = card.dataset.description;
        const cardBg = card.querySelector('.card-media').style.backgroundImage;
modalImage.style.backgroundImage = cardBg;
        modalCall.href = `tel:${card.dataset.phone.replace(/\s+/g,'')}`;
        modalRoute.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(card.dataset.location)}`;
        modal.setAttribute('aria-hidden','false');
        document.body.style.overflow = 'hidden';
      });
    });

    modalClose.addEventListener('click', () => {
      modal.setAttribute('aria-hidden','true');
      document.body.style.overflow = '';
    });
    modal.addEventListener('click', e => {
      if(e.target === modal) {
        modal.setAttribute('aria-hidden','true');
        document.body.style.overflow = '';
      }
    });

    function toggleMenu() {
      document.getElementById("menu").classList.toggle("active");
    }


    const counters = document.querySelectorAll(".counter");
const speed = 200; // lower = faster

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target + "+"; // add plus sign
    }
  };

  updateCount();
});


const track = document.querySelector('.carousel-track');
  const slide = Array.from(track.children);
  const nextBtn = document.querySelector('.btn-next');
  const prevBtn = document.querySelector('.btn-prev');
  let index = 0;

  function updateSlide() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % slide.length;
    updateSlide();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + slide.length) % slide.length;
    updateSlide();
  });

  // Auto play every 5s
  setInterval(() => {
    index = (index + 1) % slide.length;
    updateSlide();
  }, 5000);

    const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      item.classList.toggle('active');
      items.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });
    });
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,       // ek waqt me 3 cards
    spaceBetween: 30,       // cards ke darmiyan gap
    loop: true,             // last ke baad first aa jaye
    autoplay: {
      delay: 2500,          // har 2.5 sec baad slide change
      disableOnInteraction: false,  // user click kare to bhi autoplay na rukay
    },
    speed: 800,             // slide ki speed (ms)
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });


  