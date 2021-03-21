const Engine=Matter.Engine
const World =Matter.World
const Bodies = Matter.Bodies
var thunderbolt_img, thunderbolt_img2, thunderbolt_img3,thunderbolt_img4;
var thunderCreatedFrame=0,thunder;
var maxDrops=100;
var drops=[];
function preload(){
   thunderbolt_img=loadImage("images/thunderbolt/1.png") 
   thunderbolt_img2=loadImage("images/thunderbolt/2.png") 
   thunderbolt_img3=loadImage("images/thunderbolt/3.png") 
   thunderbolt_img4=loadImage("images/thunderbolt/4.png") 

}

function setup(){
    engine=Engine.create();
    world=engine.world;
    createCanvas(400,700); 
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new raindrop(random(0,400), random(0,400)));
        }

    }
umbrella1=new umbrella(200,500)
    }

function draw(){
    Engine.update(engine)
    background(0);
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }
umbrella1.display();
rand=Math.round(random(1,4))
if(frameCount%80===0){
    thunderCreatedFrame=frameCount;
    thunder=createSprite(random(10,370),random(10,30),10,10);
    switch(rand){
        case 1:thunder.addImage(thunderbolt_img)
    break;
    case 2:thunder.addImage(thunderbolt_img2)
    break;
    case 3 :thunder.addImage(thunderbolt_img3)
    break;
    case 4 :thunder.addImage(thunderbolt_img4)
  

    }
thunder.scale=random(0.3,0.6)
}
if(thunderCreatedFrame + 10 ===frameCount && thunder){
    thunder.destroy();
}
drawSprites();

}   


