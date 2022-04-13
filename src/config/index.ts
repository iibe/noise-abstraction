export interface Config {
  particles: number;
  step: number;
  base: number;
  zIncrement: number;
  stop: number;
}

export default {
  particles: 3000,
  step: 5,
  base: 1000,
  zIncrement: 0.001,
  stop: 5000,
} as Config;
