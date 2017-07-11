const trials = require('trials');

function makePattern(probs, c, maxLength=16){

  const recur = (str) => {
    if(str.length == maxLength){
      return str;
    }
    else if (str.length == 0){
      console.error('must start with a string of length >= 1');
      return null;
    }
    else {
      let prev = str[str.length - 1];
      let newChar = trials.singlePmf(probs[prev]);
      return recur(str+newChar);
    }
  };
  return recur(c);
}

function independentTune(prob, len, notes){
  let prog =  [];
  for(let i=0; i<len; i++){
    prog.push(parseInt(trials.singlePmf(prob)));
  }
  return prog.map((e) => notes[e]);
}

module.exports.makePattern = makePattern;
module.exports.independentTune = independentTune;
