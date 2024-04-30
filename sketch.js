let video;

function preload(){
  ds = loadImage("ds.png")
  font = loadFont('minecraftfont.ttf')
}

function setup() {
  createCanvas(600, 600);
  videoWidth = 600 / 4;
  videoHeight = videoWidth * (3 / 4);
  video = createCapture(VIDEO);
  video.size(videoWidth, videoHeight);
  video.hide(); 
  textFont(font);
}

function draw() {
  background(30);

  // Calculate the position to center the pixelation
  let pixelationX = (600 - video.width) / 2 - 4;
  let pixelationY = 175;

  // Draw the video at the centered position
  image(video, pixelationX, pixelationY);

  image(ds, (600 / 2) - (ds.width / 2), 600 / 3 - 45);

  fill(255);
  text('choose your', 250, 380);
  text('character!', 255, 405)

  // Pixelate the video
  let pixelSize = 4; //the level of pixelation
  video.loadPixels();
  noStroke();
  for (let y = 0; y < video.height; y += pixelSize) {
    for (let x = 0; x < video.width; x += pixelSize) {
      let pos = (x + y * video.width) * 4;
      let r = video.pixels[pos];
      let g = video.pixels[pos + 1];
      let b = video.pixels[pos + 2];
      fill(r, g, b);
      rect(x + pixelationX, y + pixelationY, pixelSize * 2, pixelSize * 2); // Adjust position for centered pixelation
    }
  }
}
