// Assume 'canvas' is the reference to your canvas element and 'context' is the 2D rendering context
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

// Assuming 'points' is an array of x and y coordinates
const points = [100, 100, 200, 200, 300, 100]; // Example coordinates

// Move to the starting point of the first sub-path
context.moveTo(points[0], points[1]);

// Iterate through the remaining points to draw a path
for (let i = 2; i < points.length; i += 2) {
    context.lineTo(points[i], points[i + 1]); // Draw a line to the next point
}

// Finally, stroke or fill the path
context.stroke(); // Stroke the path
// context.fill(); // Fill the path
