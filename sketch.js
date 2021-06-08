var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var butterflies;
var butterfliesGroup;
var fly1img, fly2img, fly3img, beeimg;
var player1_img, player2_img;


function preload(){
  back_img = loadImage("images/field1.jpg");
  player1_img = loadImage("images/girl1net.png");
  player2_img = loadImage("images/girl2net.png");
  fly1img = loadImage("images/butterfly1.png");
  fly2img = loadImage("images//butterfly2.png");
  fl33img = loadImage("images//butterfly3.png");
  beeimg = loadImage("images//bee.png");
  butterfliesGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}