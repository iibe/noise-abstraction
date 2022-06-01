export interface Config {
  /**
   * Number of particles.
   */
  particles: number;
  /**
   * Step number.
   */
  step: number;
  /**
   * Base number.
   */
  base: number;
  /**
   * Z axis increment number.
   */
  zIncrement: number;
  /**
   * Number of frames for render loop.
   */
  frameLimit: number;
}

export default {
  particles: 3000,
  step: 5,
  base: 1000,
  zIncrement: 0.001,
  frameLimit: 5000,
} as Config;
