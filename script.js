document.addEventListener('DOMContentLoaded', function() {
    const glitchTexts = document.querySelectorAll('.glitch-text');

    setInterval(() => {
        glitchTexts.forEach(text => {
            text.style.opacity = Math.random() > 0.5 ? '1' : '0.5';
            text.style.transform = `translateX(${Math.random() * 5 - 2.5}px)`;
        });
    }, 500);

    const hiddenLinks = document.querySelectorAll('.black-text');
    hiddenLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = 'orange';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = 'black';
        });
    });

    const randomFlickerElements = document.querySelectorAll('.black-text, .glitch-text, .ascii-art');
    setInterval(() => {
        randomFlickerElements.forEach(element => {
            if (Math.random() > 0.7) {
                element.style.color = 'orange';
            } else {
                element.style.color = 'black';
            }
        });
    }, 1000);
});
