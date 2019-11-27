let Bullet = function (x, y, width, height, speed,image,canvas) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.canvas=canvas;
    this.image=image;
    this.drawBullet = function () {
        window.onload = function() {
            let c = document.getElementById("myCanvas");
            let ctx = c.getContext("2d");
            let img = document.getElementById("bullet");
            ctx.drawImage(img, this.x,this.y);
        }
    };
    this.move = function () {
        this.y -= this.speed;
    }
};
