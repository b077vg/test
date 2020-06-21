let w=300,h=300;
let vid;
let duration=0;
let m;
let preM;
let offset;
function setup() {  
	createCanvas(w,h,WEBGL);
	vid = createVideo("data/a.mp4", videoLoaded);
	vid.size(w,h);
	//vid.hide();
}
function videoLoaded() {
  duration = vid.duration();
}
function draw() {
  	m=map(radians(rotationY),-180,180,0,duration.toFixed(0));
  	vid.time(m);
}
