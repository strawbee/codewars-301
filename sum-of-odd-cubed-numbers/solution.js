'use strict';

const cubeOdd = arr => arr.some(isNaN) ? undefined : !arr.filter(el => el % 2).length ? 0 : arr.filter(el => el % 2).map(el => el * el * el).reduce((sum, el) => sum + el);
