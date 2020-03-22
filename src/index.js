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

function decode(expr) {
    // write your solution here
    let dot = /10/g;
    let dash = /11/g;
    let space = /\*\*\*\*\*\*\*\*\*\*/g;
    let nothing = /00/g;
    let arrPhrase = [];
    let data = expr.toString;
    let result = "";
    for (let i = 0; i < expr.length; i += 10) {
        arrPhrase.push(expr.slice(i, i + 10).replace(nothing, "").replace(dash, "-").replace(dot, ".").replace(space, " "));
    }
    arrPhrase.forEach( el => {
        if (MORSE_TABLE[el] == undefined) {
        result += " "
    } else {
        result += MORSE_TABLE[el];
    }
})
return result;
}

module.exports = {
    decode
}