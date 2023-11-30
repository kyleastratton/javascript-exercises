const repeatString = function(str, repeat) {
  let string = "";
  if (repeat < 0) return "ERROR";
  for (i = 0; i < repeat; i++) {
    string += str;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
