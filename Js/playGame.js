let PlayGame=function () {
    this.score=0;
    this.control=function () {
        document.addEventListener('keyup', function (event) {
            if (event.keyCode == 37) {
                guns.ismoveLeft = false;
            } else if (event.keyCode == 39) {
                guns.ismoveRight = false;
            }
        });
        document.addEventListener('keydown',function (event) {
            if(event.keyCode==37){
                guns.ismoveLeft=true;
            }else if(event.keyCode==39){
                guns.ismoveRight=true;
            }
        });
        document.addEventListener("keypress", function (event) {
            console.log(event);
            if (event.keyCode==13) {
                startGame();
            }
            // }else if(event.keyCode==32){
            //     resetGame();
            // }
        })
    };
    this.drawguide=function () {
        ctx.beginPath();
        ctx.font = "50px arial";
        ctx.fillStyle = 'red';
        ctx.fillText('Press Enter to Start', 170, 100);
        ctx.fillText('Press Space to Shoot', 170, 150);

        ctx.closePath();
    };
    this.crash = function (chicken, bullet) { //Ä‘iá»u kiá»‡n va tráº¡m.
        let leftChicken = chicken.xPosition;
        let rightChicken = chicken.xPosition + chicken.width;
        let topChicken = chicken.yPosition;
        let bottomChicken = chicken.yPosition + chicken.height;
        let leftBullet = bullet.xPosition;
        let rightBullet = bullet.xPosition + bullet.width;
        let topBullet = bullet.yPosition;
        let bottomBullet = bullet.yPosition + bullet.height;
        if (rightChicken < leftBullet || bottomChicken < topBullet || leftChicken > rightBullet || topChicken > bottomBullet) {
            return false;
        } else {
            return true;
        }
    };
    this.checkCrash = function () {
        for (let i = 0; i < chickens.length; i++) {
            // for (let j = 0; j < guns.bullets.length; j++) {
                if (this.crash(chickens[i], guns.bullets[j])) {
                    chickens[i].isLive = false;
                }

            }
            if (!chickens[i].isLive) { //xá»­ lĂ½ tĂ­nh Ä‘iá»ƒm.
               chickens.splice(i, 1);
                this.score++;
            }

            // if (chickens.length == 0) {
            //     background.setImage();
            //     //táº¡o láº¡i enemy khi báº¯n háº¿t.
            //     creatMultipleEnemy();
            //     showEnemys();
            //
            // }

    };

    this.drawScore = function () {
        ctx.beginPath();
        ctx.font = "20px arial";
        ctx.fillStyle = 'white';
        ctx.fillText('Äiá»ƒm: ' + this.score, 20, 30);
        ctx.closePath();
    }
};