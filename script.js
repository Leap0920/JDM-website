let slideshows = document.querySelectorAll('.car');

slideshows.forEach(slideshow => {
    let index = 0;
    let images = slideshow.querySelectorAll('#slideshow img');
    let dots = slideshow.querySelectorAll('.dot');

    function updateImages() {
        images.forEach((img, i) => {
            img.classList.remove('active');
            dots[i].classList.remove('active');
            if(i === index) {
                img.classList.add('active');
                dots[i].classList.add('active');
            }
        });
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            index = i;
            updateImages();
        });
    });

    setInterval(() => {
        index = (index + 1) % images.length;
        updateImages();
    }, 3000);
});