const titleCase  = function(text) {
  text = text.toLowerCase().split(' ');

  for (let i = 0; i < text.length; i++) {
    text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
  }
  return text.join(' ');

};
titleCase('');
console.log(titleCase("HeLlo there"));