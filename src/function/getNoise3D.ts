import SimplexNoise from "simplex-noise";

const simplex: SimplexNoise = new SimplexNoise();

const octaves: number = 4;
const fallout: number = 0.5;

export default function (x: number, y: number, z: number): number {
  let amplitude: number = 1;
  let factor: number = 1;

  let sum: number = 0;
  for (let i = 1; i < octaves; i++) {
    amplitude *= fallout;
    const n3d: number = simplex.noise3D(x * factor, y * factor, z * factor);
    sum += amplitude * (n3d + 1) * 0.5;
    factor *= 2;
  }

  return sum;
}
