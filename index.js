module.exports = equal;

function equal(number) {
  "use strict";
  if(number % 2 === 0){
    return true;
  } else {
    return false;
  }
}