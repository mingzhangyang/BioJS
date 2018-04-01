/**
 * Created by mingzhang on 3/31/18.
 */
'use strict';

const fs = require('fs');

class Sequence {
  constructor(seq='', name='') {
    if (typeof seq !== 'string') {
      throw new Error('A string is required to build a Sequence object.');
    }
    this.sequence = seq;
    this.name = name;
  }

  get length() {
    return this.sequence.length;
  }

  setName(str) {
    this.name = str;
  }

  composition() {
    let cmp = {};
    for (let it of this.sequence) {
      if (typeof cmp[it] === 'undefined') {
        cmp[it] = 1;
        continue;
      }
      cmp[it] += 1;
    }
    let res = Object.keys(cmp);
    res = res.map(k => [k, cmp[k]]);
    res.sort((a, b) => {
      return b[1] - a[1];
    });
    return res;
  }

  getSeq() {
    return this.sequence;
  }

  reverse() {
    return this.sequence.split('').reverse().join('');
  }

  contain(str) {
    str = str.toUpperCase();
    return this.sequence.search(str) !== -1;
  }

  saveToFile(targetDir='./', fileName='mySequence.txt') {
    let name = this.name ? `${this.name}.txt` : fileName;
    fs.createWriteStream(targetDir + name, 'binary').end(this.sequence);
  }
}

if (typeof module !== 'undefined' && module.parent) {
  module.exports = Sequence;
} else {
  let s = new Sequence('jskfjslkdfjlsdfsdfs');
  console.log(s.composition());
} 