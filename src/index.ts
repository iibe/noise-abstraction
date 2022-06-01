import Particle from "./class/particle";
import config from "./config";
import getNoise3D from "./function/getNoise3D";

/** Constants */
const canvas = <HTMLCanvasElement>document.getElementById("canvas");

/** Variables */
let context: CanvasRenderingContext2D;
let screenW: number, screenH: number;
let centerX: number, centerY: number;
let hueBase: number = 0;
let zOffset: number = 0;

let $frames: number = 0;

/** Functions */
const newScene = (): void => {
  $frames = 0;
};

/** Bootstrap */
window.onresize = () => {
  setCanvasProps();

  // if animiation was stopped
  // then update pause timer and call render loop again
  // else just update pause timer
  if ($frames > config.frameLimit) {
    newScene();
    rerender();
  } else {
    newScene();
  }
};

setCanvasProps();

const particles: Particle[] = [];
for (let i = 0; i < config.particles; i++) {
  particles[i] = new Particle();
  setParticle(particles[i]);
}

newScene();
rerender();

/** Set canvas properties on window resize */
function setCanvasProps(): void {
  screenW = canvas.width = window.innerWidth;
  screenH = canvas.height = window.innerHeight;

  centerX = screenW / 2;
  centerY = screenH / 2;

  context = canvas.getContext("2d");
  context.lineWidth = 0.3;
  context.lineCap = context.lineJoin = "round";
}

/** Set particle props */
function setParticle(p: Particle): void {
  p.x = p.$x = screenW * Math.random();
  p.y = p.$y = screenH * Math.random();

  p.color.h =
    hueBase + (Math.atan2(centerY - p.y, centerX - p.x) * 180) / Math.PI;
  p.color.s = 1;
  p.color.l = 0.5;
  p.color.a = 0;
}

/** Update function */
function rerender(): void {
  if ($frames > config.frameLimit) {
    return void 0;
  }

  $frames++;

  for (let i = 0; i < config.particles; i++) {
    const p: Particle = particles[i];
    p.$x = p.x;
    p.$y = p.y;

    const noise: number = getNoise3D(
      (p.x / config.base) * 1.75,
      (p.y / config.base) * 1.75,
      zOffset,
    );

    const angle: number = Math.PI * 6 * noise;
    p.x += Math.cos(angle) * config.step;
    p.y += Math.sin(angle) * config.step;

    if (p.color.a < 1) {
      p.color.a += 0.003;
    }

    context.beginPath();
    context.strokeStyle = p.color.toString();
    context.moveTo(p.$x, p.$y);
    context.lineTo(p.x, p.y);
    context.stroke();

    if (p.x < 0 || p.x > screenW || p.y < 0 || p.y > screenH) {
      setParticle(p);
    }
  }

  hueBase += 0.1;
  zOffset += config.zIncrement;

  window.requestAnimationFrame(rerender);
}
