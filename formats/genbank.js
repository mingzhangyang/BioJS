/**
 * This is a simple version of parser, which extracts only Features section
 * @param arr, array of string
 */
function parseGenBankFile(arr) {
  let i = 0;
  for (; i < arr.length; i++) {
    if (arr[i].startsWith("FEATURES")) {
      break;
    }
  }
  let res = [];
  let holder = {
    name: "",
    data: [],
  };
  i += 1;
  for (; i < arr.length; i++) {
    let line = arr[i];
    let [head, body] = [line.slice(0, 21), line.slice(21)];

    if (!head.startsWith(" ")) {
      break;
    }

    head = head.trim();
    if (head === "") {
      holder.data.push(body.trimRight());
      continue;
    }

    if (holder.name) {
      res.push(transform(holder));
    }
    holder.name = head;
    holder.data = [body];
  }
  return res;
}

function transform(holder) {
  let obj = {
    type: holder.name,
  };
  Object.assign(obj, extractRange(holder.data[0]));
  let t = [];
  for (let i = 1; i < holder.data.length; i++) {
    if (holder.data[i].startsWith("/")) {
      t.push(holder.data[i].slice(1));
      continue;
    }
    t[t.length - 1] += holder.data[i];
  }
  for (let s of t) {
    let vs = s.split("=");
    if (vs.length === 2) {
      let k = vs[0];
      let v = vs[1];
      if (v.startsWith('"')) {
        v = v.slice(1, -1);
      }
      obj[k] = v;
      continue;
    }
    obj[vs[0]] = true;
  }
  return obj;
}

function extractRange(str) {
  let res = {
    range: [],
  };
  if (str.startsWith("complement")) {
    res.complement = true;
    str = str.split("complement")[1];
  }
  if (str.startsWith("join")) {
    str = str.split("join")[1];
  }
  if (str.startsWith("(")) {
    str = str.slice(1, -1);
  }
  let aa = str.split(",");
  for (let a of aa) {
    let [start, end] = a.split("..");
    res.range.push([+start, +end]);
  }
  return res;
}

export default parseGenBankFile;