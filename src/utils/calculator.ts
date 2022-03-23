interface Breakpoint {
  conLo: number;
  conHi: number;
  aqiLo: number;
  aqiHi: number;
}

interface Breakpoints {
  good: Breakpoint;
  okay: Breakpoint;
  moderate: Breakpoint;
  poor: Breakpoint;
  bad?: Breakpoint;
  hazardous: Breakpoint;
}

const OZONE_BREAKPOINTS: Breakpoints = {
  good: {
    conLo: 0,
    conHi: 0.054,
    aqiLo: 0,
    aqiHi: 50,
  },

  okay: {
    conLo: 0.055,
    conHi: 0.07,
    aqiLo: 51,
    aqiHi: 100,
  },

  moderate: {
    conLo: 0.071,
    conHi: 0.085,
    aqiLo: 101,
    aqiHi: 150,
  },

  poor: {
    conLo: 0.086,
    conHi: 0.105,
    aqiLo: 151,
    aqiHi: 200,
  },

  hazardous: {
    conLo: 0.106,
    conHi: 0.2,
    aqiLo: 201,
    aqiHi: 300,
  },
};

function checkRange(num: Number, min: Number, max: Number): Boolean {
  return min <= num && num <= max;
}

function calculateAQI(conI: number, breakpoints: Breakpoints): Number {
  for (const breakpoint of Object.values(breakpoints)) {
    if (checkRange(conI, breakpoint.conLo, breakpoint.conHi)) {
      const { conLo, conHi, aqiLo, aqiHi } = breakpoint;
      return Math.round(
        ((conI - conLo) * (aqiHi - aqiLo)) / (conHi - conLo) + aqiLo
      );
    }
}
