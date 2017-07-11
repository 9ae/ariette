const scribe = require('scribbletune');
const gen = require('./gen');

function p1(){
  const patt = gen.makePattern('x');
let rhy = scribe.clip({
  notes: ['a3'],
  pattern: patt
});
console.log(patt);
scribe.midi(rhy, 'rhy.mid');
}

p1();
