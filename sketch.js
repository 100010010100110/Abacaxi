function setup() {
    createCanvas(6000, 6000);
    background("rgb(2,0,0)");
  }
  
  function draw() {
    stroke("#00E2FF");
    fill("#DA00FF");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY,375, 375);
    }
  }