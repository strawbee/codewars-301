'use strict';

const gooseFilter = birds => {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(el => geese.indexOf(el) < 0);
}
