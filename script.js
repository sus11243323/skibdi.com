// Create Rain
const rainContainer = document.getElementById("rain-container");

function createRain() {
    for (let i = 0; i < 100; i++) {
        const drop = document.createElement("div");
        drop.classList.add("rain-drop");
        drop.style.left = `${Math.random() * 100}vw`;
        drop.style.animationDuration = `${Math.random() * 2 + 1}s`;
        drop.style.animationDelay = `${Math.random() * 2}s`;
        rainContainer.appendChild(drop);
    }
}

createRain();

// Eye Movement
const eyes = document.querySelectorAll(".eye");
const pupils = document.querySelectorAll(".pupil");

document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    eyes.forEach((eye, index) => {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        const angle = Math.atan2(mouseY - eyeY, mouseX - eyeX);
        const distance = Math.min(20, Math.hypot(mouseX - eyeX, mouseY - eyeY) / 10);

        const offsetX = Math.cos(angle) * distance;
        const offsetY = Math.sin(angle) * distance;

        pupils[index].style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});
