

  const images = document.querySelectorAll('.gallery img');
  const popup = document.getElementById('popup');
  const popupImg = document.getElementById('popupImg');
  const caption = document.getElementById('caption');
  const closeBtn = document.querySelector('.close');

  images.forEach(img => {
    img.addEventListener('click', () => {
      popup.style.display = "block";
      popupImg.src = img.src;
      caption.innerText = img.alt;
    });
  });

  closeBtn.onclick = function() {
    popup.style.display = "none";
  }

    popup.onclick = function(e) {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  }