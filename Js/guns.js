let Guns = function (x, y,width,height, speed,canvas) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width =width;
    this.height=height;
    this.orientation = "down";
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.drawGuns = function () {
        let image = new Image();
        image.src = "img/sungga.png";
        this.ctx.drawImage(image, this.x, this.y);
    };


    this.move = function () {
        switch (this.orientation) {
            case "right":
                if (this.x <= canvas.width-50)
                    this.x += this.speed;
                break;
            case "left":
                if (this.x >= 0)
                    this.x -= this.speed;
                break;
            case "shootUp":
                MultiBullet();
                break;
        }
    }
};

let ShootGuns = function (canvas) {
    this.guns = new Guns(150,500,50,75,20,canvas);
    this.ctx = canvas.getContext("2d");
    this.begin = function () {
        this.guns.drawGuns();
    };
    this.updateGuns = function () {
        this.guns.drawGuns();
    } ;

    this.moveGuns = function (event) {
        let orientation = 0;
        switch (event.which) {
            case 37:
                orientation = "left";
                break;
            case 39:
                orientation = "right";
                break;
            case 32:
                orientation="shootUp";
        }
        if(orientation) {
            this.guns.orientation = orientation;
            this.guns.move();
            this.updateGuns();
        }
    }
};
let MultiBullet = function (canvas) {
    let bullets=[]
  let bullet=new Bullet(this.x,this.y,6,11,10,this.canvas)
    bullets.push(bullet);
    bullet.drawBullet();
    bullet.move();
    console.log(bullets)
}


