let w=300,h=300; //only 10 images 
let img=[];
let m;
let angle=0;
let q=1;
let mn=-100;
let mx=100;
let z=0;
function setup() {  
	createCanvas(w,h);
	for(let i=0;i<100;i++){
		img[i] = loadImage("data/Movie"+q+".jpg");
	console.log(q);
		q++;
	}
}

function draw() {
  background(200);
  if(mouseX>0 && mouseX<w){
  	m=map(mouseX,z,w,mn,mx);
  }
  createTarget();
}

function createTarget(){
	for(let i=0; i<100; i++){
		if((m>-(100-i) && m<=-(99-i))){
		push();
			scale(-1,1);
			image(img[i], -width, 0,w,h); 
		pop();
		}else if(m<(100-i) && m>=(99-i)){
		push();
			image(img[i], 0, 0,w,h); 
		pop();
		}
	}
}
