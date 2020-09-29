module.exports = function toReadable (number) {
  const numbers = {
    0 : 'zero',
    1 : 'one',
    2 : 'two',
    3 : 'three',
    4 : 'four',
    5 : 'five',
    6 : 'six',
    7 : 'seven',
    8 : 'eight',
    9 : 'nine',
    10 : 'ten',
    11 : 'eleven',
    12 : 'twelve',
    13 : 'thirteen',
    14 : 'fourteen',
    15 : 'fifteen',
    16 : 'sixteen',
    17 : 'seventeen',
    18 : 'eighteen',
    19 : 'nineteen',
    20 : 'twenty',
    30 : 'thirty',
    40 : 'forty',
    50 : 'fifty',
    60 : 'sixty',
    70 : 'seventy',
    80 : 'eighty',
    90 : 'ninety',
  };

  if (numbers[number]) return numbers[number];

  let arr = String(number).split('');

  if (arr[2]) {
  	if (arr[1] === '0' && arr[2] === '0') return `${numbers[arr[0]]} hundred`;
  	if (arr[1] === '0') return `${numbers[arr[0]]} hundred ${numbers[arr[2]]}`;
  	if (arr[2] === '0') return `${numbers[arr[0]]} hundred ${numbers[`${arr[1]}${arr[2]}`]}`; 	
  	if ( (`${arr[1]}${arr[2]}`) < 20 ) return `${numbers[arr[0]]} hundred ${numbers[`${arr[1]}${arr[2]}`]}`;
	  return `${numbers[arr[0]]} hundred ${numbers[arr[1] + '0']} ${numbers[arr[2]]}`;
  } else {
  	return `${numbers[arr[0] + '0']} ${numbers[arr[1]]}`;
  }
}
