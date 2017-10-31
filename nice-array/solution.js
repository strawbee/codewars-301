'use strict';

const isNice = arr => {
  if (!arr.length) return false;
  for (let i in arr)
    if (arr.indexOf(arr[i] - 1) === -1 && arr.indexOf(arr[i] + 1) === -1) return false;
  return true;
}
