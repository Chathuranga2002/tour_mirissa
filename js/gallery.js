let galleryItems = [];
let visibleCount = 8;
let currentImageIndex = 0;

async function loadGallery(type) {
    try {
        const response = await fetch("data/gallery.json");
        const data = await response.json();
        const gallery = data[type];

        if (!gallery) {
            console.error("Gallery not found:", type);
            return;
        }

        galleryItems = gallery.images;
        visibleCount = 8;

        const section = document.getElementById("gallerySection");
        const title = document.getElementById("galleryTitle");
        const subtitle = document.getElementById("gallerySubtitle");
        const badge = document.getElementById("galleryBadge");
        const heroImage = document.getElementById("galleryHeroImage");
        const heroCategory = document.getElementById("galleryHeroCategory");
        const heroTitle = document.getElementById("galleryHeroTitle");
        const heroDescription = document.getElementById("galleryHeroDescription");
        const imageCount = document.getElementById("galleryImageCount");

        section.classList.remove("hidden");

        setTimeout(() => {
            section.classList.add("show");
        }, 100);

        badge.textContent = gallery.badge || "Gallery";
        title.textContent = gallery.title;
        subtitle.textContent = gallery.subtitle;

        heroImage.src = gallery.cover || galleryItems[0].image;
        heroCategory.textContent = gallery.badge || "Tours Mirissa";
        heroTitle.textContent = gallery.heroTitle || gallery.title;
        heroDescription.textContent = gallery.heroDescription || gallery.subtitle;
        imageCount.textContent = `${galleryItems.length} Photos`;

        renderGallery();

        section.scrollIntoView({
            behavior: "smooth"
        });

    } catch (error) {
        console.error("Gallery loading error:", error);
    }
}

function renderGallery() {
    const grid = document.getElementById("galleryGrid");
    const showMoreBtn = document.getElementById("showMoreBtn");

    grid.innerHTML = "";

    galleryItems.slice(0, visibleCount).forEach((item, index) => {
        const card = document.createElement("div");

        card.className = "gallery-card";
        card.onclick = () => openLightbox(index);

        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}">

            <div class="gallery-overlay">
                <div class="gallery-info">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });

    if (visibleCount < galleryItems.length) {
        showMoreBtn.classList.remove("hidden");
    } else {
        showMoreBtn.classList.add("hidden");
    }
}

function openLightbox(index) {
    currentImageIndex = index;

    const lightbox = document.getElementById("lightbox");

    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");

    updateLightbox();
}

function closeLightbox() {
    const lightbox = document.getElementById("lightbox");

    lightbox.classList.add("hidden");
    lightbox.classList.remove("flex");
}

function updateLightbox() {
    const item = galleryItems[currentImageIndex];

    document.getElementById("lightboxImage").src = item.image;
    document.getElementById("lightboxTitle").textContent = item.title;
    document.getElementById("lightboxDescription").textContent = item.description;
    document.getElementById("lightboxCounter").textContent =
        `${currentImageIndex + 1} / ${galleryItems.length}`;
}

function nextLightboxImage() {
    currentImageIndex++;

    if (currentImageIndex >= galleryItems.length) {
        currentImageIndex = 0;
    }

    updateLightbox();
}

function prevLightboxImage() {
    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = galleryItems.length - 1;
    }

    updateLightbox();
}

document.addEventListener("click", function (e) {

    const galleryButton = e.target.closest(".gallery-btn");

    if (galleryButton) {
        const galleryType = galleryButton.dataset.gallery;
        loadGallery(galleryType);
    }

    if (e.target && e.target.id === "showMoreBtn") {
        visibleCount += 4;
        renderGallery();
    }

    if (e.target && e.target.id === "closeLightbox") {
        closeLightbox();
    }

    if (e.target && e.target.id === "nextImage") {
        nextLightboxImage();
    }

    if (e.target && e.target.id === "prevImage") {
        prevLightboxImage();
    }

    if (e.target && e.target.id === "lightbox") {
        closeLightbox();
    }

});

document.addEventListener("keydown", function (e) {
    const lightbox = document.getElementById("lightbox");

    if (!lightbox || lightbox.classList.contains("hidden")) return;

    if (e.key === "Escape") {
        closeLightbox();
    }

    if (e.key === "ArrowRight") {
        nextLightboxImage();
    }

    if (e.key === "ArrowLeft") {
        prevLightboxImage();
    }
});