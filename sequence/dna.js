/**
 * Created by mingzhang on 3/30/18.
 */
'use strict';

// import {Sequence} from './sequence';

const Sequence = require('./sequence');

const Bases = {
  A: true,
  T: true,
  G: true,
  C: true
};

class DNA extends Sequence {
  constructor(seq='', name='', isCodingStrand=true) {
    seq = seq.replace(/\s/g, '');
    seq = seq.toUpperCase();
    for (let it of seq) {
      if (!Bases[it]) {
        throw new Error(`Illegal character ${it} found.`);
      }
    }
    super(seq, name);
    this.isCodingStrand = isCodingStrand;
    this.attrs = new Map();
  }

  gcContent() {
    let c = {
      G: 0,
      C: 0,
      A: 0,
      T: 0
    };
    for (let it of this.sequence) {
      c[it] += 1;
    }
    return (c.G + c.C)/this.seq.length;
  }

  complementary() {
    let c = {
      G: 'C',
      C: 'G',
      A: 'T',
      T: 'A'
    };
    let s = '';
    for (let it of this.sequence) {
      s += c[it];
    }
    return s;
  }

  reverseComplementary() {
    let c = {
      G: 'C',
      C: 'G',
      A: 'T',
      T: 'A'
    };
    let s = '';
    for (let i = this.sequence.length-1; i > -1; i--) {
      s += c[this.seq[i]];
    }
    return s;
  }

  toString() {
    return this.name + '|' + this.length + '\n' + this.sequence;
  }
}

// export {DNA};

if (typeof module !== 'undefined' && module.parent) {
  module.exports = DNA;
} else {
  // export { DNA };
} 