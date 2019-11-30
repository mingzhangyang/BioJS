import parseGenBankFile from "../formats/genbank.js";
import data from "./sample.genbank.js";

window.onload = () => {
  // let id = prompt("Please input the genome id to start.");
  // let base = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=nuccore&rettype=gbwithparts";
  // let url = `${base}&id=${id}&seq_start=1&seq_stop=10000`;
  //
  // let p = fetch(url)
  //   .then(res => {
  //     console.log(res.status);
  //     console.log(res.statusText);
  //     return res.text();
  //   })
  //   .then(text => {
  //     let arr = text.split("\n");
  //     console.log(arr.slice(-20));
  //     let res = parseGenBankFile(arr);
  //     console.log(res);
  //     document.getElementById("main")
  //       .firstElementChild.innerText = JSON.stringify(res.slice(0, 10), null, 4);
  //   })
  //   .catch(err => console.error);

  let res = parseGenBankFile(data.split("\n"));
  document.getElementById("main")
    .firstElementChild.innerText = JSON.stringify(res, null, 4);
};

// let url = `https://www.ncbi.nlm.nih.gov/sviewer/viewer.cgi?tool=portal&save=file&db=nuccore&report=genbank&id=26245917&conwithfeat=on&hide-sequence=on&hide-cdd=on`;