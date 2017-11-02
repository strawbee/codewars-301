
'use strict';

const formatWords = words => {
  if (!words) return '';
  let str = words.filter(el => el).join(', ');
  return str.lastIndexOf(',') < 0 ? str : str.slice(0, str.lastIndexOf(',')) + ' and' + str.slice(str.lastIndexOf(',') + 1);
 }
