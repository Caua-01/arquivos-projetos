
function startImageRotation(container) {
    const images = container.querySelectorAll("img");
    let index = 0;

    images.forEach(img => img.classList.remove("active"));
    images[0].classList.add("active");

    container._currentIndex = 0;

    if (container._intervalId) return;

    container._intervalId = setInterval(() => {
        images[container._currentIndex].classList.remove("active");
        container._currentIndex = (container._currentIndex + 1) % images.length;
        images[container._currentIndex].classList.add("active");
    }, 1000);
}

function stopImageRotation(container) {
    const images = container.querySelectorAll("img");

    clearInterval(container._intervalId);
    container._intervalId = null;

    images.forEach(img => img.classList.remove("active"));
    if (images.length > 0) {
        images[0].classList.add("active");
        container._currentIndex = 0;
    }
}