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

  uniq() {
    return [...new Set(this.sequence)]
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

  range(a, b=0) {
    if (a > this.sequence.length) {
      throw new Error("start index too large")
    } else if (a < -this.sequence.length) {
      throw new Error("start index too small")
    } else if (a < 0) {
      a += this.sequence.length;
    }
    if (b > this.sequence.length) {
      throw new Error("end index too large")
    } else if (b < -this.sequence.length) {
      throw new Error("end index too small")
    } else if (b <= 0) {
      b += this.sequence.length;
    }
    if (b < a) {
      throw new Error("start index is greater than end index")
    }
    return this.sequence.slice(a, b)
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