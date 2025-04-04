// Testimoni
let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.testimoni-item');
    slideIndex += step;

    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    } else if (slideIndex >= slides.length) {
        slideIndex = 0;
    }

    document.querySelector('.testimoni-wrapper').style.transform = `translateX(-${slideIndex * 100}%)`;
}



// Untuk Kelebihan kelas tapi gagal
document.addEventListener("DOMContentLoaded", function () {
    const titles = document.querySelectorAll(".toggle-title");

    titles.forEach(title => {
        title.addEventListener("click", function () {
            const details = this.nextElementSibling.nextElementSibling;

            // Tutup yang lain sebelum membuka yang baru
            document.querySelectorAll(".details").forEach(item => {
                if (item !== details) {
                    item.classList.remove("active");
                }
            });

            // Toggle class active untuk animasi buka-tutup
            details.classList.toggle("active");
        });
    });
});
