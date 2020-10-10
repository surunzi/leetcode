const morse = [
  '.-',
  '-...',
  '-.-.',
  '-..',
  '.',
  '..-.',
  '--.',
  '....',
  '..',
  '.---',
  '-.-',
  '.-..',
  '--',
  '-.',
  '---',
  '.--.',
  '--.-',
  '.-.',
  '...',
  '-',
  '..-',
  '...-',
  '.--',
  '-..-',
  '-.--',
  '--..'
]

module.exports = function(words) {
  const map = {}

  for (let i = 0, len = words.length; i < len; i++) {
    const word = words[i]
    const morseRepresentation = []
    for (let i = 0, len = word.length; i < len; i++) {
      morseRepresentation.push(morse[word.charCodeAt(i) - 97])
    }
    map[morseRepresentation.join('')] = true
  }

  return Object.keys(map).length
}
