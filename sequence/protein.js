/**
 * Created by mingzhang on 3/31/18.
 */
'use strict';

const Sequence = require('./sequence');

const AAs= require('../knowledge/biology').aminoAcids;

class Protein extends Sequence {
  constructor (seq, name) {
    seq = seq.replace(/\s/g, '');
    seq = seq.toUpperCase();
    for (let it of seq) {
      if (typeof AAs[it] === 'undefined') {
        throw new Error(`Illegal character ${it} found.`);
      }
    }
    super(seq, name);
    this.attrs = new Map();
  }
}


if (typeof module !== 'undefined' && module.parent) {
  module.exports = Protein;
} else {

} 