var player
var playerImg
var x


function preload() {
  playerImg = loadImage("Images/Player.png")
}

function setup() {

  createCanvas(1200,1200)

  player = createSprite(200,200,10,10)
  player.addImage(playerImg)
  player.scale = 0.5
  rectMode(CENTER)

}

function draw() {
  background(240,240,240)

  if (keyCode == 38) {
    player.velocityY = -5
    player.velocityX = 0
   
  }
  player.x += 0.02
  translate (width/2, height/2);
  rotate(player.x);
  rect(0, 0, 100, 100);

  if (keyCode == 40) {
    player.velocityY = 5
    player.velocityX = 0
  }

  if (keyCode == 37) {
    player.velocityX = -5
    player.velocityY = 0
  }

  if (keyCode == 39) {
    player.velocityX = 5
    player.velocityY = 0
  }


  drawSprites();
}

