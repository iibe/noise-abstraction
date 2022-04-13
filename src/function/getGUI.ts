import { GUI } from "dat.gui";
import type { Config } from "../config";

export default function (config: Config): void {
  const gui: GUI = new GUI();

  gui.add(config, "step", 1, 10);
  gui.add(config, "base", 500, 3000);
  gui.add(config, "zIncrement", 0.0001, 0.01);
  gui.add(config, "stop", 1000, 5000);
  gui.close();
}
