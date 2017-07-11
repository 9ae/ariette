const S = require('scribbletune');
const T = require('teoria');
/*
let sad = sc.clip({
  notes: ['Dm', 'Em', 'AMaj', 'GMaj'],
  pattern: 'x__-x__-x_-x--x_'.repeat(4)
});

S.midi(sad, 'riff.mid');
console.log(sad);
*/

let a = T.note('a2');
let scala = a.scale('dorian');
let n = scala.notes().map((v, i) => v.toString());
let i = n[0];
let ii = n[1];
let iv = n[3];
let v = n[4];

let together = S.clip({
  notes: [i, ii, i, iv, ii, i, v],
  pattern: 'x_-x__-x_--x__'.repeat(3)
});

S.midi(together, 'together.mid');
