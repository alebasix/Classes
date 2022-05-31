class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  get from() {
    return this._from;
  }
  set from(from) {
    if (typeof from !== "number") {
      throw new TypeError("from must be number ");
    }
    this._from = from;
  }
  get to() {
    return this._to;
  }
  set to(to) {
    if (typeof to !== "number") {
      throw new TypeError("to must be number ");
    }
    this._to = to;
  }
  get getRange() {
    return [this._from, this._to];
  }
  validate(number) {
    if (number >= this.from && number <= this.to) {
      return number;
    } else {
      return new RangeError("Wrong range output");
    }
  }
}
const testRange = new RangeValidator(-31, -1);
console.log(testRange);
console.log(testRange.from);
console.log(testRange.to);
console.log(testRange.getRange);
console.log(testRange.validate(-3));

class Figura3D {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  volume() {
    return this.a + this.b + this.c;
  }
}
class Cube extends Figura3D {
  constructor(a, b, c) {
    super(a, b, c);
    this.cubelenght = a;
    this.height = b;
    this.width = c;
  }
  volume() {
    return this.cubelenght * this.height * this.width;
  }
}
class Cylinder extends Figura3D {
  constructor(a, b) {
    super(a, b);
    this.height = a;
    this.radius = b;
  }
  volume() {
    return Math.PI * Math.pow(this.radius, 2) * this.height;
  }
}
class Ball extends Figura3D {
  constructor(a) {
    super(a);
    this.radius = a;
  }
  volume() {
    return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
  }
}

const testFigura3D = new Figura3D(1, 2, 3);
const testCube = new Cube(3, 3, 3);
const testCylinder = new Cylinder(1, 2);
const testBall = new Ball(3);
console.log(testFigura3D.volume());
console.log(testCube.volume());
console.log(testCylinder.volume());
console.log(testBall.volume());
