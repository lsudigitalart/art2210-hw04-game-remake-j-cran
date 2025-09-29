let start = false;
let score = 0;
let kTime=false;
let kCount=0;
let fillColor1;
let fillColor2;
let fillColor3;
let fillColor4;
let fillColor5;
let fillColor6;



// need to fix the colour staying after changing, each rect changing individually

function setup(){
    createCanvas(windowWidth/1.05,windowHeight/1.2);
    // fillColor = color(40)
        fillColor1 = color(random(255),random(200),random(200));
        fillColor2 = color(random(255),random(200),random(200));
        fillColor3 = color(random(255),random(200),random(200));
        fillColor4 = color(random(255),random(200),random(200));
        fillColor5 = color(random(255),random(200),random(200));
        fillColor6 = color(random(255),random(200),random(200));

}

function draw(){
    background(20,20, 35);

    fill(255);
    textSize(18);
    textAlign(LEFT);
    text("Stay out of the red boxes!",10,30);
    text("Score",10,50);
    text(score,10,70);

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
        text("Press G to start", width/2,height/2);
    }



function playGame(){
// fill(40);

// Change colour every couple seconds
    if(kTime=true){
        kCount++;
    }
    
    if(kCount>50){
        // fill(random(255),random(200),random(200));
        fillColor1 = color(random(255),random(230),random(230));
        fillColor2 = color(random(255),random(230),random(230));
        fillColor3 = color(random(255),random(230),random(230));
        fillColor4 = color(random(255),random(230),random(230));
        fillColor5 = color(random(255),random(230),random(230));
        fillColor6 = color(random(255),random(230),random(230));

        kCount=0;
    }

        fill(fillColor1);
        rect(350,100,150,height);

        fill(fillColor2);
        rect(500,100,150,height);

        fill(fillColor3);
        rect(650,100,150,height);

        fill(fillColor4);
        rect(800,100,150,height);

        fill(fillColor5);
        rect(950,100,150,height);
        
        fill(fillColor6);
        rect(1100,100,150,height);

// Get player red value
    let currentColour=get(mouseX,mouseY);
    let redValue;
    redValue = red(currentColour);

// End game if in red
    if(redValue > 200 && kCount>40){
        endGame();
    } else {
        score++
    }

// Player movement
    fill(255);
    ellipse(mouseX,mouseY,30);

}

function endGame(){
        fill(255);
        textSize(36);
        textAlign(CENTER);
        text("GAME OVER", width/2, height/2);
        start=false
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
