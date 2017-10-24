'use strict';

function abbrevName(name){
  return (name.charAt(0) + '.' + name.charAt(name.search(/\s/) + 1)).toUpperCase();
}
