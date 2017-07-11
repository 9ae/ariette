const scribe = require('scribbletune');
const teoria = require('teoria');
const gen = require('./gen');
const distro = require('./distro');

let dm = scribe.scale('d', 'minor');
let notes = gen.independentTune(distro.TUNE_BASIC, 24, dm);
let patt = gen.makePattern(distro.RHY_STRUNG, 'x', 32);
let dsong = scribe.clip({
  notes: notes,
  pattern: patt.repeat(4),
  //sizzle: true,
  accentMap: '---x'.repeat(6)
});
console.log(dsong);
scribe.midi(dsong, 'dsong6.mid');
