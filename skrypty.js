window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (!header) return;

  if (window.innerWidth > 768) {
    header.classList.toggle("scrolled", window.scrollY > 0);
  } else {
    header.classList.remove("scrolled");
  }
});

    const images = [
      'ZDJ/main/STRAZ.jpg',
      'ZDJ/main/VOLVUS.jpg',
      'ZDJ/main/FORD.jpg'
    ];

    let current = 0;
    const hero = document.getElementById('hero');

    const updateHero = () => {
      hero.style.opacity = 0;
      setTimeout(() => {
        hero.style.backgroundImage = url('${images[current]}');
        hero.style.opacity = 1;
      }, 500);
    };

    document.getElementById('leftBtn').addEventListener('click', () => {
      current = (current - 1 + images.length) % images.length;
      updateHero();
    });

    document.getElementById('rightBtn').addEventListener('click', () => {
      current = (current + 1) % images.length;
      updateHero();
    });

    setInterval(() => {
      current = (current + 1) % images.length;
      updateHero();
    }, 8000);

    updateHero();
