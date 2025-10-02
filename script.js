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

    const terminal = document.querySelector('.terminal');
    if (terminal) {
        const esiElement = document.createElement('p');
        esiElement.className = 'glitch-text';
        esiElement.textContent = `> ESI: ${randomEsi}${randomAscii}`;
        terminal.appendChild(esiElement);
    }

    // --- ASCII Art Glitch Swapper ---
    const asciiArtBlocks = document.querySelectorAll('.ascii-art');
    const glitchChars = ['░','▒','▓','█'];

    asciiArtBlocks.forEach(block => {
        const original = block.textContent; // store original ASCII
        let chars = original.split('');

        setInterval(() => {
            // copy array so we can mutate
            let glitched = [...chars];

            // randomly swap 1–3 characters
            for (let i = 0; i < Math.floor(Math.random() * 3) + 1; i++) {
                const idx = Math.floor(Math.random() * glitched.length);
                glitched[idx] = glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }

            block.textContent = glitched.join('');

            // revert back after short delay
            setTimeout(() => { block.textContent = original; }, 250);
        }, 1200); // glitch every ~1.2s
    });
});

