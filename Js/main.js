let guns=new Guns(canvas.width/2-41/2,canvas.height-(42+20),41,42,10,false,false)
let playGame=new PlayGame();
let isGameOver=false;
playGame.control();
guns.draw();
playGame.drawScore();
playGame.drawguide();
function startGame() {
    if (!isGameOver) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        showChicken();
        guns.draw();
        guns.move();
        guns.shoot();
        playGame.checkCrash();
        //xá»­ lĂ½ káº¿t thĂºc game.
        for (i = 0; i <  chickens.length; i++) {
            if ( chickens[i].yPosition > canvas.height) {
                isGameOver = true;
            }
        }
        playGame.drawScore();
        requestAnimationFrame(startGame);
    } else {
        alert('kết thúc ' + playGame.score + ' điểm');
    }

}
