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

const PM25_BREAKPOINTS: Breakpoints = {
  good: {
    conLo: 0,
    conHi: 12,
    aqiLo: 0,
    aqiHi: 50,
  },

  okay: {
    conLo: 12.1,
    conHi: 35.4,
    aqiLo: 51,
    aqiHi: 100,
  },

  moderate: {
    conLo: 35.5,
    conHi: 55.4,
    aqiLo: 101,
    aqiHi: 150,
  },

  poor: {
    conLo: 55.5,
    conHi: 150.4,
    aqiLo: 151,
    aqiHi: 200,
  },

  bad: {
    conLo: 150.5,
    conHi: 250.4,
    aqiLo: 201,
    aqiHi: 300,
  },

  hazardous: {
    conLo: 250.5,
    conHi: 500.4,
    aqiLo: 301,
    aqiHi: 500,
  },
};

const PM10_BREAKPOINTS: Breakpoints = {
  good: {
    conLo: 0,
    conHi: 54,
    aqiLo: 0,
    aqiHi: 50,
  },

  okay: {
    conLo: 55,
    conHi: 154,
    aqiLo: 51,
    aqiHi: 100,
  },

  moderate: {
    conLo: 155,
    conHi: 254,
    aqiLo: 101,
    aqiHi: 150,
  },

  poor: {
    conLo: 255,
    conHi: 354,
    aqiLo: 151,
    aqiHi: 200,
  },

  bad: {
    conLo: 355,
    conHi: 424,
    aqiLo: 201,
    aqiHi: 300,
  },

  hazardous: {
    conLo: 425,
    conHi: 604,
    aqiLo: 301,
    aqiHi: 500,
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
}
