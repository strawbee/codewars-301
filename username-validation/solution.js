'use strict';

const validateUsr = username => /^[a-z0-9_]{4,16}$/.test(username);
