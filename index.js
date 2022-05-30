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

