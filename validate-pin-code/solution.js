'use strict';

const validatePIN = pin => /^\d{4}(\d{2})?$/g.test(pin);
