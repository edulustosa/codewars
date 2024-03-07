// https://www.codewars.com/kata/54b724efac3d5402db00065e

const MORSE_CODE = {
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
};

function decodeMorse(morseCode) {
  morseCode = morseCode.trim();

  let decode = '';
  const words = morseCode.split('   ');

  words.forEach((word) => {
    const letters = word.split(' ');
    letters.forEach((letter) => (decode += MORSE_CODE[letter]));
    decode += ' ';
  });

  return decode.trim();
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
