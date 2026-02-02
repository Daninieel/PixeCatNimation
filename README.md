#🐱 PixeCatNimation (CAT-NET)
"A pixelated feline experiment"

PixeCatNimation is a whimsical, interactive web background built with HTML5 Canvas. It features a swarm of generated pixel-art cats that float through space, forming a neural-network-like constellation as they connect with one another.

✨ Features
Generative Pixel Art: Instead of using images, every "cat" particle is drawn programmatically using JavaScript canvas primitives (fillRect), creating a retro 8-bit aesthetic.

Constellation Effect: Particles dynamically draw connecting lines when they float close to each other, creating a "Cat-Net" mesh.

Interactive Physics: The cats are shy! They gently float around but will scatter and move away if your mouse cursor gets too close.

Retro Styling: Features the "Press Start 2P" font and a vibrant yellow-on-purple color scheme (#2c1e31 background).

Responsive: The canvas automatically resizes to fit any screen dimension.

🚀 How to Run
Clone or download this repository.

Ensure you have the following files in the same directory:

main.html

animation.css

animation.js

Open main.html in any modern web browser.

🛠️ Technologies Used
HTML5 Canvas: For high-performance 2D rendering.

Vanilla JavaScript: Handles the particle physics, mouse interaction, and line rendering logic.

CSS3: Imports Google Fonts for the retro typography.

🎨 Customization
You can tweak the behavior in animation.js:

Cat Size: Change let size = 4; inside the init() function to make the cats bigger or smaller.

Connection Distance: Adjust (canvas.width / 7) * (canvas.height / 7) in the connect() function to change how close cats need to be to form lines.

Mouse Interaction: Modify mouse.radius to change the size of the repulsion field.

Meow-trix loaded successfully. 🐾

