// Oscilloscope SVG waveform path generators normalized to a 640x92 viewBox
const WAVE_WIDTH = 640;
const PAD_X = 8;
const CENTER_Y = 46;
const AMP = 27;

const round = (n) => Math.round(n * 100) / 100;

const buildSampledPath = (samples, fn) => {
  const usable = WAVE_WIDTH - PAD_X * 2;
  const parts = [];
  for (let i = 0; i <= samples; i += 1) {
    const t = i / samples;
    const x = round(PAD_X + t * usable);
    const y = round(fn(t));
    parts.push(`${i === 0 ? 'M' : 'L'} ${x} ${y}`);
  }
  return parts.join(' ');
};

export const WAVEFORM_VIEWBOX = `0 0 ${WAVE_WIDTH} 92`;

export const getWaveformPath = (type) => {
  const usable = WAVE_WIDTH - PAD_X * 2;
  const highY = CENTER_Y - AMP;
  const lowY = CENTER_Y + AMP;

  switch (type) {
    case 'sine':
      return buildSampledPath(
        140,
        (t) => CENTER_Y - AMP * Math.sin(t * Math.PI * 2 * 4)
      );

    case 'square': {
      const cycles = 4;
      const step = usable / cycles;
      const parts = [`M ${PAD_X} ${highY}`];
      for (let i = 0; i < cycles; i += 1) {
        const x0 = PAD_X + i * step;
        const xMid = round(x0 + step * 0.5);
        const xEnd = round(x0 + step);
        parts.push(`L ${xMid} ${highY}`);
        parts.push(`L ${xMid} ${lowY}`);
        parts.push(`L ${xEnd} ${lowY}`);
        if (i < cycles - 1) {
          parts.push(`L ${xEnd} ${highY}`);
        }
      }
      return parts.join(' ');
    }

    case 'triangle': {
      const cycles = 4;
      const step = usable / cycles;
      const parts = [`M ${PAD_X} ${CENTER_Y}`];
      for (let i = 0; i < cycles; i += 1) {
        const x0 = PAD_X + i * step;
        const xPeak = round(x0 + step * 0.25);
        const xTrough = round(x0 + step * 0.75);
        const xEnd = round(x0 + step);
        parts.push(`L ${xPeak} ${highY}`);
        parts.push(`L ${xTrough} ${lowY}`);
        parts.push(`L ${xEnd} ${CENTER_Y}`);
      }
      return parts.join(' ');
    }

    case 'pulse': {
      // Narrow high-duty telemetry bursts sitting above a steady baseline
      const baseY = CENTER_Y + 18;
      const peakY = CENTER_Y - 29;
      const cycles = 5;
      const step = usable / cycles;
      const parts = [`M ${PAD_X} ${baseY}`];
      for (let i = 0; i < cycles; i += 1) {
        const x0 = PAD_X + i * step;
        const xRise = round(x0 + step * 0.18);
        const xFall = round(x0 + step * 0.34);
        const xSubRise = round(x0 + step * 0.46);
        const xSubFall = round(x0 + step * 0.54);
        const xEnd = round(x0 + step);
        parts.push(`L ${xRise} ${baseY}`);
        parts.push(`L ${xRise} ${peakY}`);
        parts.push(`L ${xFall} ${peakY}`);
        parts.push(`L ${xFall} ${baseY}`);
        parts.push(`L ${xSubRise} ${baseY}`);
        parts.push(`L ${xSubRise} ${CENTER_Y - 8}`);
        parts.push(`L ${xSubFall} ${CENTER_Y - 8}`);
        parts.push(`L ${xSubFall} ${baseY}`);
        parts.push(`L ${xEnd} ${baseY}`);
      }
      return parts.join(' ');
    }

    case 'sawtooth': {
      const cycles = 4;
      const step = usable / cycles;
      const parts = [`M ${PAD_X} ${lowY}`];
      for (let i = 0; i < cycles; i += 1) {
        const xEnd = round(PAD_X + (i + 1) * step);
        parts.push(`L ${xEnd} ${highY}`);
        parts.push(`L ${xEnd} ${lowY}`);
      }
      return parts.join(' ');
    }

    case 'mixed':
    default:
      // Composite modulated harmonic signal representing combined structural & speed optimization
      return buildSampledPath(
        180,
        (t) =>
          CENTER_Y -
          (17 * Math.sin(t * Math.PI * 2 * 3) +
            9 * Math.sin(t * Math.PI * 2 * 9 + 0.6) +
            5 * Math.cos(t * Math.PI * 2 * 1.5))
      );
  }
};

