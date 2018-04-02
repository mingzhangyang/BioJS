/**
 * Created by yangm11 on 4/2/2018.
 */
'use strict';

// import {DNA} from '../sequence/dna';

class RE_Enzyme {
  constructor(str, name) {
    this.recognitionSite = new RegExp(str, 'gi');
    this.name = name;
  }

  searchDNA(dna) {
    return dna.getSeq().search(this.recognitionSite)
  }

  searchRawSequence(str) {
    return str.search(this.recognitionSite)
  }
}

// export {RE_Enzyme}

if (typeof module !== 'undefined' && module.parent) {

} else {
  // test code go here
  let re = new RE_Enzyme('abcd');
  console.log(re.searchRawSequence("sjdfsjdifoADabCDdes"))
}