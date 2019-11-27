let Bullet = function (image,x, y, width, height, speed,canvas) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.canvas=canvas;
    this.image=image;
    this.drawBullet = function () {
        this.canvas.getContext("2d").drawImage(this.image, this.x, this.y)
    }
    this.move = function () {
        this.y -= this.speed;

    }
};
