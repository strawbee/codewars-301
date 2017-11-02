
'use strict';

const formatWords = words => {
  if (!words) return '';
  let str = words.filter(el => el).join(', '), c = str.lastIndexOf(',');
  return c < 0 ? str : str.slice(0, c) + ' and' + str.slice(c + 1);
 }
