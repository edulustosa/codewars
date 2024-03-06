// https://www.codewars.com/kata/51b66044bce5799a7f000003

class RomanNumerals {
  static numerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  static toRoman(num) {
    let str = '';

    while (num > 0) {
      for (const [roman, value] of Object.entries(this.numerals)) {
        if (num >= value) {
          str += roman;
          num -= value;
          break;
        }
      }
    }

    return str;
  }

  static fromRoman(str) {
    let num = 0;

    for (let i = 0; i < str.length; i++) {
      const curr = this.numerals[str[i]];
      const next = this.numerals[str[i + 1]];

      if (next && curr < next) {
        num += next - curr;
        i++;
      } else num += curr;
    }

    return num;
  }
}

console.log(RomanNumerals.toRoman(2008), RomanNumerals.fromRoman('MDCLXVI'));
