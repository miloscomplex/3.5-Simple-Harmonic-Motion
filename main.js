let angle = 0;
let angleV = 0;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  //noLoop();
  background(0);
  translate(width/2, height/2);
  fill(252,238, 33);
  let r = map(sin(angle), -1, 1, 0, 200);
  //console.log(sin(angle));
  let y = map(sin(angle), -1, 1, -180, 180);
  stroke(255);
  line(0, 0, 0, y);
  circle(0, y, 32);

  // let increment = TWO_PI / 60;
  angle += 0.02;
  //angleV += 0.0001;
}
