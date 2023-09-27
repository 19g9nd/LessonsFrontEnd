class MyNumber {
    constructor(num = 0) {
      this.num = num;
    }

    sum(x) {
      return this.num + x;
    }

    minus(x) {
      return this.num - x;
    }

    mult(x) {
      return this.num * x;
    }

    devide(x) {
      if (x == 0 && this.num == 0) {
        throw new Error("Cant divide by zero!");
      } else {
        return this.num /x;
      }
    }
    valueOf() {
      return this.num;
    }
  }

const num1 = new MyNumber(2);
const num2 = new MyNumber(5);
const dev = num1.devide(num2);
console.log(Number(num1));
console.log(dev);
