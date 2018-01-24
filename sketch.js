var rickya, grape, billie;

function setup(){
    createCanvas(600,400);
    background(0);
    
   rickya = createSlider(0, 255, 125);
   rickya.position(20, 20);
   
   grape = createSlider(0, 255, 125);
   grape.position(20, 60);
   
   billie = createSlider(0, 255, 125);
   billie.position(20, 100);
}

function draw(){
   rv = rickya.value();
   gv = grape.value();
   bv = billie.value();
   
   background(rv, gv, bv);
   
   textSize(30);
   textAlign(CENTER, CENTER);
   message = "RGB Slider";
   text(message, width/2, height/2);
}
