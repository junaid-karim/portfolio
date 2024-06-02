// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const videoContainers = document.querySelectorAll(".video-container");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            const video = entry.target.querySelector("video");
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    videoContainers.forEach(container => {
        observer.observe(container);

        container.addEventListener("click", () => {
            const url = container.getAttribute("data-url");
            window.location.href = url;
        });
    });
});
