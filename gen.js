const bay = require('jsbayes');
const trials = require('trials');

function rhy(){
  let g = bay.newGraph();
  let first = g.addNode('x', ['0', '1']);
  let hold = g.addNode('_', ['0', '1']);
  let rest = g.addNode('-', ['0', '1']);
  //let on = g.addNode('x', ['0', '1']);
  hold.addParent(first);
  rest.addParent(rest);
  //on.addParent(on);
  first.cpt = [0.1, 0.9];
  hold.cpt = [[1.0, 0.0], [0.6, 0.4]];
  rest.cpt = [[0.5, 0.5], [0.4, 0.6]];
  //on.cpt =[[0.2, 0.8], [0.7, 0.3]];

  return g;
}
/*
let graph = rhy();
graph.reinit()
  .then((r) => graph.sample(5))
  .then((r) => console.log(r))
  .catch((e) => console.error(e));
*/

function makePattern(c, maxLength=16){
  const probs = {
    'x': {
      '_': 0.3,
      'x': 0.1,
      '-': 0.6
    },
    '_': {
      'x': 0.1,
      '-': 0.5,
      '_': 0.4
    },
    '-': {
      'x': 0.85,
      '_': 0.0,
      '-': 0.15
    }
  };

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

console.log(makePattern('x'));
console.log(makePattern('-'));
