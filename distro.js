const RHY_BOUNCE = {
  'x': {
    '_': 0.4,
    'x': 0.1,
    '-': 0.5
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

const RHY_STRUNG = {
  'x': {
    '_': 0.8,
    'x': 0.05,
    '-': 0.15
  },
  '_': {
    'x': 0.03,
    '-': 0.25,
    '_': 0.7
  },
  '-': {
    'x': 0.9,
    '_': 0.0,
    '-': 0.1
  }
};

const TUNE_BASIC = {
  '0': 0.15,
  '1': 0.1,
  '2': 0.05,
  '3': 0.25,
  '4': 0.25,
  '5': 0.1,
  '6': 0.1
};

module.exports = {
  RHY_BOUNCE: RHY_BOUNCE,
  RHY_STRUNG: RHY_STRUNG,
  TUNE_BASIC: TUNE_BASIC
}
