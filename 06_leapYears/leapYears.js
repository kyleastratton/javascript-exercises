const leapYears = function(year) {
  // check if century
  // if (year % 100 === 0) {
  //   return false;
  // }
  // check if year has more than 4 digits (not a year)
  // if (year.toString().length > 4) {
  //   return false;
  // }
  // check if year if a leap year
  // if (year % 4 === 0) {
  //   return true;n
  // }
  // return false;
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
