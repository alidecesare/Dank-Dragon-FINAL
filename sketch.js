let dump, slep, wake, flem, scene;
let dumplings = [];
var maxdumps = 25;
var dumpsize = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < maxdumps; i++) {
		dumplings.push(new Dump(int(random(width)), height/2, "walk.gif"));
	}
}
function draw() {
	for (let i = 0; i < dumplings.length; i++) {
		dumplings[i].display();
		dumplings[i].move();
	}

}

//I'm still having ISSUES!!!!!
//dumps won't instantiate at the distance interval that I want WHY!!
//as the dumps move across the screen they expand the screen which ISN'T SUPPOSED TO HAPPEN HELP ME
