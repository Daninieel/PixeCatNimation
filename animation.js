const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;
let mouse = { x: null, y: null, radius: 150 };

window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});

class Particle {
    constructor(x, y, directionX, directionY, size) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size; 
    }

    draw() {
        const s = this.size;
        ctx.fillStyle = '#ffcc00'; 

        ctx.fillRect(this.x - s*2, this.y - s*3, s, s); 
        ctx.fillRect(this.x + s*1, this.y - s*3, s, s);
        // Head Base
        ctx.fillRect(this.x - s*2, this.y - s*2, s*5, s*3);
        // Eyes (Black pixels)
        ctx.fillStyle = '#000';
        ctx.fillRect(this.x - s, this.y - s, s, s);
        ctx.fillRect(this.x + s, this.y - s, s, s);
    }

    update() {
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        if (distance < mouse.radius) {
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 2;
            if (mouse.x > this.x && this.x > this.size * 10) this.x -= 2;
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 2;
            if (mouse.y > this.y && this.y > this.size * 10) this.y -= 2;
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
}

function connect() {
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) ** 2) + 
                           ((particlesArray[a].y - particlesArray[b].y) ** 2);
            
            if (distance < (canvas.width / 10) * (canvas.height / 10)) {
                let opacity = 1 - (distance / 15000);
                ctx.strokeStyle = `rgba(255, 204, 0, ${opacity})`;
                ctx.lineWidth = 2; 
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 15000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = 4; 
        let x = Math.random() * innerWidth;
        let y = Math.random() * innerHeight;
        let dirX = (Math.random() * 1) - 0.5;
        let dirY = (Math.random() * 1) - 0.5;
        particlesArray.push(new Particle(x, y, dirX, dirY, size));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    particlesArray.forEach(p => p.update());
    connect();
}

window.addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
});

init();
animate();