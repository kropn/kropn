document.addEventListener('DOMContentLoaded', function() {
    const glitchTexts = document.querySelectorAll('.glitch-text');

    // Randomize glitch flicker for status lines
    setInterval(() => {
        glitchTexts.forEach(text => {
            text.style.opacity = Math.random() > 0.5 ? '1' : '0.7';
            text.style.transform = `translateX(${Math.random() * 3 - 1.5}px)`;
        });
    }, 400);

    // Easter egg hidden links (███ reveal on hover)
    const hiddenLinks = document.querySelectorAll('.black-text');
    hiddenLinks.forEach(link => {
        link.addEventListener('mouseover', () => link.style.color = 'orange');
        link.addEventListener('mouseout', () => link.style.color = 'black');
    });

    // Generate random ESI (Erratic Signal Identifier)
    const esiPrefixes = ['TX-', 'INT-', 'ARC-', 'DCD-', 'BCT-', 'LST-', '404-'];
    const asciiFragments = [
        '▒▒▓▓▒▒░░▒▒▓▓▒▒',
        '██▓▒░▒▓██▒▒░▓▒',
        '░▒▓▒░▒▒▓▓▒▒░▒░'
    ];
    const randomEsi = esiPrefixes[Math.floor(Math.random() * esiPrefixes.length)];
    const randomAscii = asciiFragments[Math.floor(Math.random() * asciiFragments.length)];

    // Insert ESI into terminal block instead of body bottom
    const terminal = document.querySelector('.terminal');
    if (terminal) {
        const esiElement = document.createElement('p');
        esiElement.className = 'glitch-text';
        esiElement.textContent = `> ESI: ${randomEsi}${randomAscii}`;
        terminal.appendChild(esiElement);
    }
});

