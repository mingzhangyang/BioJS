/**
 * Created by mingzhang on 3/31/18.
 */
'use strict';

// import { DNA } from './sequence/dna';
const DNA = require('./sequence/dna');
const Protein = require('./sequence/protein');
// console.log(typeof DNA);

let dna = new DNA('atgtcgtgtgtcatcacaaaaaaaaacgt');
console.log(dna);
console.log(dna.length);
console.log(dna.composition());
console.log(dna.contain('atg'));

let pr = new Protein('meshhhdkdk');
console.log(pr);
console.log(pr.composition());
pr.saveToFile();


if (typeof module !== 'undefined' && module.parent) {
  //module.exports =
} else {

} 