// Canvas noise effect implementation
const initNoiseEffect = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas to full screen and fixed position
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9998'; // Just below the existing noise overlay
    canvas.style.opacity = '0.03'; // Reduced from 0.05 to 0.02 for subtler effect

    // Add canvas to body
    document.body.appendChild(canvas);

    // Function to resize canvas to match window size
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    // Initial resize
    resizeCanvas();

    // Resize canvas when window size changes
    window.addEventListener('resize', resizeCanvas);

    // Create noise function
    const createNoise = () => {
        const imageData = ctx.createImageData(canvas.width, canvas.height);
        const data = imageData.data;

        for (let i = 0; i < data.length; i += 4) {
            const value = Math.random() * 255;
            data[i] = value;     // red
            data[i + 1] = value; // green
            data[i + 2] = value; // blue
            data[i + 3] = 255;   // alpha
        }

        return imageData;
    };

    // Animation loop with reduced frame rate
    const animate = () => {
        ctx.putImageData(createNoise(), 0, 0);
        setTimeout(() => requestAnimationFrame(animate), 200); // Increased delay from 100 to 200ms for smoother effect
    };

    // Start animation
    animate();
};

// Initialize noise effect when the page loads
window.addEventListener('load', initNoiseEffect);