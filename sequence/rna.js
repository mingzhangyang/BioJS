/**
 * Created by mingzhang on 3/31/18.
 */
'use strict';

const Sequence = require('./sequence');

const Bases = {
  A: true,
  U: true,
  G: true,
  C: true
};

class RNA extends Sequence {
  constructor (seq='', name='') {
    seq = seq.replace(/\s/g, '');
    seq = seq.toUpperCase();
    for (let it of seq) {
      if (!seq[it]) {
        throw new Error(`Illegal character ${it} found.`);
      }
    }
    super(seq, name);
    this.attrs = new Map();
  }
}


if (typeof module !== 'undefined' && module.parent) {
  //module.exports =
} else {

} 