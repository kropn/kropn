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
            link.style.color = 'green';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = 'black';
        });
    });
});
