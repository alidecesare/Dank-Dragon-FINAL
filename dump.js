class Dump {
  constructor(xpos, ypos, filename, dumpoffset) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.gif = createImg(filename);
    this.dumpoffset = dumpoffset;
  }
  display() {

  }
  move() {

    if (keyIsDown(LEFT_ARROW)) {
      this.xpos -= 5;
      this.gif.position(this.xpos, this.ypos);
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.xpos +=5;
      this.gif.position(this.xpos, this.ypos);
    }
  }
}
