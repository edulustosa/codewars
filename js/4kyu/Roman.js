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

    for (let i = 0; i < str.length - 1; i++) {
      const value = this.numerals[str[i]];
      const next = this.numerals[str[i + 1]];

      if (value < next) {
        num += this.numerals[this.toRoman(next - value)];
        i++;
      } else num += value;
    }

    const lastDigit = this.numerals[str[str.length - 1]];
    const penulDigit = this.numerals[str[str.length - 2]];

    if (!penulDigit || lastDigit <= penulDigit) {
      num += this.numerals[str[str.length - 1]];
    }

    return num;
  }
}

console.log(RomanNumerals.toRoman(2008), RomanNumerals.fromRoman('MDCLXVI'));
