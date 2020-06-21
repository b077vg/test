let w=300,h=300;
let vid;
let duration=0;
let m;
let preM;
let offset;
function setup() {  
	createCanvas(w,h);
	pixelDensity(1);
	vid = createVideo("data/a.mp4", videoLoaded);
	vid.size(w,h);
	vid.hide();
}
function videoLoaded() {
  duration = vid.duration();
}
function draw() {
  image(vid,0,0,w,h);
  if(mouseX>0 && mouseX<w){
  	m=map(mouseX,0,w,0,duration.toFixed(0));
  	vid.time(m);
  }
}

