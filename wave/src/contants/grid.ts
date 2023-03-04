import { TileClass } from "../classes/TileClass";
import { tiles } from "./tiles";

export type Grid = TileClass[][];

const pureGrid: Grid = [
  [
    new TileClass(tiles.tile1, 1, false, 4),
    new TileClass(tiles.tile1, 1, false, 4),
  ],
  [
    new TileClass(tiles.tile1, 1, false, 4),
    new TileClass(tiles.tile1, 1, false, 4),
  ],
];

export { pureGrid };
