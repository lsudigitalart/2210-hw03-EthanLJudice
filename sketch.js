//Author @Ethan Judice
function setup() {
  createCanvas(500, 500);
  
}

function draw() {
  // Put things you want to over and over here. 
  //background(220);
  for(let i = 0; i < 250; i+=1){
    stroke(i,i,i);
    line(i, i, i, 500);
  }
  
  for(let i = 0; i < 250; i+=1){
    stroke(255,255,i);
    line(i,i, 500, i);
  }
  for(let i = 0; i < 250; i+=1){
    stroke(255,i,255);
    line(i,0, i, i);
  }
  for(let i = 0; i < 250; i+=1){
    stroke(i,255,255);
    line(0,i, i, i);
  }

}