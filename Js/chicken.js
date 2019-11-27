let Chicken = function (image, x, y, width, height, speed, canvas) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.canvas = canvas;
    this.image = image;
    this.width = width;
    this.height = height;


    this.moveDown = function () {
        this.y += this.speed;
        if (this.y > this.canvas.height) {
            this.y = 0;
            this.x = Math.random() * this.canvas.width;
            this.speed = Math.random() * 5 + 2;
            this.image.src = "img/anhga.png"
        }
    };
    this.drawChicken = function () {
        this.canvas.getContext("2d").drawImage(this.image, this.x, this.y)
    }
};

let MultiChicken = function (canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.arrChicken = [];

    this.createChicken = function () {
        let x = Math.random() * canvas.width;
        let image = new Image();
        image.src = "img/anhga.png";
        let speed = Math.random() * 2 + 2;
        let chicken = new Chicken(image, x, 0, 50, 100, speed, this.canvas);
        this.arrChicken.push(chicken);
        chicken.drawChicken();
    }
    this.createMultiChicken = function () {
        for (let i = 0; i < 3; i++) {
            this.createChicken();
        }
        return this.arrChicken;
        }
};
