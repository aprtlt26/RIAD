


    let particles = [];

function setup() {
    createCanvas(800, 600);
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    background(0);
    particles.forEach(p => {
        p.update();
        p.edges();
        p.show();
    });
}

class Particle {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.vel = p5.Vector.random2D();
        this.color = color(255);
    }

    update() {
        let noiseType = "white"; // Change to "pink", "brown", "green", "blue" as needed
        let n = 0;
        switch (noiseType) {
            case 'white':
                n = random(-1, 1);
                break;
            case 'pink':
                n = noise(this.pos.x * 0.01, this.pos.y * 0.01) * 2 - 1;
                break;
            case 'brown':
                n = noise(this.pos.x * 0.01) * 2 - 1;
                this.vel.add(createVector(n, 0));
                break;
            case 'green':
                n = noise(this.pos.x * 0.05) * 2 - 1;
                this.vel.add(createVector(n, n));
                break;
            case 'blue':
                n = noise(this.pos.x * 0.1, this.pos.y * 0.1) * 2 - 1;
                this.vel.add(createVector(n, n));
                this.vel.mult(1.1); // Amplify changes
                break;
        }
        this.vel.limit(3);
        this.pos.add(this.vel);
    }

    edges() {
        if (this.pos.x < 0 || this.pos.x > width) this.vel.x *= -1;
        if (this.pos.y < 0 || this.pos.y > height) this.vel.y *= -1;
    }

    show() {
        stroke(this.color);
        strokeWeight(8);
        point(this.pos.x, this.pos.y);
    }
}

