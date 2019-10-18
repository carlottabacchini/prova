let birch;
let points;
let word = "10";
let x;
let y;
let size = 400;
let bg;
var mySong;
var analyzer;

function preload(){
  birch = loadFont('/assets/Montserrat-black.otf');
  mySong = loadSound('/assets/mii.mp3');

}

function setup() {
  bg = loadImage('assets/bg.jpg');
  createCanvas(windowWidth, windowHeight);
  mySong.loop();
  x = width/2-230;
  y = height/2+100;
  points = birch.textToPoints(word, x, y, size);
  noStroke();

  // The analyzer allows to perform analysis on a sound file
  analyzer = new p5.Amplitude(); // able to perform measurements on the song and give back values
  analyzer.setInput(mySong);

}

function draw() {
  background(bg);

  textFont(birch);
  textSize(size);


  if(!mySong.isPlaying()){
     cursor('./assets/play.png');
   } else{
     cursor('./assets/pause.png');
   }

   
  for(let i = 0; i < points.length; i++){

    // let c = noise(i + frameCount * 0.01 ) * 255;

    let rms = analyzer.getLevel();
    fill(255);

    let pt = points[i];


    let nx = 2;
    let ny = 2;

    // let nx = noise(i * 10.1 + frameCount * 0.01) * 10 - 5.0;
    // let ny = noise(i * 10.2 + frameCount * 0.01) * 10 - 5.0;
    // Get the average (root mean square) amplitude


      // Draw an ellipse with size based on volume
      // ellipse(width / 2, height / 2, 10 + rms * 200, 10 + rms * 200);
      ellipse(pt.x + nx * 3, pt.y + ny * 3, 10 + rms * 200, 10 + rms * 200);
    // ellipse(pt.x + nx * 3, pt.y + ny * 3, 3 * 3);
  }

}
