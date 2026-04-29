// Existing heart and emoji animation code
for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 5 + 3) + 's';
    heart.style.animationDelay = (Math.random() * 8) + 's';
    document.body.appendChild(heart);
}

 const emojis = ['🎂',  '🎉'];

for (let j = 0; j < 20; j++) {
    const el = document.createElement('div');
    el.className = 'item';
    el.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.animationDuration = (Math.random() * 4 + 4) + 's';
    el.style.animationDelay = (Math.random() * 6) + 's';
    document.body.appendChild(el);
  }

// Lightbox functionality for photos page
function initLightbox() {
    const images = document.querySelectorAll('.large-collage img, .favorite-spotlight img');
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-overlay">
            <span class="lightbox-close">&times;</span>
            <img class="lightbox-image" src="" alt="">
            <div class="lightbox-caption"></div>
        </div>
    `;
    document.body.appendChild(lightbox);

    const overlay = lightbox.querySelector('.lightbox-overlay');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const caption = lightbox.querySelector('.lightbox-caption');

    images.forEach(img => {
        img.addEventListener('click', function() {
            lightboxImg.src = this.src;
            caption.textContent = this.alt;
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });

    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightbox();
        }
    });
}

// Initialize lightbox only on photos page
if (document.querySelector('.spotlight-container')) {
    initLightbox();
}