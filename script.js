document.addEventListener('DOMContentLoaded', function() {
    const glitchTexts = document.querySelectorAll('.glitch-text');

    // Randomize text flicker effect
    setInterval(() => {
        glitchTexts.forEach(text => {
            text.style.opacity = Math.random() > 0.5 ? '1' : '0.5';
            text.style.transform = `translateX(${Math.random() * 5 - 2.5}px)`;
        });
    }, 500);

    // Randomize link color on hover
    const hiddenLinks = document.querySelectorAll('.black-text');
    hiddenLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = 'orange';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = 'black';
        });
    });

    // Randomize text and ASCII colors randomly
    const randomFlickerElements = document.querySelectorAll('.black-text, .glitch-text, .ascii-art');
    setInterval(() => {
        randomFlickerElements.forEach(element => {
            let randomColor = Math.random() > 0.7 ? 'orange' : 'yellow';
            element.style.color = randomColor;
        });
    }, 1000);

    // Generate random ESI (Erratic Signal Identifiers) and ASCII Art for each page refresh
    const esiPrefixes = ['TX-', 'INT-', 'ARC-', 'DCD-', 'BCT-', 'LST-', '404-'];
    const asciiArtOptions = [
        '░░▒▒▓▓▓▓▒▒▒▒▒▒▓▓▒▒▓▓▓▓▒▒▓▓▒▒▒▒▒▒▓▓▒▒▒▒▓▓▓▓▒▒▒▒',
        '░░▒▒▓▓▒▒▓▒▒▓▒▒▒▒▓▓▓▓▒▒▒▒▒▒▓▒▒▓▓▒▒▒▒▓▓▒▒▓▒▒▓▒▒▓',
        '█▓▒░▓▓▒▒░░▓▓▒▒▒▒▒▒▒▒▓▓▒▒▒▒▓▓▓▒▒▓▓▓▓▓▓▓▒▒▓▒▒▒▒▓'
    ];
    const randomEsi = esiPrefixes[Math.floor(Math.random() * esiPrefixes.length)];
    const randomAsciiArt = asciiArtOptions[Math.floor(Math.random() * asciiArtOptions.length)];

    // Display random ESI and ASCII Art
    const esiElement = document.createElement('p');
    esiElement.className = 'random-esi';
    esiElement.textContent = randomEsi + ' ' + randomAsciiArt;
    document.body.appendChild(esiElement);
});
