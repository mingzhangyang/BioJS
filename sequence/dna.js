/**
 * Created by mingzhang on 3/30/18.
 */
'use strict';

const Bases = {
  A: true,
  T: true,
  G: true,
  C: true
};

class DNA {
  constructor(seq='', name='') {
    seq = seq.trim();
    seq = seq.toUpperCase();
    for (let i = 0; i < seq.length; i++) {
      if (!Bases[seq[i]]) {
        throw new Error('Illegal character found at ' + i);
      }
    }
    this.name = name;
    this.seq = seq;
    this.attrs = new Map()
  }

  get length() {
    return this.seq.length;
  }

  reverse() {
    return this.seq.split('').reverse().join('');
  }

  composition() {
    let r = {
      A: 0,
      T: 0,
      G: 0,
      C: 0
    };
    for (let i = 0; i < this.seq.length; i++) {
      r[this.seq[i]] += 1;
    }
    return r;
  }

  gcContent() {
    let c = {
      G: 0,
      C: 0,
      A: 0,
      T: 0
    };
    for (let i = 0; i < this.seq.length; i++) {
      c[this.seq[i]] += 1;
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
    for (let i = 0; i < this.seq.length; i++) {
      s += c[this.seq[i]];
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
    for (let i = this.seq.length-1; i > -1; i--) {
      s += c[this.seq[i]];
    }
    return s;
  }

  contain(str) {
    str = str.toUpperCase();
    return this.seq.search(str) !== -1;
  }

  setName(str) {
    this.name = str;
  }

  toString() {
    return this.name + '|' + this.length + '\n' + this.seq;
  }
}


if (typeof module !== 'undefined' && module.parent) {
  module.exports = DNA;
} else {
  // export { DNA };
} 