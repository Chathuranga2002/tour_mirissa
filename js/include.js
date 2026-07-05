async function loadComponent(containerId, filePath) {
    const container = document.getElementById(containerId);

    if (!container) return;

    try {
        const response = await fetch(filePath);

        if (!response.ok) {
            throw new Error(`Failed to load ${filePath}`);
        }

        const html = await response.text();
        container.innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", async () => {

    await loadComponent("navbar-container", "components/navbar.html");
    await loadComponent("footer-container", "components/footer.html");
    await loadComponent("gallery-container", "components/gallery.html");

    if (typeof initNavbar === "function") {
        initNavbar();
    }

});