const MORSE_TABLE = {
  '.-':     'a',
  '-...':   'b',
  '-.-.':   'c',
  '-..':    'd',
  '.':      'e',
  '..-.':   'f',
  '--.':    'g',
  '....':   'h',
  '..':     'i',
  '.---':   'j',
  '-.-':    'k',
  '.-..':   'l',
  '--':     'm',
  '-.':     'n',
  '---':    'o',
  '.--.':   'p',
  '--.-':   'q',
  '.-.':    'r',
  '...':    's',
  '-':      't',
  '..-':    'u',
  '...-':   'v',
  '.--':    'w',
  '-..-':   'x',
  '-.--':   'y',
  '--..':   'z',
  '.----':  '1',
  '..---':  '2',
  '...--':  '3',
  '....-':  '4',
  '.....':  '5',
  '-....':  '6',
  '--...':  '7',
  '---..':  '8',
  '----.':  '9',
  '-----':  '0',
};
const BINARY_TO_MORSE = {
  '00': '',
  '10': '.',
  '11': '-'
};
const SPACE = '**********';

function decode(expr) {
  const binaryWords = parseToBinaryWords(expr);
  const morseCodes = transformToMorseCodes(binaryWords);
  return transformFromMorseCodes(morseCodes).join(' ');
}

function parseToBinaryWords(expr) {
  return expr.split(SPACE).map((word) => word.match(/[01]{1,10}/g));
}

function transformToMorseCodes(binaryWords) {
  return binaryWords.map((word) => word.map((binaryLetter) => {
    return binaryLetter.match(/[01]{1,2}/g).map(getMorseCode).join('');
  }));

  function getMorseCode(binaryCode) {
    return BINARY_TO_MORSE[binaryCode];
  }
}

function transformFromMorseCodes(morseCodes) {
  return morseCodes.map((word) => word.map(getAlphabetLetter).join(''));

  function getAlphabetLetter(morseLetter) {
    return MORSE_TABLE[morseLetter]
  }
}

module.exports = {
  decode
}