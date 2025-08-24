// Get the canvas and its drawing context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set the canvas size to fill the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Player's ship properties
const player = {
    x: canvas.width / 2 - 25, // Starting x position (centered)
    y: canvas.height - 70,    // Starting y position (near bottom)
    width: 50,
    height: 50,
    color: 'white'
};

// Main game loop
function gameLoop() {
    // Clear the canvas on each frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the player's ship
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);

    // Request the next frame
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();

