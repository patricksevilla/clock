let time = 0;
let wave = [];
let path = [];
let radius = 0;

let slider;

function setup() {
  createCanvas(1200, 700);

//to zoom in and out
  zoomIn = createSlider(1, 100, 50)
  //slider for number of vectors
  bilangNgVector = createSlider(1, 50, 5);
}

function draw() {
  background(0);

  //grid
  stroke(255)
  line(0, height / 2, width, height / 2)
  line(width / 2, 0, width / 2, height)


  translate(width / 4, height / 2);
  let x = 0;
  let y = 0;

  for (let i = 0; i < bilangNgVector.value(); i++) {
    let prevx = x;
    let prevy = y;

    let n = i * 2 + 1;
    radius = zoomIn.value() * (4 / (n * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);

    //line,biggest circle
    stroke(255);
    line(prevx, prevy, x, y);
    stroke(255, 100);
    noFill();
    ellipse(prevx, prevy, radius * 2);
  }

  //to project the line
  stroke(255);
  wave.unshift(y);
  translate(200, 0);
  line(x - 200, y, 0, wave[0]);


  //to project the wave
  //i is the n in the upper bound
  //that's why i++ is the increment
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i += 1) {
    vertex(i, wave[i]);
  }
  endShape();


  //rate of being fast of the point
  time += 0.01

  //make the last point gone
  if (wave.length > width) {
    wave.pop();
  }



}
