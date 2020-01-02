// let seg=0

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)

}

function draw() {
  background(0);
  let seg=second();
  seg=seg*6
  // seg+=100




  noFill();
  strokeWeight(8);
  stroke(255,0,0);
ellipse(200,200,200,200)


  translate(200,200)
 for(let i=0;i<=12;i=i+1){
  let bilang=['1','2','3','4','5','6','7','8','9','10','11','12']
    rotate(30)
      strokeWeight(1);
    fill(0, 102, 153);
         text(bilang[i],0,-100)
  }



  translate(0,0)
  rotate(seg)
  stroke(0,0,255)
  line(0,0,0,-100)


  rotate((seg/60)-seg)
    stroke(255,0,255)
    line(0,0,0,-50)

    rotate((seg/3600)-(seg/60))
 stroke(255,255,255)
  line(0,0,0,-25)

      numero();
}


function numero(){






}
