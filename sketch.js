let start = false;
let score = 0;
let kTime=false;
let kCount=0;
let rectColour=(0,0,0)
var r;
var g;
var b; 

// need to fix the colour staying after changing, each rect changing individually

function setup(){
    createCanvas(windowWidth/1.05,windowHeight/1.2);

}

function draw(){
    background(20,20,35);
    r=random(255);
    g=random(200);
    b=random(200);

    fill(255);
    textSize(18);
    text("Stay out of the red boxes!",115,30);

    if(keyIsPressed == true && key == "g"){
        start = true;
        kTime=true;
    }
    
    if(start===true){
        playGame();
    } else {
        fill(255);
        textSize(36);
        textAlign(CENTER);
        text("Press G to start!", width/2,height/2);
    }



function playGame(){
    fill(200,200,200);

// Change colour every couple seconds
    if(kTime=true){
        kCount++;
    }
    
    if(kCount>50){
        fill(random(255),random(200),random(200),);
        kCount=0;
    }
      
        rect(350,200,150,150);
        rect(500,200,150,150);
        rect(650,200,150,150);
        rect(800,200,150,150);
        rect(950,200,150,150);
        rect(1100,200,150,150);

// Get player red value
    let currentColour=get(mouseX,mouseY);
    let redValue;
    redValue = red(currentColour);

// End game if in red
    if(redValue > 200){
        endGame();
    } else {
        score++
    }

// Player movement
    fill(255);
    ellipse(mouseX,mouseY,30);

    console.log(redValue);

}

function endGame(){
        fill(255);
        textSize(36);
        textAlign(CENTER);
        text("GAME OVER", width/2, height/2);
        text("Score",width/2,height/1.7);
        text(score,width/2,height/1.5);
    }
}






// let kTime = false;
// let kCount = 0;

// function setup(){
//     createCanvas(windowWidth/1.05,windowHeight/1.2);
// }

// function draw(){
//     background(20,20,35);
//     r=random(200);
//     g=random(200);
//     b=random(200);

//     // if (keyPressed && key == "g") {
//     for(let GridX=10; GridX<=windowWidth; GridX=GridX+120){
//         for(let GridY=10; GridY<=windowHeight; GridY=GridY+120){
//                 if (keyIsPressed && key == "w"){
//                     kTime = true; 
//                 }
            
//                 if (kCount > 20){
//                     fill(r,g,b);
//                     kCount=0;
//                     kTime=false;

//                 }
//                 square(GridX,GridY,110,10);
//                 }
//             }
//         }
    
//     if(kTime == true){
//         kCount++;
//     }
// }
